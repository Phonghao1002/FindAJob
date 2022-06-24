import "./myJobsCandidate.scss";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import SidebarCandidate from "../sidebarCandidate/SidebarCandidate";
import NavbarCandidate from "../NavbarCandidate/NavbarCandidate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import Navbargeneral from "../../navbargeneral/Navbargeneral";
import axios from "axios";

const MyJobsCandidate = () => {
  const state = useContext(GlobalState);
  const [saveJob] = state.userAPI.saveJob;
  const [cart, setCart] = state.userAPI.cart;
  // console.log("saveJob", saveJob);

  const [recruitNews] = state.recruitmentNewsAPI.recruitNews;
  const [saveJobs, setSaveJobs] = useState([]);
  console.log("saveJobs", saveJobs);
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // setUsers(initialState);
    // console.log("infoUser", infoUser);
  }, []);

  const getSaveJobs = async () => {
    const res = await axios.get(
      `http://localhost:4110/api/getsaveJobsrecruitNews/${infoUser._id}`
    );
    setSaveJobs(res.data.data);
  };

  useEffect(() => {
    // const data = JSON.parse(localStorage.getItem("infoUser"));
    if (infoUser) {
      getSaveJobs();
    }
    // console.log("data", infoUser);
  }, [infoUser]);

  // if (saveJob.length === 0)
  //   return (
  //     <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
  //       Không có tin tuyển dụng nào được lưu!
  //     </h2>
  //   );
  return (
    <div className="homeMyJobs">
      <SidebarCandidate />
      <div className="homeMyJobsContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="PersonalPage">
          <div className="personalContainer">
            <div className="topPersonalPage">
              <h1>Công việc của tôi</h1>
            </div>
            <div className="bottomPersonalPage">
              {saveJobs.map((item) => {
                <>
                  <h1>{item?.dataRecruitNews.address}</h1>
                  <span className="siSubtitle">
                    {item?.dataRecruitNews.description}
                  </span>
                </>;
              })}
              {saveJobs.map((item) => (
                <>
                  <div className="searchItem" key={item?.dataRecruitNews?._id}>
                    <img
                      src={item?.dataRecruitNews?.images?.url}
                      alt=""
                      className="siImg"
                    />
                    <div className="siDesc">
                      <h1
                        className="siTitle"
                        title={item?.dataRecruitNews.title}
                      >
                        {item?.dataRecruitNews.title}
                      </h1>
                      <span className="siDistance">500m from center</span>
                      <span className="siTaxiOp">
                        {item?.dataRecruitNews?.content}
                      </span>
                      <span className="siSubtitle">
                        {item?.dataRecruitNews?.description}
                      </span>
                      {/* <span className="siFeatures">
                                Entire studio • 1 bathroom • 21m² 1 full bed
                            </span> */}
                      <span className="siCancelOp">Free cancellation </span>
                      <span className="siCancelOpSubtitle">
                        You can cancel later, so lock in this great price today!
                      </span>
                    </div>
                    <div className="siDetails">
                      <div className="siRating">
                        {/* <span>Excellent</span> */}

                        <button>
                          <FavoriteBorderIcon />
                        </button>
                        <span>Đã lưu</span>
                      </div>
                      <div className="siDetailTexts">
                        <span className="siPrice">
                          ${item?.dataRecruitNews?.price}
                        </span>
                        <span className="siTaxOp">Includes taxes and fees</span>
                        <Link
                          id="siCheckButton"
                          to={`/detailsRecruitNews/${item?.dataRecruitNews?._id}`}
                          style={{ textDecoration: "none" }}
                        >
                          Xem chi tiết
                        </Link>
                      </div>
                    </div>
                  </div>
                  ;
                </>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobsCandidate;
