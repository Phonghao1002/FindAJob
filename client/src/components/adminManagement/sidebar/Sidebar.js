import "./sidebar.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import AssessmentIcon from "@mui/icons-material/Assessment";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";
import axios from "axios";

const Sidebar = () => {
  const { dispatch } = useContext(DarkModeContext);

  const logoutUser = async () => {
    await axios.get("http://localhost:4110/user/logout");

    localStorage.setItem("infoUser", null);
    window.location.href = "/";
  };
  return (
    <div className="sidebar">
      <div className="top">
        <Link to="/admin" style={{ textDecoration: "none" }}>
          <span className="logo">TRANG QUẢN LÝ</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          {/* <p className="title">CHÍNH</p>
          <li>
            <DashboardIcon className="icon" />
            <span>Dashboard</span>
          </li> */}
          <p className="title">CHÍNH</p>
          <Link to="/admin" style={{ textDecoration: "none" }}>
            <li>
              <AssessmentIcon className="icon" />
              <span>Xem thống kê</span>
            </li>
          </Link>
          <p className="title">DANH SÁCH QUẢN LÝ</p>
          <Link to="/admin/decentralization" style={{ textDecoration: "none" }}>
            <li>
              <InsertChartIcon className="icon" />
              <span>Quản lý danh sách Người Dùng</span>
            </li>
          </Link>

          <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Phân quyền</span>
            </li>
          </Link>
          {/* <Link to="/candidateManager" style={{ textDecoration: "none" }}>
            <li>
              <StoreIcon className="icon" />
              <span>candidate manager</span>
            </li>
          </Link> */}

          {/* <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li> */}
          {/* <p className="title">HỮU ÍCH</p> */}

          {/* <Link
            to="/recruiter/createRecruitNews"
            style={{ textDecoration: "none" }}
          >
            <li>
              <NewspaperIcon className="icon" />
              <span>Quản lý bài ứng tuyển</span>
            </li>
          </Link> */}
          {/* <p className="title">SERVICE</p>
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
                    </li> */}
          <p className="title">CÀI ĐẶT</p>
          {/* <li>
                        <AccountCircleOutlinedIcon className="icon" />
                        <span>Profile</span>
                    </li> */}
          <li onClick={logoutUser}>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div className="bottom">
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "LIGHT" })}
        ></div>
        <div
          className="colorOption"
          onClick={() => dispatch({ type: "DARK" })}
        ></div>
      </div>
    </div>
  );
};

export default Sidebar;
