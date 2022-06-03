import React, { useState } from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomeAdmin from "./pages/homeAdmin/HomeAdmin";
import Login from "./pages/login/Login"
import List from "./pages/list/List"
import Single from "./pages/single/Single"
import New from "./pages/new/New"
import { userInputs, productInputs } from "./formSource"
import "./style/dark.scss"
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";
import Register from "./pages/login/Register";
import Home from "./pages/home/Home";
import HomeCandidate from "./pages/homeCandidate/HomeCandidate";
import ChangePassword from "./components/candidate/changePassword/ChangePassword";
import HomeRecruiter from "./pages/homeRecruiter/HomeRecruiter";
import Decentralization from "./components/adminManagement/decentralization/Decentralization";
import DetailsRecruitNews from "./components/home/detailsRecruitNews/DetailsRecruitNews";



import { GlobalState } from "./GlobalState";
import NotFound from "./pages/not_found/NotFound";
import Categories from "./components/recruiter/createCategories/Categories";
import CreateRecruitNews from "./components/recruiter/createRecruitNews/CreateRecruitNews";
import ManagementNewsRecruit from "./components/recruiter/managementNewsRecruit/ManagementNewsRecruit";
import MyJobsCandidate from "./components/candidate/myJobsCandidate/MyJobsCandidate";
import ApplicationHistory from "./components/candidate/applicationHistory/ApplicationHistory";
import BrowseCandidate from "./components/recruiter/browseCandidate/BrowseCandidate";
import RecruiterPersonalPage from "./components/recruiter/recruiterPersonalPage/RecruiterPersonalPage";
import TestCruiterNews from "./components/recruiter/testCruiterNews/TestCruiterNews";
import Recruitment from "./components/candidate/recruitment/Recruitment";

export default function App() {
  const { darkMode } = useContext(DarkModeContext)
  const state = useContext(GlobalState)
  // console.log(state)
  return (
    <div className={darkMode ? "app dark" : "app"} >
      <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home />} />
            {/* <Route path="detailsRecruitNews" > */}
            {/* <Route index element={<DetailsRecruitNews/>} /> */}
            <Route path="detailsRecruitNews/:id" element={<DetailsRecruitNews />} />
            <Route path="recruitment" element={<Recruitment />} />
            {/* </Route> */}


            <Route path="login" element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="resetPassword" element={<Register />} />
            {/* <Route path="detailsRecruitNews">
              <Route index element={<DetailsRecruitNews />} /> */}
            {/* </Route> */}
            <Route path="admin">
              <Route index element={<HomeAdmin />} />
              <Route path=":decentralization" element={<Decentralization />} />
            </Route>

            <Route path="recruiter">
              <Route index element={<HomeRecruiter />} />
              <Route path=":candidateId" element={<ChangePassword />} />
              <Route path="personalPage" element={<RecruiterPersonalPage />} />
              <Route path="category" element={<Categories />} />
              <Route path="managementNewsRecruit" element={<ManagementNewsRecruit />} />
              <Route path="test" element={<TestCruiterNews />} />
              <Route path="createRecruitNews" element={<CreateRecruitNews />} />
              <Route path="edit_RecruitNews/:id" element={<CreateRecruitNews />} />
              <Route path="browseCandidate" element={<BrowseCandidate />} />

            </Route>

            <Route path="candidate">
              <Route index element={<HomeCandidate />} />
              <Route path=":candidateId" element={<ChangePassword />} />
              <Route path="myJobs" element={<MyJobsCandidate />} />
              <Route path="applicationHistory" element={<ApplicationHistory />} />
            </Route>

            <Route path="users">
              <Route index element={<List />} />
              <Route path=":userId" element={<Single />} />
              <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
            </Route>
            <Route path="candidateManager">
              <Route index element={<List />} />
              <Route path=":productId" element={<Single />} />
              <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
            </Route>
            <Route path='*'>
              <Route index element={<NotFound />} />
            </Route>
          </Route>

        </Routes>
      </BrowserRouter>
    </div>
  )
}

