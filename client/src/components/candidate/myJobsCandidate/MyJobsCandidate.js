import "./myJobsCandidate.scss";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import SidebarCandidate from "../sidebarCandidate/SidebarCandidate";
import NavbarCandidate from "../NavbarCandidate/NavbarCandidate";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { Link } from "react-router-dom";
import Navbargeneral from "../../navbargeneral/Navbargeneral";

const MyJobsCandidate = () => {
  const state = useContext(GlobalState);
  const [saveJob] = state.userAPI.saveJob;
  console.log(saveJob);

  const [recruitNews] = state.recruitmentNewsAPI.recruitNews;
  // console.log(recruitNews)
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // setUsers(initialState);
    // console.log("infoUser", infoUser);
  }, []);
  if (saveJob.length === 0)
    return (
      <h2 style={{ textAlign: "center", fontSize: "3rem" }}>
        Không có tin tuyển dụng nào được lưu!
      </h2>
    );
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
              {saveJob.map((recruitNew) => {
                <div className="searchItem" key={recruitNew._id}>
                  <img src={recruitNew.images.url} alt="" className="siImg" />
                  <div className="siDesc">
                    <h1 className="siTitle" title={recruitNew.title}>
                      {recruitNew.title}
                    </h1>
                    <span className="siDistance">500m from center</span>
                    <span className="siTaxiOp">{recruitNew.content}</span>
                    <span className="siSubtitle">{recruitNew.description}</span>
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
                      <span className="siPrice">${recruitNew.price}</span>
                      <span className="siTaxOp">Includes taxes and fees</span>
                      <Link
                        id="siCheckButton"
                        to={`/detailsRecruitNews/${recruitNew._id}`}
                        style={{ textDecoration: "none" }}
                      >
                        Xem chi tiết
                      </Link>
                    </div>
                  </div>
                </div>;
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyJobsCandidate;
