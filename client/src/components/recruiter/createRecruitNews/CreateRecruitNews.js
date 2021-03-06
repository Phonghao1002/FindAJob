import "./createRecruitNews.scss";
import React, { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../../GlobalState";
import Loading from "../../utils/loading/Loading";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const initialState = {
  title: "",
  price: 0,
  description: "",
  requirements: "",
  content: "",
  category: "",
  address: "",
  dayApply: "",
  rank: "",
  _id: "",
};

const CreateRecruitNews = () => {
  const state = useContext(GlobalState);
  const [recruitNews, setRecruitNews] = useState(initialState);
  const [categories] = state.categoriesAPI.categories;
  const [images, setImages] = useState(false);
  const [loading, setLoading] = useState(false);
  // console.log("assasasa", state.userAPI.isAdmin);
  const [token] = state.token;
  const [isAdmin] = state.userAPI.isAdmin;
  const [callback, setCallback] = state.recruitmentNewsAPI.callback;
  const [recruitNewss] = state.recruitmentNewsAPI.recruitNews;
  const [onEdit, setOnEdit] = useState(false);

  const navigate = useNavigate();
  const param = useParams();

  useEffect(() => {
    if (param.id) {
      setOnEdit(true);
      recruitNewss.forEach((recruitNews) => {
        if (recruitNews._id === param.id) {
          setRecruitNews(recruitNews);
          setImages(recruitNews.images);
        }
      });
    } else {
      setOnEdit(false);
      setRecruitNews(initialState);
      setImages(false);
    }
  }, [param.id, recruitNewss]);

  const handleUpload = async (e) => {
    e.preventDefault();
    try {
      // if (!isAdmin) return alert("You're not an admin");
      const file = e.target.files[0];

      if (!file) return alert("Tệp không tồn tại!");

      if (file.size > 1024 * 1024)
        // 1mb
        return alert("Kích thước quá lớn!");

      if (file.type !== "image/jpeg" && file.type !== "image/png")
        // 1mb
        return alert("Định dạng tệp không chính xác!");

      let formData = new FormData();
      formData.append("file", file);

      setLoading(true);
      const res = await axios.post("/api/upload", formData, {
        headers: {
          "content-type": "multipart/form-data",
          Authorization: token,
        },
      });
      setLoading(false);
      setImages(res.data);
      // console.log(res.data);
      // alert("Đã thêm mới tin tuyển dụng!");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const handleDestroy = async () => {
    try {
      // if (!isAdmin) return alert("You're not an admin");
      setLoading(true);
      await axios.post(
        "/api/destroy",
        { public_id: images.public_id },
        {
          headers: { Authorization: token },
        }
      );
      setLoading(false);
      setImages(false);
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  const handleChangeInput = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setRecruitNews({ ...recruitNews, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // if (!isAdmin) return alert("You're not an admin");
      if (!images) return alert("No Image Upload");

      if (onEdit) {
        await axios.put(
          `/api/recruitNews/${recruitNews._id}`,
          { ...recruitNews, images },
          {
            headers: { Authorization: token },
          }
        );
      } else {
        await axios.post(
          "/api/recruitNews",
          { ...recruitNews, images },
          {
            headers: { Authorization: token },
          }
        );
      }
      setCallback(!callback);
      navigate("/recruiter/managementRecruitMent");
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  const styleUpload = {
    display: images ? "block" : "none",
  };

  return (
    <div className="create_recruitNews">
      <div className="upload">
        <input type="file" name="file" id="file_up" onChange={handleUpload} />
        {loading ? (
          <div id="file_img">
            <Loading />
          </div>
        ) : (
          <div id="file_img" style={styleUpload}>
            <img src={images ? images.url : ""} alt="" />
            <span onClick={handleDestroy}>X</span>
          </div>
        )}
      </div>
      <form onSubmit={handleSubmit}>
        {/* <div className="row">
          <label htmlFor="recruitNews_id">Mã tin tuyển dụng</label>
          <input
            type="text"
            name="recruitNews_id"
            id="recruitNews_id"
            required
            value={recruitNews.recruitNews_id}
            onChange={handleChangeInput}
            disabled={onEdit}
          />
        </div> */}

        <div className="row">
          <label htmlFor="title">Tiêu đề</label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={recruitNews.title}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="price">Mức lương</label>
          <input
            type="number"
            name="price"
            id="price"
            required
            value={recruitNews.price}
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="description">Mô tả công việc</label>
          <textarea
            type="text"
            name="description"
            id="description"
            required
            value={recruitNews.description}
            rows="5"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="description">Yêu cầu công việc</label>
          <textarea
            type="text"
            name="requirements"
            id="requirements"
            required
            value={recruitNews.requirements}
            rows="5"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">Tên Công ty</label>
          <input
            type="text"
            name="content"
            id="content"
            required
            value={recruitNews.content}
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="content">Địa chỉ</label>
          <input
            type="text"
            name="address"
            id="address"
            required
            value={recruitNews.address}
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="rank">Vị trí cần tuyển</label>
          <input
            type="text"
            name="rank"
            id="rank"
            required
            value={recruitNews.rank}
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="rank">Số ngày để Apply hồ sơ</label>
          <input
            type="text"
            name="dayApply"
            id="dayApply"
            required
            value={recruitNews.dayApply}
            rows="7"
            onChange={handleChangeInput}
          />
        </div>

        <div className="row">
          <label htmlFor="categories">Danh mục: </label>
          <select
            name="category"
            value={recruitNews.category}
            onChange={handleChangeInput}
          >
            <option value="">Hãy chọn một danh mục</option>
            {categories.map((category) => (
              <option value={category.name} key={category._id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>

        <button type="submit">{onEdit ? "Chỉnh sửa" : "Tạo mới"}</button>
      </form>
    </div>
  );
};

export default CreateRecruitNews;
