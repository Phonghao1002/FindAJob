import "./applicationHistory.scss";
import React, { useContext } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import { GlobalState } from "../../../GlobalState";
import SidebarCandidate from "../sidebarCandidate/SidebarCandidate";
import NavbarCandidate from "../NavbarCandidate/NavbarCandidate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbargeneral from "../../navbargeneral/Navbargeneral";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const ApplicationHistory = () => {
  const [infoUser, setInfoUser] = useState({});
  const [recruitments, setRecruitments] = useState([]);
  const [sort, setSort] = useState("");

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    console.log("data", infoUser);
  }, []);

  const getRecruitMent = async () => {
    const res = await axios.get(
      `http://localhost:4110/api/applicationHistory?idUser=${infoUser._id}&${sort}`
    );
    setRecruitments(res.data.data);
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("infoUser"));
    if (infoUser) {
      getRecruitMent();
    }
    // console.log("data", infoUser);
  }, [infoUser, sort]);

  const deleteRecruitment = async (id) => {
    try {
      const deleteRecruiment = axios.delete(
        `http://localhost:4110/api/recruitment/${id}`
      );
      await deleteRecruitment;
      alert("???? h???y n???p b??i ???ng tuy???n !");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  // const state = useContext(GlobalState)

  // const [recruitNews] = state.recruitmentNewsAPI.recruitNews
  // console.log(recruitNews)
  return (
    <div className="homeApplyHistory">
      <SidebarCandidate />
      <div className="homeApplyHistoryContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="PersonalPage">
          <div className="personalContainer">
            <div className="topPersonalPage">
              <h1>L???ch s??? ???ng tuy???n</h1>
            </div>
            <div className="bottomPersonalPage">
              <div className="datatableTitle">
                Danh s??ch ???? ???ng tuy???n th??nh c??ng
                {/* <Link to="/#" className="link">
                  Add New
                </Link> */}
                <div className="headerSearchItem">
                  <span>B??? l???c: </span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="lsOptioncbbox"
                  >
                    <option value="">Tin m???i nh???t</option>
                    <option value="sort=oldest">Tin c?? nh???t</option>
                    {/* <option value='sort=-sold'>l?????t t????ng t??c nhi???u nh???t</option> */}
                    {/* <option value="sort=-price">L????ng: Cao - Th???p</option>
                <option value="sort=price">L????ng: Th???p - Cao</option> */}
                  </select>
                </div>
                <span>T???ng h??? s?? ???? ???ng tuy???n: {recruitments.length}</span>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">id</StyledTableCell>
                      <StyledTableCell>File CV</StyledTableCell>
                      {/* <StyledTableCell align="right">image</StyledTableCell> */}
                      <StyledTableCell align="right">H??? v?? T??n</StyledTableCell>
                      <StyledTableCell align="right">M?? t???</StyledTableCell>
                      <StyledTableCell align="right">
                        S??? ??i???n tho???i&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        email&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Ng??y t???o&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        tr???ng th??i&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        H??nh ?????ng&nbsp;
                      </StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {recruitments.map((recruitment, index) => (
                      <StyledTableRow key={recruitment.urlCV}>
                        <StyledTableCell align="right">
                          {index + 1}{" "}
                        </StyledTableCell>

                        <StyledTableCell component="th" scope="row">
                          <a href={recruitment.urlCV} target="_blank">
                            {recruitment.name}_CV
                          </a>
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {recruitment.name}{" "}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {recruitment.descriptions}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {recruitment.phoneNumber}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {recruitment.email}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {new Date(recruitment.createdAt).toLocaleDateString()}
                        </StyledTableCell>
                        <StyledTableCell align="right">
                          {recruitment.status}
                        </StyledTableCell>
                        <StyledTableCell className="cellActionRN">
                          {/* <Link
                            id="btn_view"
                            to="#"
                            // to={`/recruiter/edit_RecruitNews/${recruitNew._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Button className="viewButtonRN">Edit</Button>
                          </Link> */}
                          {recruitment.status !== "???? ???????c duy???t" && (
                            <>
                              <Link
                                id="btn_delete"
                                to="#"
                                onClick={() =>
                                  deleteRecruitment(recruitment._id)
                                }
                                style={{ textDecoration: "none" }}
                              >
                                <Button className="deleteButtonRN">H???y</Button>
                              </Link>
                            </>
                          )}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ApplicationHistory;
