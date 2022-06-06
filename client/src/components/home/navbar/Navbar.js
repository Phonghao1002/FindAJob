import "./navbar.scss";
import { Link } from "react-router-dom";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import axios from "axios";
import { useContext, useState, useEffect } from "react";
import { GlobalState } from "../../../GlobalState";

const options = [
  { value: "one", label: "One" },
  { value: "two", label: "Two", className: "myOptionClassName" },
  {
    type: "group",
    name: "group1",
    items: [
      { value: "three", label: "Three", className: "myOptionClassName" },
      { value: "four", label: "Four" },
    ],
  },
  {
    type: "group",
    name: "group2",
    items: [
      { value: "five", label: "Five" },
      { value: "six", label: "Six" },
    ],
  },
];

const Navbar = () => {
  const state = useContext(GlobalState);
  const [saveJob] = state.userAPI.saveJob;
  console.log(saveJob);
  const defaultOption = options[0];
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
  }, []);

  const checkUserLogin = () => {
    if (infoUser?._id) return true;
    else {
      return false;
    }
  };

  const handleOnLogout = async () => {
    try {
      await axios.get("/user/logout");
      localStorage.setItem("infoUser", null);
      window.location.href = "/";
    } catch {
      console.log("err");
    }
  };
  return (
    <div>
      <div className="navbar">
        <div className="navContainer">
          <span className="logo">✩ TÌM VIỆC NHANH ✩</span>
          <div className="navItems">
            {!checkUserLogin() && (
              <>
                <Link to="/register">
                  <button className="navButton">Register</button>
                </Link>
                <Link to="/login">
                  <button className="navButton">Login</button>
                </Link>
              </>
            )}

            {/* <div className="cart-icon"> */}
            {/* <h1>0</h1> */}
            {/* <div className="item"> */}
            {/* <span>admin</span> */}
            {checkUserLogin() && (
              <div class="dropdown">
                <div className="item">
                  <img
                    src="https://images.pexels.com/photos/941693/pexels-photo-941693.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
                    alt=""
                    className="avatar"
                  />
                  <span className="name">{infoUser.name}</span>
                </div>
                {/* <button class="dropbtn">Dropdown</button> */}
                <div class="dropdown-content">
                  <a href="#">Link 1</a>
                  <a
                    href="#"
                    onClick={() => {
                      window.location.href = "/admin";
                    }}
                  >
                    Trang Quản lý
                    <div className="cart-icon">
                      <h1>0</h1>
                    </div>
                  </a>
                  <a href="#" onClick={handleOnLogout}>
                    Logout
                  </a>
                </div>
              </div>
            )}
            {/* <Dropdown
                                    arrowClosed={<span className="arrow-closed" />}
                                    arrowOpen={<span className="arrow-open" />}
                                    options={options}
                                    value={defaultOption}
                                    placeholder="Select an option"
                                /> */}
            {/* <div>
                  <span>gfhfg</span>
                  <ul>
                    <li>fggf</li>
                    <li>fggf</li>
                    <li>fggf</li>
                  </ul>
                </div> */}
            {/* </div> */}
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
