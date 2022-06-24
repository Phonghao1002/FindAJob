import "./sidebarRecruiter.scss";
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import CategoryIcon from "@mui/icons-material/Category";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import BrowseGalleryIcon from "@mui/icons-material/BrowseGallery";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { DarkModeContext } from "../../../context/darkModeContext";
import axios from "axios";

const SidebarRecruiter = () => {
  const { dispatch } = useContext(DarkModeContext);

  const logoutUser = async () => {
    await axios.get("http://localhost:4110/user/logout");

    localStorage.setItem("infoUser", null);
    window.location.href = "/";
  };
  return (
    <div className="sidebarRecruiter">
      <div className="top">
        <Link to="/recruiter" style={{ textDecoration: "none" }}>
          <span className="logo">TRANG QUẢN LÝ</span>
        </Link>
      </div>
      <hr />
      <div className="center">
        <ul>
          <p className="title">CHÍNH</p>
          <Link to="/recruiter" style={{ textDecoration: "none" }}>
            <li>
              <DashboardIcon className="icon" />
              <span>Báo cáo thống kê</span>
            </li>
          </Link>
          <p className="title">CÁ NHÂN</p>
          <Link to="/recruiter/personalPage" style={{ textDecoration: "none" }}>
            <li>
              <AccountCircleOutlinedIcon className="icon" />
              <span>Quản Lý hồ sơ cá nhân</span>
            </li>
          </Link>
          {/* <Link to="/users" style={{ textDecoration: "none" }}>
            <li>
              <PersonOutlineIcon className="icon" />
              <span>Candidate Management</span>
            </li>
          </Link> */}
          {/* <Link to="/products" style={{ textDecoration: "none" }}>
                        <li>
                            <StoreIcon className="icon" />
                            <span>Candidate Management</span>
                        </li>
                    </Link> */}

          {/* <Link
            to="/candidate/changePassword"
            style={{ textDecoration: "none" }}
          >
            <li>
              <TrendingUpIcon className="icon" />
              <span>Đổi mật khẩu</span>
            </li>
          </Link> */}
          <p className="title">DANH SÁCH QUẢN LÝ</p>
          <Link to="/recruiter/category" style={{ textDecoration: "none" }}>
            <li>
              <CategoryIcon className="icon" />
              <span>Danh mục</span>
            </li>
          </Link>

          {/* <Link
            to="/recruiter/managementRecruitMentId/${}"
            style={{ textDecoration: "none" }}
          >
            <li>
              <NewspaperIcon className="icon" />
              <span>Quản lý bài ứng tuyển</span>
            </li>
          </Link> */}
          <Link
            to="/recruiter/managementRecruitMent"
            style={{ textDecoration: "none" }}
          >
            <li>
              <NewspaperIcon className="icon" />
              <span>Quản lý tin tuyển dụng</span>
            </li>
          </Link>

          {/* <Link
            to="/recruiter/browseCandidate"
            style={{ textDecoration: "none" }}
          >
            <li>
              <BrowseGalleryIcon className="icon" />
              <span>Browse candidate profile</span>
            </li>
          </Link> */}

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

export default SidebarRecruiter;
