import "./approvedProfile.scss";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import SidebarRecruiter from "../sidebarRecruiter/SidebarRecruiter";
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

const ApprovedProfile = () => {
  const [recruitmentApproveds, setRecruitmentApproved] = useState([]);
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // console.log(data);
  }, []);

  useEffect(() => {
    const getFileApproved = async () => {
      const res = await axios.get("/api/recruitmentApproved");
      setRecruitmentApproved(res.data.recruitmentApproved);
      //   console.log("abc", res.data);
    };

    getFileApproved();
  }, []);
  return (
    <div className="homeApprovedRecruit">
      <SidebarRecruiter />
      <div className="homeApprovedContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="datatable">
          <div className="datatableTitle">
            Danh sách hồ sơ đã được duyệt
            {/* <Link to="/#" className="link">
                Add New
              </Link> */}
            <span>Tổng số {recruitmentApproveds.length}</span>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">Mã</StyledTableCell>
                  <StyledTableCell>File CV</StyledTableCell>
                  {/* <StyledTableCell align="right">image</StyledTableCell> */}
                  <StyledTableCell align="right">Họ Tên</StyledTableCell>
                  <StyledTableCell align="right">
                    Mô tả bản thân
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Số điện thoại&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">email&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">
                    Ngày tạo&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Trạng thái&nbsp;
                  </StyledTableCell>
                  {/* <StyledTableCell align="left">
                    Hành dộng&nbsp;
                  </StyledTableCell> */}
                </TableRow>
              </TableHead>
              <TableBody>
                {recruitmentApproveds.map((recruitmentApproved, index) => (
                  <StyledTableRow key={recruitmentApproved.urlCV}>
                    <StyledTableCell align="right">
                      {index + 1}{" "}
                    </StyledTableCell>

                    <StyledTableCell component="th" scope="row">
                      <a href={recruitmentApproved.urlCV} target="_blank">
                        {recruitmentApproved.name}_CV
                      </a>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentApproved.name}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentApproved.descriptions}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentApproved.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentApproved.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(
                        recruitmentApproved.createdAt
                      ).toLocaleDateString()}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      className={`status ${recruitmentApproved.status}`}
                    >
                      {recruitmentApproved.status}
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>

          {/* <DataGrid
              className="datagrid"
              rows={recruitNews}
              columns={userColumns.concat(actionColumn1)}
              pageSize={9}
              rowsPerPageOptions={[10]}
              checkboxSelection
            /> */}
        </div>
      </div>
    </div>
  );
};

export default ApprovedProfile;
