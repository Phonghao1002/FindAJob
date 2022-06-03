import "./homeCandidate.scss"
import PersonalPage from '../../components/candidate/personalPage/PersonalPage'
import SidebarCandidate from "../../components/candidate/sidebarCandidate/SidebarCandidate"
import NavbarCandidate from "../../components/candidate/NavbarCandidate/NavbarCandidate"

const HomeCandidate = () => {
  return (
    <div className="homeCandidate">
        <SidebarCandidate />
        <div className='homeCandidateContainer'>
            <NavbarCandidate />
            <PersonalPage />
        </div>
    </div>
  )
}

export default HomeCandidate