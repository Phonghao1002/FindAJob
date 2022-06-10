import "./homeCandidate.scss";
import PersonalPage from "../../components/candidate/personalPage/PersonalPage";
import SidebarCandidate from "../../components/candidate/sidebarCandidate/SidebarCandidate";
import NavbarCandidate from "../../components/candidate/NavbarCandidate/NavbarCandidate";
import Single from "../single/Single";
import { useEffect, useState } from "react";
import Navbargeneral from "../../components/navbargeneral/Navbargeneral";

const HomeCandidate = () => {
  const [infoUser, setInfoUser] = useState({});
  const [initial, setInitial] = useState(true);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      if (data.role != "0") {
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
    <div className="homeCandidate">
      <SidebarCandidate />
      <div className="homeCandidateContainer">
        <Navbargeneral infoUser={infoUser} />
        <Single />
      </div>
    </div>
  );
};

export default HomeCandidate;
