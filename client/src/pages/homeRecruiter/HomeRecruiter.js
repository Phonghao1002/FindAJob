import Chart from "../../components/adminManagement/chart/Chart"
import Datatable from "../../components/adminManagement/datatable/Datatable"
import Featured from "../../components/adminManagement/featured/Featured"
import Widget from "../../components/adminManagement/widget/Widget"
import NavbarRecruiter from "../../components/recruiter/navbarRecruiter/NavbarRecruiter"
import SidebarRecruiter from "../../components/recruiter/sidebarRecruiter/SidebarRecruiter"
import Table from '../../components/adminManagement/table/Table'
// import TableRecruiter from "../../components/recruiter/tableRecruiter/TableRecruiter"
import "./homeRecruiter.scss"

const HomeRecruiter = () => {
  return (
    <div className="homeRecruiter">
      <SidebarRecruiter />
      <div className='homeRecruiterContainer'>
        <NavbarRecruiter /> 
        <div className="widgets">
          <Widget type="Tài khoản chờ phê duyệt" />
          <Widget type="Tài khoản hoạt động" />
          <Widget type="Tin đã được duyệt" />
          <Widget type="Tin chờ phê duyệt" />
        </div>
        <div className='charts'>
          <Featured />
          <Chart title="Last 6 Months (Recruit)" aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">Recruitment List
            latest job</div>
          <Table />
        </div>
      </div>
    </div>
  )
}

export default HomeRecruiter