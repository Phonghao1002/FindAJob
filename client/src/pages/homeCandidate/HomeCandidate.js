import "./homeCandidate.scss";
import PersonalPage from "../../components/candidate/personalPage/PersonalPage";
import SidebarCandidate from "../../components/candidate/sidebarCandidate/SidebarCandidate";
import NavbarCandidate from "../../components/candidate/NavbarCandidate/NavbarCandidate";
import Single from "../single/Single";
import { useEffect, useState } from "react";

const HomeCandidate = () => {
  return (
    <div className="homeCandidate">
      <SidebarCandidate />
      <div className="homeCandidateContainer">
        <NavbarCandidate />
        <Single />
      </div>
    </div>
  );
};

export default HomeCandidate;
