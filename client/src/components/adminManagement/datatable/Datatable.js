import "./datatable.scss";
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
import { userColumns, userRows } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";

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

const Datatable = ({}) => {
  const state = useContext(GlobalState);
  const [users] = state.userAPI.users;

  const [data, setData] = useState(userRows);

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };

  const actionColumn = [
    {
      field: "action",
      headerName: "Action",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="cellAction">
            <Link to="/users/test" style={{ textDecoration: "none" }}>
              <div className="viewButton">View</div>
            </Link>
            <div
              className="deleteButton"
              onClick={() => handleDelete(params.row.id)}
            >
              Delete
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div className="datatable">
      <div className="datatableTitle">
        Danh sách Người Dùng
        <Link to="/users/new" className="link">
          Tạo mới Người Dùng
        </Link>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 800 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell align="right">Mã</StyledTableCell>

              <StyledTableCell>Tên người dùng</StyledTableCell>
              {/* <StyledTableCell align="right">image</StyledTableCell> */}
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Mật khẩu</StyledTableCell>
              <StyledTableCell align="right">Ngày tạo&nbsp;</StyledTableCell>
              {/* <StyledTableCell align="right">Avartar&nbsp;</StyledTableCell> */}
              {/* <StyledTableCell align="right">updatedAt&nbsp;</StyledTableCell> */}
              <StyledTableCell align="left">Hành động&nbsp;</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {users.map((user, index) => (
              <StyledTableRow key={user._id}>
                <StyledTableCell align="right">{index + 1} </StyledTableCell>

                <StyledTableCell component="th" scope="row">
                  <div className="cellWithImg">
                    <img
                      className="cellImg"
                      src={user?.avatar?.url}
                      alt="avatar"
                    />
                    {user.name}
                  </div>
                </StyledTableCell>
                {/* <StyledTableCell align="right">{recruitNew.images} </StyledTableCell> */}
                <StyledTableCell align="right">{user.email} </StyledTableCell>
                <StyledTableCell align="right">{user.password}</StyledTableCell>
                <StyledTableCell align="right">
                  {new Date(user.createdAt).toLocaleDateString()}
                </StyledTableCell>
                {/* <StyledTableCell align="right">{user.avatar}</StyledTableCell> */}
                {/* <StyledTableCell align="right">{recruitNew.category}</StyledTableCell> */}
                <StyledTableCell className="cellAction">
                  {/* <Link id="btn_view" to={`/recruiter/edit_RecruitNews/${recruitNew._id}`}> */}
                  <Button className="viewButton">Edit</Button>
                  {/* </Link> */}

                  {/* <Link id="btn_view" to="#" onClick={() => deleteRecruitNews(recruitNew._id, recruitNew.images.public_id)}> */}
                  <Button className="deleteButton">Delete</Button>
                  {/* </Link> */}
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Datatable;
