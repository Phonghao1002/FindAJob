import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NewspaperIcon from '@mui/icons-material/Newspaper';
import AssessmentIcon from '@mui/icons-material/Assessment';
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from 'react-router-dom'
import { useContext } from 'react';
import { DarkModeContext } from '../../../context/darkModeContext'

const Sidebar = () => {
    const { dispatch } = useContext(DarkModeContext)
    return (
        <div className="sidebar">
            <div className="top" >
                <Link to="/admin" style={{ textDecoration: "none" }}>
                    <span className="logo">Admin</span>
                </Link>
            </div>
            <hr />
            <div className="center">
                <ul>
                    <p className="title">MAIN</p>
                    <li>
                        <DashboardIcon className="icon" />
                        <span>Dashboard</span>
                    </li>
                    <p className="title">LISTS</p>
                    <Link to="/admin" style={{ textDecoration: "none" }}>
                        <li>
                            <AssessmentIcon className="icon" />
                            <span>View stats</span>
                        </li>
                    </Link>
                    <Link to="/users" style={{ textDecoration: "none" }}>
                        <li>
                            <PersonOutlineIcon className="icon" />
                            <span>Recruiter manager</span>
                        </li>
                    </Link>
                    <Link to="/candidateManager" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>candidate manager</span>
                        </li>
                    </Link>

                    {/* <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li> */}
                    <p className="title">USEFUL</p>
                    <Link to="/admin/decentralization" style={{ textDecoration: "none" }}>
                        <li>
                            <InsertChartIcon className="icon" />
                            <span>Decentralization</span>
                        </li>
                    </Link>

                    <Link to="/recruiter/createRecruitNews" style={{ textDecoration: "none" }}>
                        <li>
                            <NewspaperIcon className="icon" />
                            <span>Recruit News manager</span>
                        </li>
                    </Link>
                    <p className="title">SERVICE</p>
                    <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon" />
                        <span>Settings</span>
                    </li>
                    <p className="title">USER</p>
                    <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li>
                    <Link to="/login" style={{ textDecoration: "none" }}>
                        <li>
                            <ExitToAppIcon className="icon" />
                            <span>Logout</span>
                        </li>
                    </Link>

                </ul>
            </div>
            <div className="bottom">
                <div className="colorOption"
                    onClick={() => dispatch({ type: "LIGHT" })}>
                </div>
                <div className="colorOption"
                    onClick={() => dispatch({ type: "DARK" })}>
                </div>
            </div>
        </div>

    )
}

export default Sidebar