import React, { useState, useEffect } from "react";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import Loading from "../../utils/loading/Loading";
import "./personalPage.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  phone: "",
  gender: "",
  birthday: "",
  address: "",
};

const PersonalPage = () => {
  const navigate = useNavigate();
  const [Users, setUsers] = useState(initialState);
  const [avatar, setAvatar] = useState(false);
  const [loading, setLoading] = useState(false);
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    setUsers(initialState);
    // console.log("infoUser", infoUser);
  }, []);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      // if (!isAdmin) return alert("You're not an admin");
      const file = e.target.files[0];

      if (!file) return alert("File not exist.");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Size too large!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("File format is incorrect.");

      let formData = new FormData();
      formData.append("file", file);

      // setLoading(true);
      const res = await axios.post("/api/uploadAvatar", formData, {
        headers: {
          "content-type": "multipart/form-data",
        },
      });
      // setLoading(false);
      setAvatar(res.data);
      // console.log(res);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      // if (!isAdmin) return alert("You're not an admin");
      // setLoading(true);
      await axios.post("/api/destroyAvatar", { public_id: avatar.public_id });
      // setLoading(false);
      setAvatar(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setUsers({ ...Users, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Users", avatar);
    try {
      if (!avatar) return alert("No Image Upload");

      await axios
        .patch(`http://localhost:4110/user/update/${infoUser._id}`, {
          ...Users,
          avatar: avatar.url,
        })
        .then((res) => {
          console.log(res.data.msg);
          navigate("/candidate");
        })
        .catch((err) => alert(err));
      // setCallback(!callback);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  // const styleUpload = {
  //   display: avatar ? "block" : "none",
  // };
  return (
    <div className="PersonalPage">
      <div className="personalContainer">
        <div className="topPersonalPage">
          <h1>Hồ sơ cá nhân</h1>
        </div>
        <div className="bottomPersonalPage">
          <div className="left">
            <div id="file_img">
              <img
                src={
                  avatar
                    ? avatar.url
                    : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                }
                alt=""
              />
              <span onClick={handleDestroy}>X</span>
            </div>
          </div>
          <div className="right">
            <form onSubmit={handleSubmit}>
              <div className="formInput">
                <label htmlFor="file">
                  File ảnh: <DriveFolderUploadOutlinedIcon />
                </label>
                <input
                  type="file"
                  name="file"
                  id="file"
                  onChange={handleUpload}
                  style={{ display: "none" }}
                />
              </div>

              <div className="formInput">
                <label>Họ và Tên</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder="Phong Hào"
                  onChange={handleChangeInput}
                  value={Users.name}
                />
              </div>
              <div className="formInput">
                <label>Ngày sinh</label>
                <input
                  type="text"
                  name="birthday"
                  id="birthday"
                  placeholder="10/02/2000"
                  onChange={handleChangeInput}
                  value={Users.birthday}
                />
              </div>
              <div className="formInput">
                <label>Số điện thoại</label>
                <input
                  type="text"
                  name="phone"
                  id="phone"
                  placeholder="+1 23456789"
                  value={Users.phone}
                  onChange={handleChangeInput}
                />
              </div>
              <div className="formInput">
                <label>Địa chỉ</label>
                <input
                  type="text"
                  name="address"
                  id="address"
                  placeholder="Quang Tri"
                  value={Users.address}
                  onChange={handleChangeInput}
                />
              </div>
              {/* <div className="formInput">
                <label>Username</label>
                <input
                  type=""
                  placeholder="PhongHao"
            value={recruitNews.title}

                  onChange={handleChangeInput}
                />
              </div> */}
              {/* <div className="formInput">
                <label>Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  placeholder="phamphonghao1002@gmail.com"
                  value={Users.email}
                  onChange={handleChangeInput}
                />
              </div> */}
              <div className="formInput">
                <label>Giới tính</label>
                <input
                  type="text"
                  name="gender"
                  id="gender"
                  placeholder="gender"
                  value={Users.gender}
                  onChange={handleChangeInput}
                />
              </div>
              {/* <div className="formInput">
                <label>Gender</label> */}
              {/* <input type="" placeholder="Nam" /> */}

              {/* <select
                  onChange={handleChangeInput}
                  value={Users.gender}
                  name="gender"
                >
                  <option>Nam</option>
                  <option>Nu</option>
                </select> */}
              {/* </div> */}
              {/* <div className="formInput">
                <label>Mô tả về bản thân</label>
                <textarea type="" placeholder="Mô tả bản thân" />
              </div> */}
              {/* <div className="formInput">
                <label>Địa chỉ</label>
                <textarea type="" placeholder="Đà Nẵng" />
              </div> */}

              <button>Cập nhật</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalPage;
