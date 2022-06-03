import { useState } from "react";
import Navbar from "../../home/navbar/Navbar";
import Header from "../../home/header/Header"
import "./recruitment.scss"

const Recruitment = () => {

    const [selectedFile, setSelectedFile] = useState("");
    const [isFilePicked, setIsFilePicked] = useState(false);
    const [input, setInput] = useState("")

    const Handlechange = (event) => {
        setSelectedFile(event.target.files[0]);
        // setIsSelected(true);
    };

    const handleSubmission = (e) => {
        setInput(e.target.value)
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
                                < div className="formInput" >
                                    <label>Họ và tên: </label>
                                    <input placeholder="file name" onChange={handleSubmission}/>
                                    
                                    {/* <p onChange={handleSubmission} value={input}>  Filename: name </p>
                                    <p>Filetype: type </p>
                                    <p>Size in bytes: size</p> */}
                                    {/* <p>
                                lastModifiedDate:{' '}
                                {selectedFile.lastModifiedDate.toLocaleDateString()}
                                    
                            </p> */}
                                </div>
                                < div className="formInput" >
                                    <label>SĐT: </label>
                                    <input placeholder="file name" onChange={handleSubmission}/>
                                    
                                </div>
                               
                                
                                {/* ) : ( */}
                                
                                {/* )} */}
                                <div className="formInput" >
                                    <label>Mô tả về bản thân</label>
                                    <textarea type="" placeholder='Viết giới thiệu ngắn gọn về bản thân (điểm mạnh, điểm yếu) 
                                    và nêu rõ mong muốn, lý do làm việc tại công ty này. 
                                    Đây là cách gây ấn tượng với nhà tuyển dụng nếu bạn 
                                    có chưa có kinh nghiệm làm việc (hoặc CV không tốt).' />
                                </div>
                                <div className="formInput">
                                    <button onClick={handleSubmission}>Nộp CV</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div >
            </div>
        </div >
    )
}

export default Recruitment