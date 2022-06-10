import "./header.scss";
import AirlineSeatIndividualSuiteIcon from "@mui/icons-material/AirlineSeatIndividualSuite";
import DirectionsCarIcon from "@mui/icons-material/DirectionsCar";
import PersonIcon from "@mui/icons-material/Person";
import ConnectingAirportsIcon from "@mui/icons-material/ConnectingAirports";
import LocalTaxiIcon from "@mui/icons-material/LocalTaxi";
import WorkIcon from "@mui/icons-material/Work";
import PaidIcon from "@mui/icons-material/Paid";
import BusinessIcon from "@mui/icons-material/Business";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import FileOpenIcon from "@mui/icons-material/FileOpen";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { GlobalState } from "../../../GlobalState";
// import DateRangeIcon from '@mui/icons-material/DateRange';

const Header = ({ type }) => {
  const state = useContext(GlobalState);
  const [recruitNews, setRecruitNews] = state.recruitmentNewsAPI.recruitNews;
  const [categories] = state.categoriesAPI.categories;

  const [category, setCategory] = state.recruitmentNewsAPI.category;
  const [sort, setSort] = state.recruitmentNewsAPI.sort;
  const [search, setSearch] = state.recruitmentNewsAPI.search;

  const handleCategory = (e) => {
    setCategory(e.target.value);
    setSearch("");
  };

  return (
    <div className="header">
      <div
        className={
          type === "list" ? "headerContainer listMode" : "headerContainer"
        }
      >
        <div className="headerList">
          <Link to="/" style={{ textDecoration: "none" }}>
            <div className="headerListItem active">
              <WorkIcon />
              <span>Việc làm</span>
            </div>
          </Link>

          <div className="headerListItem">
            <PeopleAltIcon />
            <span>Phỏng vấn</span>
          </div>
          <div className="headerListItem">
            <PaidIcon />
            <span>Lương</span>
          </div>
          <div className="headerListItem">
            <BusinessIcon />
            <span>Các công ty</span>
          </div>
          <div className="headerListItem">
            <FileOpenIcon />
            <span>CV tuyệt vời</span>
          </div>
        </div>
        {type !== "list" && (
          <>
            <h1 className="headerTitle">
              Việc làm CNTT - Phần mềm tại Đà Nẵng
            </h1>
            <p className="headerDesc">
              Việc làm IT - Việc làm IT xịn dành cho Developer chất
            </p>
            <Link to="/register" style={{ textDecoration: "none" }}>
              {/* <button className="headerBtn">Đăng nhập / Đăng ký</button> */}
            </Link>
            <div className="headerSearch">
              <div className="headerSearchItem">
                <span className="headerSearchText">Danh mục: </span>
                <select
                  className="lsOptioncbbox"
                  name="category"
                  value={category}
                  onChange={handleCategory}
                >
                  <option value="">Tất cả các loại ngôn ngữ</option>
                  {categories.map((category) => (
                    <option
                      value={"category=" + category._id}
                      key={category._id}
                    >
                      {category.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="headerSearchItem">
                <div className="headerSearchInput">
                  <input
                    type="text"
                    value={search}
                    className="headerSearchInput"
                    placeholder="Nhập vị trí, Tên công ty, địa chỉ..."
                    onChange={(e) => setSearch(e.target.value.toLowerCase())}
                  />
                  <button className="headerBtn">Tìm kiếm</button>
                </div>
              </div>

              <div className="headerSearchItem">
                <span>Bộ lọc: </span>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value)}
                  className="lsOptioncbbox"
                >
                  <option value="">Tin mới nhất</option>
                  <option value="sort=oldest">Tin cũ nhất</option>
                  {/* <option value='sort=-sold'>lượt tương tác nhiều nhất</option> */}
                  <option value="sort=-price">Lương: Cao - Thấp</option>
                  <option value="sort=price">Lương: Thấp - Cao</option>
                </select>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Header;
