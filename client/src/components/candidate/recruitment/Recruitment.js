import { useState, useEffect } from "react";
import Navbar from "../../home/navbar/Navbar";
import Header from "../../home/header/Header";
import "./recruitment.scss";
import { Link, useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { DataGrid } from "@mui/x-data-grid";

const Recruitment = () => {
  const navigation = useNavigate();
  const params = useParams();
  const [selectedFile, setSelectedFile] = useState("");
  const [isFilePicked, setIsFilePicked] = useState(false);
  const [input, setInput] = useState("");
  const [name, setName] = useState("");
  const [descriptions, setDescriptions] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");

  const [infoUser, setInfoUser] = useState({});

  const Handlechange = (event) => {
    setSelectedFile(event.target.files[0]);
    // setIsSelected(true);
  };

  const handleSubmission = (e) => {
    setInput(e.target.value);
  };

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // console.log("data", infoUser);
  }, []);
  useEffect(() => {
    // console.log("re-render")
    if (params) {
      console.log("aaa", params);
    }
  }, [params]);
  // console.log("idJob", params.id);

  const handleSubCV = async () => {
    let formData = new FormData();
    formData.append("fileCV", selectedFile);
    formData.append("idJob", params.id);
    formData.append("idUser", infoUser._id);
    formData.append("name", name);
    formData.append("email", email);
    formData.append("phoneNumber", phoneNumber);
    formData.append("descriptions", descriptions);

    console.log("FormData", FormData);
    try {
      // await axios.post("http://localhost:4110/api/uploadCV", formData);
      await axios
        .post("http://localhost:4110/api/uploadCV", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        })
        .then((response) => {
          alert("Ứng tuyển thành công");
          navigation("/candidate/applicationHistory");
        });
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="Recruitment">
        <div className="cruitermentContainer">
          <div className="topcruiterment">
            <h1>Ứng tuyển việc làm</h1>
          </div>
          <div className="bottomcruiterment">
            <div className="center">
              <form>
                <div className="formInput">
                  <label>File đính kèm :</label>
                  <input type="file" name="file" onChange={Handlechange} />
                </div>
                {/* {isSelected ? ( */}
                <div className="formInput">
                  <label>Họ và tên: </label>
                  <input
                    placeholder="file name"
                    onChange={(e) => setName(e.target.value)}
                  />

                  {/* <p onChange={handleSubmission} value={input}>  Filename: name </p>
                                    <p>Filetype: type </p>
                                    <p>Size in bytes: size</p> */}
                  {/* <p>
                                lastModifiedDate:{' '}
                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    
                            </p> */}
                </div>
                <div className="formInput">
                  <label>SĐT: </label>
                  <input
                    placeholder="file name"
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                {/* ) : ( */}

                {/* )} */}
                <div className="formInput">
                  <label>Mô tả về bản thân</label>
                  <textarea
                    type=""
                    placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) 
                                    và nêu rõ mong muốn, lý do làm việc tại công ty này. 
                                    Đây là cách gây ấn tượng với nhà tuyển dụng nếu bạn 
                                    có chưa có kinh nghiệm làm việc (hoặc CV không tốt)."
                    onChange={(e) => setDescriptions(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>email: </label>
                  <input
                    placeholder="file name"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>

                <div className="formInput">
                  <button type="button" onClick={handleSubCV}>
                    Nộp CV
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

export default Recruitment;
