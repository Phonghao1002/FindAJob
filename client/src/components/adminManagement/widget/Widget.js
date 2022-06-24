import "./widget.scss";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
// import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import NewspaperIcon from "@mui/icons-material/Newspaper";
import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Widget = ({ type }) => {
  const [recruitmentPendings, setRecruitmentPending] = useState([]);
  const [recruitmentApproveds, setRecruitmentApproved] = useState([]);
  const [result, setResult] = useState(0);

  const [result1, setResult1] = useState(0);

  useEffect(() => {
    const getRecruitmentPending = async () => {
      const res = await axios.get("/api/recruitmentPending");
      setRecruitmentPending(res.data.recruitmentPending);
      console.log("aaa", recruitmentPendings);

      setResult(res.data.result);
      console.log("vvv", result);
    };

    getRecruitmentPending();
  }, []);

  useEffect(() => {
    const getRecruitmentApproved = async () => {
      const res = await axios.get("/api/recruitmentApproved");
      setRecruitmentApproved(res.data.recruitmentApproved);
      console.log("aaa", recruitmentApproveds);

      setResult1(res.data.result);
      console.log("vvv", result1);
    };

    getRecruitmentApproved();
  }, []);
  let data;

  //temporary
  const amount = 100;
  // const diff = 20;
  switch (type) {
    // case "Tài khoản chờ phê duyệt":
    //   data = {
    //     title: "Tài khoản chờ phê duyệt",
    //     isMoney: false,
    //     diff: 10,
    //     link: "Xem chi tiết",
    //     icon: (
    //       <PersonOutlinedIcon
    //         className="icon"
    //         style={{
    //           color: "crimson",
    //           backgroundColor: "rgba(255, 0, 0, 0.2)",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    // case "Tài khoản hoạt động":
    //   data = {
    //     title: "Tài khoản hoạt động",
    //     isMoney: false,
    //     diff: result,
    //     link: "Xem chi tiết",
    //     icon: (
    //       <PersonOutlinedIcon
    //         className="icon"
    //         style={{
    //           backgroundColor: "rgba(30 144 255)",
    //           color: "goldenrod",
    //         }}
    //       />
    //     ),
    //   };
    //   break;
    case "Hồ sơ chưa được duyệt":
      data = {
        title: "Hồ sơ chưa được duyệt",
        isMoney: true,
        diff: { result: result },
        link: "/admin/pendingProfileAdmin",
        icon: (
          <NewspaperIcon
            className="icon"
            style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}
          />
        ),
      };
      break;
    case "Hồ sơ đã được duyệt":
      data = {
        title: "Hồ sơ đã được duyệt",
        isMoney: true,
        diff: { result: result1 },
        link: "/admin/approvedProfileAdmin",
        icon: (
          <NewspaperIcon
            className="icon"
            style={{
              backgroundColor: "rgba(128, 0, 128, 0.2)",
              color: "purple",
            }}
          />
        ),
      };
      break;
    default:
      break;
  }
  return (
    <div className="widget">
      <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isMoney} {data.diff.result}
        </span>
        <Link to={data.link}>Xem chi tiết</Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {/* {data.diff}  */}
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
