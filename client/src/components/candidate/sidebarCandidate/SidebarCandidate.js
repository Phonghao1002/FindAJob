import "./sidebarCandidate.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import WorkIcon from "@mui/icons-material/Work";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import WorkHistoryIcon from "@mui/icons-material/WorkHistory";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";
import axios from "axios";
import { GlobalState } from "../../../GlobalState";

const SidebarCandidate = () => {
  const state = useContext(GlobalState);
  const { dispatch } = useContext(DarkModeContext);
  const [saveJob] = state.userAPI.saveJob;

  // console.log(saveJobs)

  const logoutUser = async () => {
    await axios.get("/user/logout");

    localStorage.removeItem("firstLogin");
    window.location.href = "/";
  };
  return (
    <div className="sidebarCandidate">
      <div className="topsidebarCandidate">
        <Link to="/candidate" style={{ textDecoration: "none" }}>
          <span className="logo">Candidate</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">MAIN</p>

          <Link to="/candidate" style={{ textDecoration: "none" }}>
            <li>
              <AccountBoxIcon className="icon" />
              <span>Hồ sơ cá nhân</span>
            </li>
          </Link>

          <p className="title">LISTS</p>
          <Link
            to="/candidate/changePassword"
            style={{ textDecoration: "none" }}
          >
            <li>
              <TrendingUpIcon className="icon" />
              <span>Đổi mật khẩu</span>
            </li>
          </Link>
          <div className="cart-icon">
            <h1>{saveJob.length}</h1>
            <Link to="/candidate/myJobs" style={{ textDecoration: "none" }}>
              <li>
                <WorkIcon className="icon" />
                <span>Công việc của tôi</span>
              </li>
            </Link>
          </div>
          <Link
            to="/candidate/applicationHistory"
            style={{ textDecoration: "none" }}
          >
            <li>
              <WorkIcon className="icon" />
              <span>Lịch sử ứng tuyển</span>
            </li>
          </Link>

          {/* <li>
                        <CreditCardIcon className="icon" />
                        <span>Orders</span>
                    </li> */}
          {/* <li>
                        <LocalShippingIcon className="icon" />
                        <span>Delivery</span>
                    </li> */}
          {/* <p className="title">USEFUL</p>
                    <li>
                        <InsertChartIcon className="icon" />
                        <span>Stats</span>
                    </li>
                    <li>
                        <NotificationsNoneIcon className="icon" />
                        <span>Notifications</span>
                    </li> */}
          <p className="title">SERVICE</p>
          {/* <li>
                        <SettingsSystemDaydreamOutlinedIcon className="icon" />
                        <span>System Health</span>
                    </li>
                    <li>
                        <PsychologyOutlinedIcon className="icon" />
                        <span>Logs</span>
                    </li> */}
          <li>
            <SettingsApplicationsIcon className="icon" />
            <span>Settings</span>
          </li>
          <p className="title">USER</p>
          <li onClick={logoutUser}>
            <ExitToAppIcon className="icon" />
            <span>Đăng xuất</span>
          </li>
        </ul>
      </div>
      <div className="bottomsidebarCandidate">
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

export default SidebarCandidate;
