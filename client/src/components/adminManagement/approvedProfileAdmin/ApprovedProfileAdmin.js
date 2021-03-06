import "./approvedProfileAdmin.scss";
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
import Navbargeneral from "../../navbargeneral/Navbargeneral";
import Sidebar from "../sidebar/Sidebar";

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

const ApprovedProfileAdmin = () => {
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
      <Sidebar />
      <div className="homeApprovedContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="datatable">
          <div className="datatableTitle">
            Danh s??ch h??? s?? ???? ???????c duy???t
            {/* <Link to="/#" className="link">
                Add New
              </Link> */}
            <span>T???ng s??? {recruitmentApproveds.length}</span>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">M??</StyledTableCell>
                  <StyledTableCell>File CV</StyledTableCell>
                  {/* <StyledTableCell align="right">image</StyledTableCell> */}
                  <StyledTableCell align="right">H??? T??n</StyledTableCell>
                  <StyledTableCell align="right">
                    M?? t??? b???n th??n
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    S??? ??i???n tho???i&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">email&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">
                    Ng??y t???o&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">
                    Tr???ng th??i&nbsp;
                  </StyledTableCell>
                  {/* <StyledTableCell align="left">
                    H??nh d???ng&nbsp;
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

export default ApprovedProfileAdmin;
