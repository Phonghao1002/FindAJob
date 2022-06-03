import "./home.scss"
import FeaturedNews from '../../components/home/featuredNews/FeaturedNews'
import Header from '../../components/home/header/Header'
import Navbar from '../../components/home/navbar/Navbar'
import RecruitmentNews from "../../components/home/recruitmentNews/RecruitmentNews"
import MaiList from "../../components/home/mailList/MaiList"
import Footer from "../../components/home/footer/Footer"
import Loading from "../../components/utils/loading/Loading"
import { useContext } from "react"
import { GlobalState } from "../../GlobalState"

const Home = () => {
  const state = useContext(GlobalState)

  // console.log(state)

  return (
    <div>
      <Navbar />
      <Header />
      <div className='homeContainer'>
        <FeaturedNews />
        <h1 className='homeTitle'>Tin tuyển dụng</h1>
        <RecruitmentNews />
        <MaiList />
        <Footer />

      </div>
      {/* <Loading /> */}

    </div>
  )
}

export default Home