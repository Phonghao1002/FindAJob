import React, { useState } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import NavbarRecruiter from "../navbarRecruiter/NavbarRecruiter";
import SidebarRecruiter from "../sidebarRecruiter/SidebarRecruiter";
import "./editrecruiterPersonalPage.scss";
import Navbargeneral from "../../navbargeneral/Navbargeneral";

const EditrecruiterPersonalPage = () => {
  const [file, SetFile] = useState("");
  const [logo, SetLogo] = useState("");
  const [infoUser, setInfoUser] = useState({});

  return (
    <div className="homeRecruiterPersonalPage">
      <SidebarRecruiter />
      <div className="homePersonalPageContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="PersonalPage">
          <div className="personalContainer">
            <div className="topPersonalPage">
              <h1>Hồ sơ Nhà Tuyển Dụng</h1>
            </div>
            <div className="bottomPersonalPage">
              <div className="left">
                <div className="lefttop">
                  <img
                    src={
                      file
                        ? URL.createObjectURL(file)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                </div>
                <div className="leftright">
                  <img
                    src={
                      logo
                        ? URL.createObjectURL(logo)
                        : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                    }
                    alt=""
                  />
                </div>
              </div>
              <div className="right">
                <form>
                  <div className="formInput">
                    <label htmlFor="file">
                      Avatar: <DriveFolderUploadOutlinedIcon />
                    </label>
                    <input
                      type="file"
                      id="file"
                      onChange={(e) => SetFile(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>

                  <div className="formInput">
                    <label>Name and surname</label>
                    <input type="" placeholder="Phong Hào" />
                  </div>
                  <div className="formInput">
                    <label>Ngay sinh</label>
                    <input type="" placeholder="10/02/2000" />
                  </div>
                  <div className="formInput">
                    <label>Phone</label>
                    <input type="" placeholder="+1 23456789" />
                  </div>
                  <div className="formInput">
                    <label>Address</label>
                    <input type="" placeholder="Quang Tri" />
                  </div>
                  <div className="formInput">
                    <label>Username</label>
                    <input type="" placeholder="PhongHao" />
                  </div>
                  <div className="formInput">
                    <label>Email</label>
                    <input type="" placeholder="phamphonghao1002@gmail.com" />
                  </div>
                  <div className="formInput">
                    <label>Gender</label>
                    {/* <input type="" placeholder="Nam" /> */}
                    <select>
                      <option>Name</option>
                      <option>Nu</option>
                    </select>
                  </div>
                  <div className="formInput">
                    <label htmlFor="logo">
                      Logo Công Ty: <DriveFolderUploadOutlinedIcon />
                    </label>
                    <input
                      type="file"
                      id="logo"
                      onChange={(e) => SetLogo(e.target.files[0])}
                      style={{ display: "none" }}
                    />
                  </div>
                  <div className="formInput">
                    <label>Tên Công Ty</label>
                    <input type="" placeholder="" />
                  </div>
                  <div className="formInput">
                    <label>Mô tả Công Ty</label>
                    <textarea type="" placeholder="..." />
                  </div>
                  <div className="formInput">
                    <label>Địa chỉ</label>
                    <input type="" placeholder="Đà Nẵng" />
                  </div>

                  <button>Cập nhật</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditrecruiterPersonalPage;
