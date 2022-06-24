import axios from "axios";
import { useEffect, useState } from "react";

export default function UserAPI(token) {
  const [isLogged, setIsLogged] = useState(false);
  const [isAdmin, setIsAdmin] = useState();
  const [saveJob, setSaveJob] = useState([]);
  const [cart, setCart] = useState([]);
  const [users, setUsers] = useState([]);

  const getUser = async () => {
    try {
      const res = await axios.get("/user/infor", {
        headers: { Authorization: token },
      });

      setIsLogged(true);
      console.log("res", res.data.role);
      res.data.role == 1 ? setIsAdmin(true) : setIsAdmin(false);
      // console.log(res)
      // setCart(res.data.cart)
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  useEffect(() => {
    if (token) {
      getUser();
    }
  }, [token]);

  const addCart = async (recruitNew) => {
    // if (!isLogged) return alert("Please login to continue buying");

    const check = cart.every((item) => {
      return item._id !== recruitNew._id;
    });

    if (check) {
      setCart([...cart, { ...recruitNew, quantity: 1 }]);

      await axios.patch("http://localhost:4110/user/addCart", {
        cart: [...cart, { ...recruitNew, quantity: 1 }],
      });
    } else {
      alert("This job posting has been saved to my jobs");
    }
  };

  useEffect(() => {
    const getUsers = async () => {
      const res = await axios.get("/user/users");
      setUsers(res.data);
      // console.log(res.data);
    };
    getUsers();
  }, []);

  return {
    isLogged: [isLogged, setIsLogged],
    isAdmin: [isAdmin, setIsAdmin],
    saveJob: [saveJob, setSaveJob],
    cart: [cart, setCart],
    addCart: addCart,
    // addSaveJobs: addSaveJobs,
    users: [users, setUsers],
  };
}
