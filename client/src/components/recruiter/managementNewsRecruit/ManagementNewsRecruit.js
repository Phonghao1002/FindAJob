import "./managementNewsRecruit.scss"
import { DataGrid } from "@mui/x-data-grid";
import { userColumns1, userRows1 } from "../../../datatablesource";
import { Link } from "react-router-dom";
import { useContext, useState } from "react";
import SidebarRecruiter from "../sidebarRecruiter/SidebarRecruiter";
import NavbarRecruiter from "../navbarRecruiter/NavbarRecruiter";
import { GlobalState } from "../../../GlobalState"



const ManagementNewsRecruit = () => {
    const [data, setData] = useState(userRows1);
    const state = useContext(GlobalState)

    const [recruitNews] = state.recruitmentNewsAPI.recruitNews



    const handleDelete = (id) => {
        setData(data.filter((item) => item.id !== id));
    };

    const actionColumn1 = [
        {
            field: "action",
            headerName: "Action",
            width: 200,
            renderCell: (params) => {
                return (
                    <div className="cellAction">
                        <Link to="/recruiter/edit_RecruitNews/${product._id}" style={{ textDecoration: "none" }}>
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
        <div className="homeManagementNewsRecruit">
            <SidebarRecruiter />
            <div className='homeCategoryContainer'>
                <NavbarRecruiter />
                <div className="datatable">
                    <div className="datatableTitle">
                        Add New Recruit News
                        <Link to="/recruiter/createRecruitNews" className="link">
                            Add New
                        </Link>
                    </div>
                    <DataGrid
                        className="datagrid"
                        rows={data}
                        columns={userColumns1.concat(actionColumn1)}
                        pageSize={9}
                        rowsPerPageOptions={[10]}
                        checkboxSelection
                    />

                </div>
            </div>

        </div>

    )
}

export default ManagementNewsRecruit