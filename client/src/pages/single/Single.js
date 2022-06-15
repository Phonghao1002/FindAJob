import "./single.scss";
import NavbarAdmin from "../../components/adminManagement/navbarAdmin/NavbarAdmin";
import Sidebar from "../../components/adminManagement/sidebar/Sidebar";
import Chart from "../../components/adminManagement/chart/Chart";
import List from "../../components/adminManagement/table/Table";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Single = () => {
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    console.log(data);
  }, []);
  return (
    <div className="single">
      <div className="singleContainer">
        <div className="top">
          <div className="left">
            {/* <div className="editButton">Edit</div> */}
            <h1 className="title">Thông tin cá nhân</h1>
            <div className="item">
              <img src={infoUser?.avatar?.url} alt="" className="itemImg" />
              <div className="details">
                <h1 className="itemTitle">{infoUser.name}</h1>
                <div className="detailItem">
                  <span className="itemKey">Email:</span>
                  <span className="itemValue">{infoUser.email}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Ngày sinh:</span>
                  <span className="itemValue">{infoUser.birthday}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Số điện thoại:</span>
                  <span className="itemValue">{infoUser.phone}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Giới tính:</span>
                  <span className="itemValue">{infoUser.gender}</span>
                </div>
                <div className="detailItem">
                  <span className="itemKey">Địa chỉ:</span>
                  <span className="itemValue">{infoUser.address}</span>
                </div>
                {/* <div className="detailItem">
                  <span className="itemKey">Country:</span>
                  <span className="itemValue">USA</span>
                </div> */}
              </div>
            </div>
          </div>
          <div className="right">
            <Link to={`/candidate/editcandidate/${infoUser._id}`}>
              <button type="button">Cập nhật</button>
            </Link>

            <Chart
              aspect={3 / 1}
              title="Hoạt động tìm kiếm của bạn trong 6 tháng qua"
            />
          </div>
        </div>
        {/* <div className="bottom">
          <h1 className="title">Recruitment List latest job</h1>
          <List />
        </div> */}
      </div>
    </div>
  );
};

export default Single;
