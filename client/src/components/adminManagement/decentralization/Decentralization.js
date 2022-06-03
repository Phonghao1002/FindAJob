import NavbarAdmin from "../navbarAdmin/NavbarAdmin"
import Sidebar from "../sidebar/Sidebar"
import "./decentralization.scss"
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import MenuIcon from "@material-ui/icons/Menu";
import PersonAddIcon from "@material-ui/icons/PersonAdd";
import AppBar from "@material-ui/core/AppBar";
import { DataGrid } from "@mui/x-data-grid";
import { useState } from "react";

const columns = [
    { field: "id", headerName: "ID", width: 50 },
    {
        field: "firstName",
        headerName: "First name",
        width: 150,
        editable: true
    },
    {
        field: "lastName",
        headerName: "Last name",
        width: 90,
        editable: true
    },
    {
        field: "age",
        headerName: "Age",
        type: "number",
        width: 50,
        editable: true
    },
    {
        field: "fullName",
        headerName: "Full name",
        description: "This column has a value getter and is not sortable.",
        sortable: false,
        width: 160,
        valueGetter: (params) =>
            `${params.getValue(params.id, "firstName") || ""} ${params.getValue(params.id, "lastName") || ""
            }`
    },
    {
        field: "decentralozation",
        headerName: "Decentralozation",
        width: 150,
        editable: true
    }
];
const columns1 = [
    { field: "id", headerName: "ID", width: 50 },
    {
        field: "firstName",
        headerName: "First name",
        width: 250,
        editable: true
    },
]
const rows1 = [
    { id: 1, firstName: "Ứng viên" },
    { id: 2, firstName: "Người tuyển dụng" },
    { id: 3, firstName: "Quản lý công việc" },
    { id: 4, firstName: "Quản lý tin tức tuyển dụng" },
    { id: 5, firstName: "Quản trị" },
    { id: 6, firstName: "Quản lý thống kê" },
    { id: 7, firstName: "Quản lý website" },
];
const rows = [
    { id: 1, lastName: "A", firstName: "Nguyễn Văn", age: 27, decentralozation: "..." },
    { id: 2, lastName: "B", firstName: "Nguyễn Thị", age: 29, decentralozation: "..." },
    { id: 3, lastName: "C", firstName: "Phạm Hữu", age: 30, decentralozation: "..." }
];

const useStyles = makeStyles((theme) => ({
    home: {
        display: "flex"
    },
    root: {
        // marginLeft: theme.spacing(10),
        flex: 5.5,
        backgroundColor: theme.palette.background.default,
        // display: "flex"
        width: theme.spacing(100)

    },
    root1: {
        marginRight: theme.spacing(10),
        flex: 2.5,
        backgroundColor: theme.palette.background.default,
        // display: "flex"
        width: theme.spacing(30)

    },
    menuButton: {
        marginLeft: theme.spacing(7),
        marginRight: theme.spacing(1)
    },
    title: {
        flexGrow: 1
    },
    toolbar: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: theme.spacing(2)
    },
    content: {
        // fontSize: theme.spacing(50),
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    },
    btnView: {
        display: "flex"
    }
}));



const Decentralization = () => {
    const classes = useStyles();
    // const [openTable, setOpenTable] = useState(false);

    return (
        <div className="decentralization">
            <Sidebar />
            <div className="decentralizationContainer">
                <NavbarAdmin />
                <div className={classes.home}>
                    <div className={classes.root}>
                        <CssBaseline />
                        {/* <div className="decentralizationleft">
                    
                    </div> */}
                        {/* <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                My App
                            </Typography>
                        </Toolbar>
                    </AppBar> */}
                        <Paper className={classes.content}>
                            <div className={classes.toolbar}>
                                <Typography variant="h6" component="h2" color="primary">
                                    Danh sách thành viên
                                </Typography>
                                {/* <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<PersonAddIcon />}
                            >
                                New User
                            </Button> */}
                            </div>

                            <div style={{ height: 300, width: "100%" }}>
                                <DataGrid rows={rows} columns={columns} checkboxSelection />
                            </div>
                        </Paper>


                    </div>

                    <div className={classes.root1}>
                        <CssBaseline />
                        {/* <div className="decentralizationleft">
                    
                    </div> */}
                        {/* <AppBar position="static">
                        <Toolbar>
                            <IconButton
                                edge="start"
                                className={classes.menuButton}
                                color="inherit"
                                aria-label="menu"
                            >
                                <MenuIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                My App
                            </Typography>
                        </Toolbar>
                    </AppBar> */}


                        <Paper className={classes.content}>
                            <div className={classes.toolbar}>
                                <Typography variant="h6" component="h2" color="primary">
                                    Phân quyền
                                </Typography>
                                {/* <Button
                                variant="outlined"
                                color="secondary"
                                startIcon={<PersonAddIcon />}
                            >
                                New User
                            </Button> */}
                            </div>
                            {/* <Button onClick={() => setOpenTable(!openTable)}}>Click</Button> */}
                            <div style={{ height: 600, width: "100%" }}>
                                <DataGrid rows={rows1} columns={columns1} checkboxSelection />
                            </div>
                        </Paper>
                        <div className={classes.btnView}>
                            <Button
                                variant="outlined"
                                color="secondary"
                                marginRight="10px"
                                startIcon={<PersonAddIcon />}
                                className={classes.menuButton}
                            >
                                Lưu
                            </Button>
                            <Button
                                variant="outlined"
                                color="secondary"
                                marginRight="10px"
                                // startIcon={<PersonAddIcon />}
                                // className={classes.menuButton}
                            >
                                Hủy
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Decentralization