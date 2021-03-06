import React, { useContext, useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { GlobalState } from "../../../GlobalState";
import { Button } from "@mui/material";
import SidebarRecruiter from "../sidebarRecruiter/SidebarRecruiter";
import NavbarRecruiter from "../navbarRecruiter/NavbarRecruiter";
import { Link } from "react-router-dom";
import axios from "axios";
import "./testCruiterNews.scss";
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

// const rows = [
//     createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData('Eclair', 262, 16.0, 24, 6.0),
//     createData('Cupcake', 305, 3.7, 67, 4.3),
//     createData('Gingerbread', 356, 16.0, 49, 3.9),
// ];

// function createData(name, calories, fat, carbs, protein) {
//     return { name, calories, fat, carbs, protein };
// }

const TestCruiterNews = () => {
  const state = useContext(GlobalState);
  const [recruitNews] = state.recruitmentNewsAPI.recruitNews;
  const [sort, setSort] = state.recruitmentNewsAPI.sort;
  const [search, setSearch] = state.recruitmentNewsAPI.search;
  const [loading, setLoading] = useState(false);
  const [token] = state.token;
  const [isAdmin] = state.userAPI.isAdmin;
  const [callback, setCallback] = state.recruitmentNewsAPI.callback;
  const [infoUser, setInfoUser] = useState({});
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    if (initial) setInitial(false);
    // console.log(data);
  }, []);

  if (initial) return null;

  // console.log(recruitNews)

  const deleteRecruitNews = async (id, public_id) => {
    try {
      setLoading(true);
      const destroyImg = axios.post(
        "/api/destroy",
        { public_id },
        {
          headers: { Authorization: token },
        }
      );
      const deleteRecruitNews = axios.delete(`/api/recruitNews/${id}`, {
        headers: { Authorization: token },
      });
      await destroyImg;
      await deleteRecruitNews;
      setCallback(!callback);
      setLoading(false);
      alert("???? x??a th??nh c??ng tin tuy???n d???ng!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  // console.log("??s???d", recruitNews);

  const formatPrice = (value) => {
    let valueString = new Intl.NumberFormat("en-US").format(value);
    return valueString;
  };
  return (
    <div className="homeManagementNewsRecruit">
      <SidebarRecruiter />
      <div className="homeCategoryContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="tableForm">
          <div className="datatableTitle">
            Danh s??ch tin tuy???n d???ng
            <div className="Search">
              <div className="lsItemInput">
                <label>T??m ki???m</label>
                <input
                  type="text"
                  value={search}
                  placeholder="Nh???p t??n c??ng vi???c ..."
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
              </div>
              <div className="lsOptionItemsort">
                <span className="lsOptionText">S???p x???p</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="lsOptioncbbox"
                >
                  <option value="">Tin m???i nh???t</option>
                  <option value="sort=oldest">Tin c?? nh???t</option>
                </select>
                {/* <select className="lsOptioncbbox">
                  <option value="">M???i nh???t</option>
                  <option value="sort=oldest">C?? nh???t</option>
                </select> */}
              </div>
            </div>
            <Link to="/recruiter/createRecruitNews" className="link">
              T???o m???i tin tuy???n d???ng
            </Link>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">id</StyledTableCell>
                  <StyledTableCell>Ti??u ?????</StyledTableCell>
                  {/* <StyledTableCell align="right">image</StyledTableCell> */}
                  <StyledTableCell align="right">T??n C??ng Ty</StyledTableCell>
                  <StyledTableCell align="right">l????ng</StyledTableCell>
                  <StyledTableCell align="right">?????a ch???&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">
                    V??? tr?? c???n tuy???n&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Danh m???c&nbsp;
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">
                    Tr???ng th??i&nbsp;
                  </StyledTableCell> */}
                  <StyledTableCell align="left">
                    H??nh ?????ng&nbsp;
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {recruitNews.map((recruitNew, index) => (
                  <StyledTableRow key={recruitNew.title}>
                    <StyledTableCell align="right">{index + 1}</StyledTableCell>

                    <StyledTableCell component="th" scope="row">
                      <div className="cellWithImg">
                        {/* <img className="cellImg" src={recruitNew.images} alt="avatar" /> */}
                        {recruitNew.title}
                      </div>
                    </StyledTableCell>
                    {/* <StyledTableCell align="right">{recruitNew.images} </StyledTableCell> */}
                    <StyledTableCell align="right">
                      {recruitNew.content}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {formatPrice(recruitNew.price)} VN??
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitNew.address}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitNew.rank}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitNew.category}
                    </StyledTableCell>
                    {/* <StyledTableCell align="right">
                      {recruitNew.status}
                    </StyledTableCell> */}
                    <StyledTableCell className="cellActionRN" align="center">
                      <Link
                        id="btn_view"
                        to={`/recruiter/edit_RecruitNews/${recruitNew._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        <Button className="viewButtonRN">S???a</Button>
                      </Link>

                      <Link
                        id="btn_delete"
                        to="#"
                        onClick={() =>
                          deleteRecruitNews(
                            recruitNew._id,
                            recruitNew.images.public_id
                          )
                        }
                        style={{ textDecoration: "none" }}
                      >
                        <Button className="deleteButtonRN">X??a</Button>
                      </Link>

                      <Link
                        id="btn_delete"
                        to={`/recruiter/managementRecruitMentId/${recruitNew._id}`}
                        // onClick={() =>
                        //   deleteRecruitNews(
                        //     recruitNew._id,
                        //     recruitNew.images.public_id
                        //   )
                        // }
                        style={{ textDecoration: "none" }}
                      >
                        <Button className="deleteButtonRN">DS ???ng tuy???n</Button>
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </div>
      </div>
    </div>
  );
};

export default TestCruiterNews;
