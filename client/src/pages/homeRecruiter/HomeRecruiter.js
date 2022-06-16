import Chart from "../../components/adminManagement/chart/Chart";
import Datatable from "../../components/adminManagement/datatable/Datatable";
import Featured from "../../components/adminManagement/featured/Featured";
import Widget from "../../components/adminManagement/widget/Widget";
import NavbarRecruiter from "../../components/recruiter/navbarRecruiter/NavbarRecruiter";
import SidebarRecruiter from "../../components/recruiter/sidebarRecruiter/SidebarRecruiter";
import Table from "../../components/adminManagement/table/Table";
// import TableRecruiter from "../../components/recruiter/tableRecruiter/TableRecruiter"
import "./homeRecruiter.scss";
import { useState, useEffect } from "react";
import Navbargeneral from "../../components/navbargeneral/Navbargeneral";

const HomeRecruiter = () => {
  const [infoUser, setInfoUser] = useState({});
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      if (data.role != "2") {
        window.location.href = "/";
      }
      setInfoUser(data);
    } else {
      window.location.href = "/";
    }
    if (initial) setInitial(false);
  }, []);

  if (initial) return null;

  return (
    <div className="homeRecruiter">
      <SidebarRecruiter />
      <div className="homeRecruiterContainer">
        <Navbargeneral infoUser={infoUser} />
        <div className="widgets">
          {/* <Widget type="Tài khoản chờ phê duyệt" />
          <Widget type="Tài khoản hoạt động" /> */}
          <Widget type="Tin đã được duyệt" />
          <Widget type="Tin chờ phê duyệt" />
        </div>
        {/* <div className="charts">
          <Featured />
          <Chart title="6 tháng trước (Tuyển dụng)" aspect={2 / 1} />
        </div> */}
        <div className="listContainer">
          <div className="listTitle">
            Danh sách đã nộp hồ sơ ứng tuyển trong 1 tuần qua
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default HomeRecruiter;
