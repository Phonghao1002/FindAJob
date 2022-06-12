import "./searchItem.css";
import { Link } from "react-router-dom";
import { useContext } from "react";
// import { GlobalState } from "../../../GlobalState"
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

const SearchItem = ({ recruitNew, isAdmin, addSaveJobs }) => {
  // const state = useContext(GlobalState)
  // console.log(addSaveJobs)

  // function MouseOver() {
  //     alert('Lưu tin')
  // }
  // const [recruitNews] = state.recruitmentNewsAPI.recruitNews

  // console.log(recruitNews)

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
          <div className="siRating">
            <span>Lưu tin:</span>

            <button onClick={() => addSaveJobs(recruitNew)}>
              <FavoriteBorderIcon />
            </button>
          </div>
          <div className="siDetailTexts">
            <span className="siPrice">
              Còn {recruitNew.dayApply} ngày để ứng tuyển
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
