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
  const [address, setAddress] = useState("");
  const [birthday, setBirthday] = useState("");

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
      // console.log("asd", data);
      setInfoUser(data);
      setName(data.name);
      setPhoneNumber(data.phone);
      setEmail(data.email);
      setDescriptions(data.description);
      setAddress(data.address);
      setBirthday(data.birthday);
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
          alert("???ng tuy???n th??nh c??ng");
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
            <h1>???ng tuy???n vi???c l??m</h1>
          </div>
          <div className="bottomcruiterment">
            <div className="center">
              <form>
                <div className="formInput">
                  <label>File ????nh k??m :</label>
                  <input type="file" name="file" onChange={Handlechange} />
                </div>
                {/* {isSelected ? ( */}
                <div className="formInput">
                  <label>H??? v?? t??n: </label>
                  <input
                    placeholder="file name"
                    value={name}
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
                  <label>S??T: </label>
                  <input
                    placeholder="file name"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                  />
                </div>

                {/* ) : ( */}

                {/* )} */}
                <div className="formInput">
                  <label>M?? t??? v??? b???n th??n</label>
                  <textarea
                    type=""
                    value={descriptions}
                    placeholder="Vi???t gi???i thi???u ng???n g???n v??? b???n th??n (??i???m m???nh, ??i???m y???u) 
                                    v?? n??u r?? mong mu???n, l?? do l??m vi???c t???i c??ng ty n??y. 
                                    ????y l?? c??ch g??y ???n t?????ng v???i nh?? tuy???n d???ng n???u b???n 
                                    c?? ch??a c?? kinh nghi???m l??m vi???c (ho???c CV kh??ng t???t)."
                    onChange={(e) => setDescriptions(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>email: </label>
                  <input
                    placeholder="file name"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="formInput">
                  <label>?????a ch???: </label>
                  <input
                    placeholder="file name"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>

                <div className="formInput">
                  <label>Ng??y sinh: </label>
                  <input
                    placeholder="file name"
                    value={birthday}
                    onChange={(e) => setBirthday(e.target.value)}
                  />
                </div>

                <div className="formInput">
                  <button type="button" onClick={handleSubCV}>
                    N???p CV
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
