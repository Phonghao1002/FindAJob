import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import saveAs from "file-saver";
import axios from "axios";
import "./createFileCV.scss";

const isnitstate = {
  fullname: "",
  phone: "",
  description: "",
  email: "",
};

const CreateFileCV = () => {
  const [states, setState] = useState(isnitstate);
  //   const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [fullname, setFullname] = useState("");
  const [phone, setPhone] = useState("");
  // const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");
  const [gender, setGender] = useState("");
  const [school, setSchool] = useState("");
  const [degree, setDegree] = useState("");
  const [rank, setRank] = useState("");
  const [salary, setSalary] = useState("");
  const [foreignLanguage, setForeignLanguage] = useState("");
  const [infoUser, setInfoUser] = useState({});

  //   const handleSubmission = (e) => {
  //     setInput(e.target.value);
  //   };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      console.log("asd", data);
      setInfoUser(data);
      setFullname(data.name);
      setPhone(data.phone);
      // setDescriptions(data.description);
      setEmail(data.email);
      setAddress(data.address);
      setBirthday(data.birthday);
      setGender(data.gender);
    }
    // console.log("data", infoUser);
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState({ ...states, [name]: value });
  };

  const createAndDownloadPdf = async () => {
    let formData = new FormData();
    formData.append("fullname", fullname);
    formData.append("phone", phone);
    formData.append("description", descriptions);
    formData.append("email", email);
    formData.append("address", address);
    formData.append("birthday", birthday);
    formData.append("gender", gender);
    formData.append("school", school);
    formData.append("degree", degree);
    formData.append("rank", rank);
    formData.append("salary", salary);
    formData.append("foreignLanguage", foreignLanguage);
    // console.log("running");
    console.log("FormData", FormData);

    try {
      await axios
        .post("/create-pdf", formData, {
          headers: {
            "content-type": "application/pdf",
          },
        })
        // .then(() =>
        //   axios.get("/user/fetch-pdf", {
        //     responseType: "blob",
        //   })
        // )
        // .then((res) => {
        //   const pdfBlog = new Blob([res.data], {
        //     headers: {
        //       "content-type": "application/pdf",
        //     },
        //   });
        //   // saveAs(pdfBlog, "resume.pdf");
        // })
        .then((response) => {
          const url = window.URL.createObjectURL(new Blob([response.data]));
          const link = document.createElement("a");
          link.href = url;
          link.setAttribute("download", "rezultati.pdf"); //or any other extension
          document.body.appendChild(link);
          link.click();
        });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="FileCVhome">
        <div className="FileCVContainer">
          <div className="topFileCV">
            <h1>Tạo hồ sơ CV</h1>
          </div>
          <div className="bottomcFileCV">
            <div className="centerFileCV">
              <form>
                <span className="span00">Thông tin cá nhân</span>
                {/* <div className="formInput">
                  <label>File đính kèm :</label>
                  <input type="file" name="file" onChange={Handlechange} />
                </div> */}
                {/* {isSelected ? ( */}
                <div className="formInput">
                  <label>Họ và tên: </label>
                  <input
                    type="text"
                    placeholder="Họ và Tên"
                    name="fullname"
                    value={fullname}
                    onChange={(e) => setFullname(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>SĐT: </label>
                  <input
                    type="text"
                    placeholder="0123456789"
                    name="phone"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Mô tả về bản thân</label>
                  <input
                    type="text"
                    placeholder="Mô tả về bản thân"
                    value={descriptions}
                    name="description"
                    onChange={(e) => setDescriptions(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>email: </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Địa chỉ: </label>
                  <input
                    type="text"
                    placeholder="Địa chỉ"
                    name="address"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Ngày sinh: </label>
                  <input
                    type="text"
                    placeholder="Ngày sinh"
                    name="birthday"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Giới tính: </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="gender"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  />
                </div>
                <span className="span1">Thêm học vấn</span>
                <div className="formInput">
                  <label>Trường : </label>
                  <input
                    type="text"
                    placeholder="Trường"
                    name="school"
                    value={school}
                    onChange={(e) => setSchool(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Bằng cấp: </label>
                  <input
                    type="text"
                    placeholder="Bằng cấp"
                    name="degree"
                    value={degree}
                    onChange={(e) => setDegree(e.target.value)}
                  />
                </div>
                <span className="span3">Công việc mong muốn</span>
                <div className="formInput">
                  <label>Cấp bậc mong muốn : </label>
                  <input
                    type="text"
                    placeholder="Cấp bậc mong muốn"
                    name="rank"
                    value={rank}
                    onChange={(e) => setRank(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>Mức lương mong muốn (USD/ tháng): </label>
                  <input
                    type="text"
                    placeholder="Mức lương mong muốn"
                    name="salary"
                    value={salary}
                    onChange={(e) => setSalary(e.target.value)}
                  />
                </div>
                <span className="spanCV">Ngoại ngữ</span>
                <div className="formInput">
                  <label>Thêm ngoại ngữ : </label>
                  <input
                    type="text"
                    placeholder="Ngoại ngữ"
                    name="foreignLanguage"
                    value={foreignLanguage}
                    onChange={(e) => setForeignLanguage(e.target.value)}
                  />
                </div>

                <div className="formInput">
                  <button onClick={() => createAndDownloadPdf()}>
                    Download PDF
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateFileCV;
