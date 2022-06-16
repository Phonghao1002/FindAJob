import React, { useEffect, useState } from "react";
import Header from "../header/Header";
import Navbar from "../navbar/Navbar";
import saveAs from "file-saver";
import axios from "axios";

const isnitstate = {
  fullname: "",
  phone: "",
  description: "",
  email: "",
};

const CreateFileCV = () => {
  const [states, setState] = useState(isnitstate);
  //   const [name, setName] = useState("");
  // const [descriptions, setDescriptions] = useState("");
  // const [fullname, setFullname] = useState("");
  // const [phone, setPhone] = useState("");
  // // const [description, setDescription] = useState("");
  // const [email, setEmail] = useState("");
  // const [infoUser, setInfoUser] = useState({});

  //   const handleSubmission = (e) => {
  //     setInput(e.target.value);
  //   };

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("infoUser"));
  //   if (data) {
  //     console.log("asd", data);
  //     setInfoUser(data);
  //     setFullname(data.fullname);
  //     setPhone(data.phone);
  //     setDescriptions(data.description);
  //     setEmail(data.email);
  //   }
  //   // console.log("data", infoUser);
  // }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setState({ ...states, [name]: value });
  };

  const createAndDownloadPdf = async (requestParams) => {
    // let formData = new FormData();
    // formData.append("fullname", fullname);
    // formData.append("phone", phone);
    // formData.append("description", descriptions);
    // formData.append("description", email);
    // // console.log("running");
    // console.log("FormData", FormData);

    try {
      await axios
        .post(
          "/user/create-resume",
          { ...states },
          {
            requestParams: requestParams,
          },
          {
            responseType: "arraybuffer", // important...because we need to convert it to a blob. If we don't specify this, response.data will be the raw data. It cannot be converted to blob directly.
            headers: {
              "Content-Type": "application/json",
              Accept: "application/pdf",
            },
          }
        )
        .then(() =>
          axios.get("/user/fetch-pdf", {
            responseType: "blob",
          })
        );
      // .then((res) => {
      //   const pdfBlog = new Blob([res.data], {
      //     headers: {
      //       "content-type": "application/pdf",
      //     },
      //   });
      //   saveAs(pdfBlog, "resume.pdf");
      // });
      // .then((response) => {
      //   const url = window.URL.createObjectURL(new Blob([response.data]));
      //   const link = document.createElement("a");
      //   link.href = url;
      //   link.setAttribute("download", "resume.pdf"); //or any other extension
      //   document.body.appendChild(link);
      //   link.click();
      // });
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
            <h1>Tạo hồ sơ CV</h1>
          </div>
          <div className="bottomcruiterment">
            <div className="center">
              <form>
                {/* <div className="formInput">
                  <label>File đính kèm :</label>
                  <input type="file" name="file" onChange={Handlechange} />
                </div> */}
                {/* {isSelected ? ( */}
                <div className="formInput">
                  <label>Họ và tên: </label>
                  <input
                    type="text"
                    placeholder="Name"
                    name="fullname"
                    value={states.fullname}
                    onChange={handleChange}
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
                    type="text"
                    placeholder="Receipt ID"
                    name="phone"
                    value={states.phone}
                    onChange={handleChange}
                  />
                </div>

                {/* ) : ( */}

                {/* )} */}
                <div className="formInput">
                  <label>Mô tả về bản thân</label>
                  <input
                    type="text"
                    placeholder="description"
                    value={states.description}
                    name="description"
                    onChange={handleChange}
                  />
                </div>
                <div className="formInput">
                  <label>email: </label>
                  <input
                    type="text"
                    placeholder="email"
                    name="email"
                    value={states.email}
                    onChange={handleChange}
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
