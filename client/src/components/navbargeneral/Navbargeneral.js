import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";
import "./navbargeneral.scss";
import Navbar from "../home/navbar/Navbar";

const Navbargeneral = ({ infoUser }) => {
  // const [infoUser, setInfoUser] = useState({});

  // useEffect(() => {
  //   const data = JSON.parse(localStorage.getItem("infoUser"));
  //   if (data) {
  //     setInfoUser(data);
  //   }
  // console.log("infoUser", infoUser);
  // }, []);
  return (
    <div className="navbarAdmin">
      <div className="wrapper">
        <div className="search">
          <input type="text" placeholder="Tìm kiếm..." />
          <SearchOutlinedIcon className="icon" />
        </div>
        <div className="items">
          {/* <div className="item">
            <LanguageOutlinedIcon className="icon" />
            English
          </div> */}
          <div className="item">
            <DarkModeOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            {/* <div className="counter">1</div> */}
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            {/* <div className="counter">2</div> */}
          </div>
          <div className="item">
            <ListOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <img
              src={
                ""
                  ? infoUser?.avatar?.url
                  : "https://res.cloudinary.com/safehorizons/image/upload/v1654732368/avatar/lxsvhqrtmsrkv3emqh3k.jpg"
              }
              alt=""
              className="avatar"
            />
            <span>{infoUser.name}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbargeneral;
