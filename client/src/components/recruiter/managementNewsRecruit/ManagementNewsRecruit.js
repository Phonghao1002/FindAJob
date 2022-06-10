import "./managementNewsRecruit.scss";
import { DataGrid } from "@mui/x-data-grid";
import { userColumns, userRows } from "../../../datatablesource";
import { useContext, useState, useEffect } from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button } from "@mui/material";
import SidebarRecruiter from "../sidebarRecruiter/SidebarRecruiter";
import NavbarRecruiter from "../navbarRecruiter/NavbarRecruiter";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";
import { Link, useParams, useNavigate } from "react-router-dom";
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

const ManagementNewsRecruit = () => {
  const [data, setData] = useState(userRows);
  const state = useContext(GlobalState);
  const params = useParams();
  const [infoUser, setInfoUser] = useState({});
  // const [recruitNews] = state.recruitmentNewsAPI.recruitNews

  const [recruitments, setRecruitments] = useState([]);
  const [initial, setInitial] = useState(true);

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("infoUser"));
  //   if (data) {
  //     setInfoUser(data);
  //   }
  //   if (initial) setInitial(false);
  //   // console.log(data);
  // }, []);
  // if (initial) return null;

  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };
  const getRecruitMent = async () => {
    const res = await axios.get(`/api/recruitment?idJob=${params.id}`);
    setRecruitments(res.data.data);
    console.log("aaa", res.data.data);
  };
  useEffect(() => {
    if (params) {
      console.log("asdsdas", params);
    }

    getRecruitMent();
  }, []);

  const handleBrowser = async (id) => {
    await axios
      .patch(`http://localhost:4110/api/updateRecruitMent/${id}`, {
        status: "Approved",
      })
      .then((res) => {
        alert(res.data.msg);
      })
      .catch((err) => console.log("err"));
  };
  //   const actionColumn1 = [
  //     {
  //       field: "action",
  //       headerName: "Action",
  //       width: 200,
  //       renderCell: (params) => {
  //         return (
  //           <div className="cellAction">
  //             <Link to="#" style={{ textDecoration: "none" }}>
  //               <div className="viewButton">View</div>
  //             </Link>
  //             <div
  //               className="deleteButton"
  //               onClick={() => handleDelete(params.row.id)}
  //             >
  //               Delete
  //             </div>
  //           </div>
  //         );
  //       },
  //     },
  //   ];

  return (
    <div className="homeManagementNewsRecruit">
      <SidebarRecruiter />
      <div className="homeCategoryContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="datatable">
          <div className="datatableTitle">
            Danh sách hồ sơ ứng tuyển
            <Link to="/#" className="link">
              Add New
            </Link>
          </div>
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 800 }} aria-label="customized table">
              <TableHead>
                <TableRow>
                  <StyledTableCell align="right">id</StyledTableCell>
                  <StyledTableCell>urlCV</StyledTableCell>
                  {/* <StyledTableCell align="right">image</StyledTableCell> */}
                  <StyledTableCell align="right">name</StyledTableCell>
                  <StyledTableCell align="right">descriptions</StyledTableCell>
                  <StyledTableCell align="right">
                    phoneNumber&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">email&nbsp;</StyledTableCell>
                  <StyledTableCell align="right">
                    createdAt&nbsp;
                  </StyledTableCell>
                  <StyledTableCell align="right">status&nbsp;</StyledTableCell>
                  <StyledTableCell align="left">Action&nbsp;</StyledTableCell>
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
                    <StyledTableCell
                      align="right"
                      className={`status ${recruitment.status}`}
                    >
                      {recruitment.status}
                    </StyledTableCell>
                    <StyledTableCell className="cellActionRN">
                      {recruitment.status !== "success" && (
                        <>
                          <Link
                            id="btn_view"
                            to="#"
                            // to={`/recruiter/edit_RecruitNews/${recruitNew._id}`}
                            style={{ textDecoration: "none" }}
                          >
                            <Button
                              className="viewButtonRN"
                              onClick={() => handleBrowser(recruitment._id)}
                            >
                              Duyệt
                            </Button>
                          </Link>
                          {/* <Link
                            id="btn_delete"
                            to="#"
                            // onClick={() =>
                            //   deleteRecruitNews(
                            //     recruitNew._id,
                            //     recruitNew.images.public_id
                            //   )
                            // }
                            style={{ textDecoration: "none" }}
                          >
                            <Button className="deleteButtonRN">Bỏ duyệt</Button>
                          </Link> */}
                        </>
                      )}
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

export default ManagementNewsRecruit;
