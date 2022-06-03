import React, { useState } from 'react'
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import "./personalPage.scss"

const PersonalPage = () => {
    const [file, SetFile] = useState("")
    return (
        <div className="PersonalPage">
            <div className="personalContainer">
                <div className="topPersonalPage">
                    <h1>Hồ sơ cá nhân</h1>
                </div>
                <div className="bottomPersonalPage">
                    <div className="left">
                        <img
                            src={file ? URL.createObjectURL(file) :
                                "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
                            }
                            alt=""
                        />
                    </div>
                    <div className="right">
                        <form>
                            <div className="formInput">
                                <label htmlFor="file">
                                    Image: <DriveFolderUploadOutlinedIcon />
                                </label>
                                <input type="file" id="file" onChange={e => SetFile(e.target.files[0])} style={{ display: "none" }} />
                            </div>

                            <div className="formInput" >
                                <label>Name and surname</label>
                                <input type="" placeholder="Phong Hào" />
                            </div>
                            <div className="formInput" >
                                <label>Ngay sinh</label>
                                <input type="" placeholder="10/02/2000" />
                            </div>
                            <div className="formInput" >
                                <label>Phone</label>
                                <input type="" placeholder="+1 23456789" />
                            </div>
                            <div className="formInput" >
                                <label>Address</label>
                                <input type="" placeholder="Quang Tri" />
                            </div>
                            <div className="formInput" >
                                <label>Username</label>
                                <input type="" placeholder="PhongHao" />
                            </div>
                            <div className="formInput" >
                                <label>Email</label>
                                <input type="" placeholder="phamphonghao1002@gmail.com" />
                            </div>
                            <div className="formInput" >
                                <label>Gender</label>
                                {/* <input type="" placeholder="Nam" /> */}
                                <select>
                                    <option>Name</option>
                                    <option>Nu</option>
                                </select>
                            </div>
                            <div className="formInput" >
                                <label>Mô tả về bản thân</label>
                                <textarea type="" placeholder='Mô tả bản thân'/>
                            </div>
                            <div className="formInput" >
                                <label>Quận</label>
                                {/* <input type="" placeholder="Nam" /> */}
                                <select>
                                    <option>Quận Liên Chiểu</option>
                                    <option>Quận Thanh Khê</option>
                                    <option>Quận Hải Châu</option>
                                    <option>Quận Sơn Trà</option>
                                    <option>Quận Ngũ Hành Sơn</option>
                                </select>
                            </div>
                            <div className="formInput" >
                                <label>Phường</label>
                                {/* <input type="" placeholder="Nam" /> */}
                                <select>
                                    <option>Phường Hòa Hiệp Bắc</option>
                                    <option>Phường Hòa Hiệp Nam</option>
                                    <option>Phường Tam Thuận</option>
                                    <option>Phường Thanh Khê Đông</option>
                                    <option>Phường Thanh Bình</option>
                                    <option>Phường Hải Châu I</option>
                                    <option>Phường Nại Hiên Đông</option>
                                    <option>Phường Mỹ An</option>
                                </select>
                            </div>
                            <div className="formInput" >
                                <label>Đường</label>
                                {/* <input type="" placeholder="Nam" /> */}
                                <select>
                                    <option>Đinh Tiên Hoàng</option>
                                    <option>Lê Duẩn</option>
                                </select>
                            </div>
                            <button>Cập nhật</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default PersonalPage