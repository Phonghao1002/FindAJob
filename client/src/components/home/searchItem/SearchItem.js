import "./searchItem.css";
import { Link, useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";
// import { GlobalState } from "../../../GlobalState"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import { GlobalState } from "../../../GlobalState";
import axios from "axios";

const SearchItem = ({ recruitNew, isAdmin, addSaveJobs, infoUser }) => {
  const state = useContext(GlobalState);
  const params = useParams();
  // console.log(addSaveJobs);

  // function MouseOver() {
  //     alert('Lưu tin')
  // }
  // const [recruitNews] = state.recruitmentNewsAPI.recruitNews

  // console.log(recruitNews)
  // const [infoUser, setInfoUser] = useState({});

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("infoUser"));
  //   if (data) {
  //     setInfoUser(data);
  //   }
  //   // console.log("infoUser", infoUser);
  // }, []);
  useEffect(() => {
    // console.log("re-render")
    if (params) {
      console.log("aaa", params);
    }
  }, [params]);
  const saveJobs = async (id) => {
    let formData = new FormData();
    formData.append("idRecruitNews", params.id);
    formData.append("idUsers", infoUser._id);

    console.log("FormData", FormData);
    try {
      const res = await axios.post(
        `http://localhost:4110/api/saveJobsrecruitNews/create/${id}`,
        formData
        // { idUsers: infoUser._id }
      );
      alert(res.data.msg);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const formatPrice = (value) => {
    let valueString = new Intl.NumberFormat("en-US").format(value);
    return valueString;
  };

  return (
    <div>
      <div className="searchItem">
        <img src={recruitNew.images.url} alt="" className="siImg" />
        <div className="siDesc">
          <h1 className="siTitle" title={recruitNew.title}>
            {recruitNew.title}
          </h1>
          <span className="siDistance">{recruitNew.content}</span>
          <span className="siTaxiOp">{recruitNew.category}</span>
          <span className="siSubtitle">{recruitNew.rank}</span>
          {/* <span className="siFeatures">
                                Entire studio • 1 bathroom • 21m² 1 full bed
                            </span> */}
          <span className="siCancelOp">
            $ Lương: {formatPrice(recruitNew.price)} VNĐ
          </span>
          <div className="siCancelOpSubtitle">
            <LocationOnIcon className="icon" />
            <span>{recruitNew.address}</span>
          </div>
        </div>
        <div className="siDetails">
          <div className="siRating">{/* <span>Lưu tin:</span> */}</div>
          <div className="siDetailTexts">
            <div className="siRating">
              {/* <span>Lưu tin:</span> */}

              <button onClick={() => saveJobs(recruitNew._id)}>
                <FavoriteBorderIcon />
              </button>
            </div>
            <span className="siPrice">
              Thời hạn: {recruitNew.dayApply} ngày
            </span>
            {/* <span className="siTaxOp">{recruitNew.rank}</span> */}
            <Link
              id="siCheckButton"
              to={`/detailsRecruitNews/${recruitNew._id}`}
              style={{ textDecoration: "none" }}
            >
              Xem chi tiết
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
