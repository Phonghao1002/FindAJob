import "./list.scss";
import Sidebar from "../../components/adminManagement/sidebar/Sidebar";
import NavbarAdmin from "../../components/adminManagement/navbarAdmin/NavbarAdmin";
import Datatable from "../../components/adminManagement/datatable/Datatable";
import { useContext, useEffect, useState } from "react";
import { GlobalState } from "../../GlobalState";
import Navbargeneral from "../../components/navbargeneral/Navbargeneral";

const List = () => {
  const state = useContext(GlobalState);
  const [users] = state.userAPI.users;
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // console.log(data);
  }, []);

  // console.log(users)
  return (
    <div className="list">
      <Sidebar />
      <div className="listContainerAdmin">
        <Navbargeneral infoUser={infoUser} />
        <Datatable users={users} />
      </div>
    </div>
  );
};

export default List;
