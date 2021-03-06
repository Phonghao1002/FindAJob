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
      alert("Đã hủy nộp bài ứng tuyển !");
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
              <h1>Lịch sử ứng tuyển</h1>
            </div>
            <div className="bottomPersonalPage">
              <div className="datatableTitle">
                Danh sách đã ứng tuyển thành công
                {/* <Link to="/#" className="link">
                  Add New
                </Link> */}
                <div className="headerSearchItem">
                  <span>Bộ lọc: </span>
                  <select
                    value={sort}
                    onChange={(e) => setSort(e.target.value)}
                    className="lsOptioncbbox"
                  >
                    <option value="">Tin mới nhất</option>
                    <option value="sort=oldest">Tin cũ nhất</option>
                    {/* <option value='sort=-sold'>lượt tương tác nhiều nhất</option> */}
                    {/* <option value="sort=-price">Lương: Cao - Thấp</option>
                <option value="sort=price">Lương: Thấp - Cao</option> */}
                  </select>
                </div>
                <span>Tổng hồ sơ đã ứng tuyển: {recruitments.length}</span>
              </div>
              <TableContainer component={Paper}>
                <Table sx={{ minWidth: 800 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell align="right">id</StyledTableCell>
                      <StyledTableCell>File CV</StyledTableCell>
                      {/* <StyledTableCell align="right">image</StyledTableCell> */}
                      <StyledTableCell align="right">Họ và Tên</StyledTableCell>
                      <StyledTableCell align="right">Mô tả</StyledTableCell>
                      <StyledTableCell align="right">
                        Số điện thoại&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        email&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        Ngày tạo&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="right">
                        trạng thái&nbsp;
                      </StyledTableCell>
                      <StyledTableCell align="left">
                        Hành động&nbsp;
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
                          {recruitment.status !== "Đã được duyệt" && (
                            <>
                              <Link
                                id="btn_delete"
                                to="#"
                                onClick={() =>
                                  deleteRecruitment(recruitment._id)
                                }
                                style={{ textDecoration: "none" }}
                              >
                                <Button className="deleteButtonRN">Hủy</Button>
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
