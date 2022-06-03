import "./list.scss"
import Sidebar from '../../components/adminManagement/sidebar/Sidebar'
import NavbarAdmin from '../../components/adminManagement/navbarAdmin/NavbarAdmin'
import Datatable from "../../components/adminManagement/datatable/Datatable"
import { useContext } from "react"
import { GlobalState } from "../../GlobalState"

const List = () => {
  const state = useContext(GlobalState)
  const [users] =  state.userAPI.users

  // console.log(users)
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainerAdmin">
        <NavbarAdmin />
        <Datatable users={users}/>
      </div>
    </div>
  )
}

export default List