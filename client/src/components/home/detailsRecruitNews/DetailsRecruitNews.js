import "./detailsRecruitNews.scss";
import Navbar from "../navbar/Navbar";
import Header from "../header/Header";
// import { faCircleArrowLeft, faCircleArrowRight, faCircleXmark, faLocationDot } from '@fortawesome/free-solid-svg-icons'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CancelIcon from "@mui/icons-material/Cancel";
import NavigateBeforeIcon from "@mui/icons-material/NavigateBefore";
import NavigateNextIcon from "@mui/icons-material/NavigateNext";
import MailList from "../mailList/MaiList";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import DateRangeIcon from "@mui/icons-material/DateRange";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import AttachMoneyIcon from "@mui/icons-material/AttachMoney";
import Footer from "../footer/Footer";
import { useContext, useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Button } from "@mui/material";
import { GlobalState } from "../../../GlobalState";

const DetailsRecruitNews = () => {
  const params = useParams();
  // console.log(params)
  const state = useContext(GlobalState);

  // console.log(state)
  const [recruitNews] = state.recruitmentNewsAPI.recruitNews;
  const [detailRecruitNew, setDetailRecruitNew] = useState([]);

  const [slideNumber, setSlideNumber] = useState(0);

  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://teky.edu.vn/blog/wp-content/uploads/2021/08/Moi-truong-cong-ty-nang-dong-phat-trien.jpg",
    },
    {
      src: "https://vcdn-vnexpress.vnecdn.net/2021/12/02/image002-9110-1638414003.jpg",
    },
    {
      src: "https://mona.media/wp-content/uploads/2020/03/dich-vu-outsource-it-phan-mem.jpg",
    },
    {
      src: "https://vcdn-kinhdoanh.vnecdn.net/2020/03/16/fpt-danang-new-01-1718-1584330284.jpg",
    },
    {
      src: "https://cdnmedia.baotintuc.vn/2017/10/27/17/09/doanhnghiep.jpg",
    },
    {
      src: "https://talenta.vn/wp-content/uploads/2018/11/itnews1_UXIE.jpg",
    },
  ];

  useEffect(() => {
    // console.log("re-render")
    if (params) {
      recruitNews.forEach((recruitNew) => {
        if (recruitNew._id === params.id) setDetailRecruitNew(recruitNew);
      });
    }
  }, [params, recruitNews]);
  console.log(detailRecruitNew);
  // console.log(recruitNews)

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newslideNumber;
    if (direction === "l") {
      newslideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newslideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newslideNumber);
  };

  const onRecruitmentClick = () => {};

  const formatPrice = (value) => {
    let valueString = new Intl.NumberFormat("en-US").format(value);
    return valueString;
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="detailCruiterContainer">
        {open && (
          <div className="slider">
            <CancelIcon className="close" onClick={() => setOpen(false)} />
            <NavigateBeforeIcon
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <NavigateNextIcon
              className="arrow"
              onClick={() => handleMove("r")}
              F
            />
          </div>
        )}
        <div className="detailCruiterWrapper">
          <Link to="/recruitment">
            <button className="bookNow">???ng tuy???n ngay !</button>
          </Link>
          <h1 className="hotelTitle1">{detailRecruitNew.title}</h1>
          <h1 className="hotelTitle2">{detailRecruitNew.content}</h1>
          <div className="hotelAddress">
            <LocationOnIcon className="icon" />
            <span>?????a ??i???m: </span>
            <span>{detailRecruitNew.address}</span>
          </div>
          {/* <div className="cellWithImg">
                        <img className="cellImg" src={detailRecruitNew.images} alt="images" />  */}
          {/* {user.name} */}
          {/* </div> */}

          <div className="hotelDistance">
            <DateRangeIcon className="icon" />
            <span>Ng??y c???p nh???t: </span>
            <span>11/05/2022</span>
          </div>
          <div className="hotelPriceHighlight">
            <WorkOutlineIcon className="icon" />
            <span>H??nh th???c: </span>
            <span>{detailRecruitNew.rank}</span>
          </div>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                  onClick={() => handleOpen(i)}
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">M?? t??? c??ng vi???c</h1>
              <p className="hotelDesc">{detailRecruitNew.description}</p>

              <h1 className="hotelTitle">Y??u c???u c??ng vi???c</h1>
              <span className="hotelDesc">{detailRecruitNew.requirements}</span>
            </div>
            <div className="hotelDetailsPrice">
              <h1>???ng tuy???n ngay!</h1>
              <div className="hotelExpire">
                <DateRangeIcon className="icon" />
                <span>B???n c??n: </span>
                <span>
                  {detailRecruitNew.dayApply} ng??y ????? n???p h??? s?? ???ng tuy???n
                </span>
              </div>
              <div className="hotelPrice">
                {/* <AttachMoneyIcon className="icon" /> */}
                {/* <span>L????ng: </span> */}
                <span>$ L????ng: {formatPrice(detailRecruitNew.price)} VN??</span>
              </div>
              <h1>TH??NG TIN KH??C</h1>
              <ul>
                <li>B???ng c???p: ?????i h???c</li>
                <li>????? tu???i: Kh??ng gi???i h???n tu???i</li>
              </ul>
              <Link to={`/recruitment/${detailRecruitNew._id}`}>
                <button className="btndetailsRecruit">???ng tuy???n ngay</button>
              </Link>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default DetailsRecruitNews;
