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
      alert("Đã xóa thành công tin tuyển dụng!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  // console.log("đsấd", recruitNews);

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
            Danh sách tin tuyển dụng
            <div className="Search">
              <div className="lsItemInput">
                <label>Tìm kiếm</label>
                <input
                  type="text"
                  value={search}
                  placeholder="Nhập tên công việc ..."
                  onChange={(e) => setSearch(e.target.value.toLowerCase())}
                />
              </div>
              <div className="lsOptionItemsort">
                <span className="lsOptionText">Sắp xếp</span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="lsOptioncbbox"
                >
                  <option value="">Tin mới nhất</option>
                  <option value="sort=oldest">Tin cũ nhất</option>
                </select>
                {/* <select className="lsOptioncbbox">
                  <option value="">Mới nhất</option>
                  <option value="sort=oldest">Cũ nhất</option>
                </select> */}
              </div>
            </div>
            <Link to="/recruiter/createRecruitNews" className="link">
              Tạo mới tin tuyển dụng
            </Link>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">id</StyledTableCell>
                  <StyledTableCell>Tiêu đề</StyledTableCell>
                  {/* <StyledTableCell align="right">image</StyledTableCell> */}
                  <StyledTableCell align="right">Tên Công Ty</StyledTableCell>
                  <StyledTableCell align="right">lương</StyledTableCell>
                  <StyledTableCell align="right">Địa chỉ&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">
                    Vị trí cần tuyển&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Danh mục&nbsp;
                  </StyledTableCell>
                  {/* <StyledTableCell align="right">
                    Trạng thái&nbsp;
                  </StyledTableCell> */}
                  <StyledTableCell align="left">
                    Hành động&nbsp;
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
                      {formatPrice(recruitNew.price)} VNĐ
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
                        <Button className="viewButtonRN">Sửa</Button>
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
                        <Button className="deleteButtonRN">Xóa</Button>
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
                        <Button className="deleteButtonRN">DS ứng tuyển</Button>
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
