import NavbarAdmin from "../navbarAdmin/NavbarAdmin";
import Sidebar from "../sidebar/Sidebar";
import "./decentralization.scss";

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

import { DataGrid } from "@mui/x-data-grid";
import { useState, useEffect } from "react";
import Navbargeneral from "../../navbargeneral/Navbargeneral";
import axios from "axios";

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

const Decentralization = () => {
  // const classes = useStyles();
  const [infoUser, setInfoUser] = useState({});
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // console.log(data);
  }, []);
  // const [openTable, setOpenTable] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("http://localhost:4110/user/recruiter");
      setUsers(res.data);
      // console.log(res.data);
    };
    getUsers();
  }, []);

  return (
    <div className="decentralization">
      <Sidebar />
      <div className="decentralizationContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="datatable">
          <div className="datatableTitle">
            Danh sách Người Dùng
            {/* <Link to="/users/new" className="link">
              Tạo mới Người Dùng
            </Link> */}
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Mã</StyledTableCell>

                  <StyledTableCell>Tên người dùng</StyledTableCell>
                  {/* <StyledTableCell align="right">image</StyledTableCell> */}
                  <StyledTableCell align="right">Email</StyledTableCell>
                  <StyledTableCell align="right">
                    Ngày tạo&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">Trạng thái</StyledTableCell>

                  {/* <StyledTableCell align="right">Avartar&nbsp;</StyledTableCell> */}
                  {/* <StyledTableCell align="right">updatedAt&nbsp;</StyledTableCell> */}
                  {/* <StyledTableCell align="left">Hành động&nbsp;</StyledTableCell> */}
                  <StyledTableCell align="left">
                    Phân quyền&nbsp;
                  </StyledTableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {users.map((user, index) => (
                  <StyledTableRow key={user._id}>
                    <StyledTableCell align="right">
                      {index + 1}{" "}
                    </StyledTableCell>

                    <StyledTableCell component="th" scope="row">
                      <div className="cellWithImg">
                        <img
                          className="cellImg"
                          src={user.avatar}
                          alt="avatar"
                        />
                        {user.name}
                      </div>
                    </StyledTableCell>
                    {/* <StyledTableCell align="right">{recruitNew.images} </StyledTableCell> */}
                    <StyledTableCell align="right">
                      {user.email}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(user.createdAt).toLocaleDateString()}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {user.status}
                    </StyledTableCell>
                    {/* <StyledTableCell align="right" className="cellBrowser">
                  <Button className="viewBrowser">Duyệt</Button>
                </StyledTableCell> */}

                    {/* <StyledTableCell align="right">{user.avatar}</StyledTableCell> */}
                    {/* <StyledTableCell align="right">{recruitNew.category}</StyledTableCell> */}
                    <StyledTableCell className="cellAction">
                      {/* <Link id="btn_view" to={`/recruiter/edit_RecruitNews/${recruitNew._id}`}> */}
                      <Button className="viewButton">Ứng Viên</Button>
                      {/* </Link> */}

                      {/* <Link id="btn_view" to="#" onClick={() => deleteRecruitNews(recruitNew._id, recruitNew.images.public_id)}> */}
                      <Button className="deleteButton">Nhà tuyển dụng</Button>
                      {/* </Link> */}
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

export default Decentralization;
