import Sidebar from "../../components/adminManagement/sidebar/Sidebar";
import NavbarAdmin from "../../components/adminManagement/navbarAdmin/NavbarAdmin";
import "./HomeAdmin.scss";
import Widget from "../../components/adminManagement/widget/Widget";
import Featured from "../../components/adminManagement/featured/Featured";
import Chart from "../../components/adminManagement/chart/Chart";
import Table from "../../components/adminManagement/table/Table";
import Loading from "../../components/utils/loading/Loading";
import { useContext, useState, useEffect } from "react";
import Navbargeneral from "../../components/navbargeneral/Navbargeneral";
import { axios } from "axios";

const Home = () => {
  // const [loading, setLoading] = useState(false)
  const [infoUser, setInfoUser] = useState({});
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      if (data.role != "1") {
        window.location.href = "/";
      }
      setInfoUser(data);
      // console.log("infoUser", infoUser);
    } else {
      window.location.href = "/";
    }
    if (initial) setInitial(false);
  }, []);

  if (initial) return null;
  return (
    <div className="home">
      <Sidebar />
      <div className="homeAdminContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="widgets">
          {/* <Widget type="Tài khoản chờ phê duyệt" />
          <Widget type="Tài khoản hoạt động" /> */}
          <Widget type="Tin đã được duyệt" />
          <Widget type="Tin chờ phê duyệt" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="Biểu đồ tuyển dụng trong 6 tháng qua" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">
            Danh sách đã nộp hồ sơ ứng tuyển trong 1 tuần qua
          </div>
          <Table />
        </div>
      </div>
      {/* <Loading /> */}
    </div>
  );
};

export default Home;
