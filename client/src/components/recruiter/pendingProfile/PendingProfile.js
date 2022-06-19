import "./pendingProfile.scss";
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

const PendingProfile = () => {
  //   const state = useContext(GlobalState);
  //   const [recruitmentPendings] = state.RecruitmentAPI.filePendings;
  //   console.log("dff", recruitmentPendings);
  const [recruitmentPendings, setRecruitmentPending] = useState([]);
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // console.log(data);
  }, []);

  useEffect(() => {
    const getFilePending = async () => {
      const res = await axios.get("/api/recruitmentPending");
      setRecruitmentPending(res.data.recruitmentPending);
      //   console.log("abc", res.data.recruitmentPending);
    };

    getFilePending();
  }, []);
  return (
    <div className="homePendingRecruit">
      <SidebarRecruiter />
      <div className="homePendingContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="datatable">
          <div className="datatableTitle">
            Danh sách hồ sơ chưa được duyệt
            {/* <Link to="/#" className="link">
              Add New
            </Link> */}
            <span>Tổng số: {recruitmentPendings.length}</span>
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
                {recruitmentPendings.map((recruitmentPending, index) => (
                  <StyledTableRow key={recruitmentPending.urlCV}>
                    <StyledTableCell align="right">
                      {index + 1}{" "}
                    </StyledTableCell>

                    <StyledTableCell component="th" scope="row">
                      <a href={recruitmentPending.urlCV} target="_blank">
                        {recruitmentPending.name}_CV
                      </a>
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentPending.name}{" "}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentPending.descriptions}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentPending.phoneNumber}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {recruitmentPending.email}
                    </StyledTableCell>
                    <StyledTableCell align="right">
                      {new Date(
                        recruitmentPending.createdAt
                      ).toLocaleDateString()}
                    </StyledTableCell>
                    <StyledTableCell
                      align="right"
                      className={`status ${recruitmentPending.status}`}
                    >
                      {recruitmentPending.status}
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

export default PendingProfile;
