import Sidebar from '../../components/adminManagement/sidebar/Sidebar'
import NavbarAdmin from '../../components/adminManagement/navbarAdmin/NavbarAdmin'
import './HomeAdmin.scss'
import Widget from '../../components/adminManagement/widget/Widget'
import Featured from '../../components/adminManagement/featured/Featured'
import Chart from '../../components/adminManagement/chart/Chart'
import Table from '../../components/adminManagement/table/Table'
import Loading from '../../components/utils/loading/Loading'

const Home = () => {
  // const [loading, setLoading] = useState(false)

  return (
    <div className='home'>
      <Sidebar />
      <div className='homeAdminContainer'>
        <NavbarAdmin />
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
      {/* <Loading /> */}
    </div>
  )
}

export default Home