import "./home.scss";
import FeaturedNews from "../../components/home/featuredNews/FeaturedNews";
import Header from "../../components/home/header/Header";
import Navbar from "../../components/home/navbar/Navbar";
import RecruitmentNews from "../../components/home/recruitmentNews/RecruitmentNews";
import MaiList from "../../components/home/mailList/MaiList";
import Footer from "../../components/home/footer/Footer";
import Loading from "../../components/utils/loading/Loading";
import { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../GlobalState";

const Home = () => {
  const state = useContext(GlobalState);

  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
      // console.log("User info", data);
    }
  }, []);
  return (
    <div>
      <Navbar />
      <Header />
      <div className="homeContainer">
        <FeaturedNews />
        <h1 className="homeTitle">Tin tuyển dụng</h1>
        <RecruitmentNews infoUser={infoUser} />
        <MaiList />
        <Footer />
      </div>
      {/* <Loading /> */}
    </div>
  );
};

export default Home;
