import "./browseCandidate.scss"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns2, userRows2 } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useState } from "react";
import SidebarRecruiter from "../sidebarRecruiter/SidebarRecruiter";
import NavbarRecruiter from "../navbarRecruiter/NavbarRecruiter";



const BrowseCandidate = () => {
    const [data, setData] = useState(userRows2);

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
                            <div className="viewButton">Duyệt</div>
                        </Link>
                        <Link to="/users/test" style={{ textDecoration: "none" }}>
                            <div className="refuseButton">Từ chối</div>
                        </Link>
                        <div
                            className="deleteButton"
                            onClick={() => handleDelete(params.row.id)}
                        >
                            Xóa
                        </div>
                    </div>
                );
            },
        },
    ];

    return (
        <div className="homeBrowseCandidate">
            <SidebarRecruiter />
            <div className='homeBrowseCandidateContainer'>
                <NavbarRecruiter />
                <div className="datatable">
                    <div className="datatableTitle">
                        Duyệt Hồ sơ Ứng Viên
                        {/* <Link to="/users/new" className="link">
                            Add New
                        </Link> */}
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={data}
                        columns={userColumns2.concat(actionColumn)}
                        pageSize={9}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />
                </div>
            </div>
        </div >

    )
}

export default BrowseCandidate