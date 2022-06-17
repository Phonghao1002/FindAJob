import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeAdmin from "./pages/homeAdmin/HomeAdmin";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { userInputs, productInputs } from "./formSource";
import "./style/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Register from "./pages/login/Register";
import RegisterRecruit from "./pages/login/RegisterRecruit";
import Home from "./pages/home/Home";
import HomeCandidate from "./pages/homeCandidate/HomeCandidate";
import ChangePassword from "./components/candidate/changePassword/ChangePassword";
import HomeRecruiter from "./pages/homeRecruiter/HomeRecruiter";
import Decentralization from "./components/adminManagement/decentralization/Decentralization";
import DetailsRecruitNews from "./components/home/detailsRecruitNews/DetailsRecruitNews";
import ResetPassword from "./pages/login/resetPassword/ResetPassword";

import { GlobalState } from "./GlobalState";
import NotFound from "./pages/not_found/NotFound";
import Categories from "./components/recruiter/createCategories/Categories";
import CreateRecruitNews from "./components/recruiter/createRecruitNews/CreateRecruitNews";
import ManagementNewsRecruit from "./components/recruiter/managementNewsRecruit/ManagementNewsRecruit";
import MyJobsCandidate from "./components/candidate/myJobsCandidate/MyJobsCandidate";
import ApplicationHistory from "./components/candidate/applicationHistory/ApplicationHistory";
import BrowseCandidate from "./components/recruiter/browseCandidate/BrowseCandidate";
import RecruiterPersonalPage from "./components/recruiter/editrecruiterPersonalPage/EditrecruiterPersonalPage";
import TestCruiterNews from "./components/recruiter/testCruiterNews/TestCruiterNews";
import Recruitment from "./components/candidate/recruitment/Recruitment";
import PersonalPage from "./components/candidate/personalPage/PersonalPage";
import EditrecruiterPersonalPage from "./components/recruiter/editrecruiterPersonalPage/EditrecruiterPersonalPage";
import PersonalPageRecruit from "./components/recruiter/personalPageRecruit/PersonalPageRecruit";
import CreateFileCV from "./components/home/createFileCV/CreateFileCV";
import PendingProfile from "./components/recruiter/pendingProfile/PendingProfile";
import ApprovedProfile from "./components/recruiter/approvedProfile/ApprovedProfile";

export default function App() {
  const { darkMode } = useContext(DarkModeContext);
  const state = useContext(GlobalState);
  // console.log(state)
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
  }, []);

  return (
    <div className={darkMode ? "app dark" : "app"}>
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />

            <Route
              path="detailsRecruitNews/:id"
              element={<DetailsRecruitNews />}
            />
            <Route path="recruitment/:id" element={<Recruitment />} />

            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="registerRecruit" element={<RegisterRecruit />} />
            <Route path="resetPassword" element={<ResetPassword />} />
            <Route path="createFileCV" element={<CreateFileCV />} />

            <Route path="admin">
              <Route index element={<HomeAdmin />} />
              <Route path=":decentralization" element={<Decentralization />} />
            </Route>

            <Route path="recruiter">
              <Route index element={<HomeRecruiter />} />
              <Route path="pendingProfile" element={<PendingProfile />} />
              <Route path="approvedProfile" element={<ApprovedProfile />} />
              <Route path="personalPage" element={<PersonalPageRecruit />} />
              <Route
                path="EditrecruiterPersonalPage/:id"
                element={<EditrecruiterPersonalPage />}
              />
              <Route path="category" element={<Categories />} />
              <Route
                path="managementRecruitMentId/:id"
                element={<ManagementNewsRecruit />}
              />
              <Route
                path="managementRecruitMent"
                element={<TestCruiterNews />}
              />
              <Route path="createRecruitNews" element={<CreateRecruitNews />} />
              <Route
                path="edit_RecruitNews/:id"
                element={<CreateRecruitNews />}
              />
              <Route path="browseCandidate" element={<BrowseCandidate />} />
            </Route>

            <Route path="candidate">
              <Route index element={<HomeCandidate />} />
              <Route path="editcandidate/:id" element={<PersonalPage />} />
              <Route path="changePassword" element={<ChangePassword />} />
              <Route path="myJobs" element={<MyJobsCandidate />} />
              <Route
                path="applicationHistory"
                element={<ApplicationHistory />}
              />
            </Route>

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={userInputs} title="Add New User" />}
              />
            </Route>
            <Route path="candidateManager">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route
                path="new"
                element={<New inputs={productInputs} title="Add New Product" />}
              />
            </Route>
            <Route path="*">
              <Route index element={<NotFound />} />
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
