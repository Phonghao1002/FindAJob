const Users = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const emailService = require("../routes/emailService");
const Mailer = require("../routes/emailService");
// const {google} = require('googleapis')
// const {OAuth2} = google.auth
// const fetch = require('node-fetch')

const mailer = new Mailer();

// const client = new OAuth2(process.env.MAILING_SERVICE_CLIENT_ID)

// const { CLIENT_URL } = process.env;
const userCtrl = {
  register: async (req, res) => {
    try {
      const { name, email, password } = req.body;
      const mail = mailer.message(
        email,
        "Test mail",
        `<div style="max-width: 700px; margin:auto; border: 10px solid #ddd; padding: 50px 20px; font-size: 110%;">
      <h2 style="text-align: center; text-transform: uppercase;color: teal;">Welcome to the DevAT channel.</h2>
      <p>Congratulations! You're almost set to start using DEVAT✮SHOP.
          Just click the button below to validate your email address.
      </p>`
      );
      mailer.sendMail(mail);

      if (!name || !email || !password)
        return res
          .status(400)
          .json({ msg: "Vui lòng điền vào tất cả các lĩnh vực." });

      // if (!validateEmail(email))
      //     return res.status(400).json({ msg: "Invalid emails." })
      // await emailService.sendSimpleEmail({
      //   reciverEmail: email,
      // });
      const user = await Users.findOne({ email });
      if (user) return res.status(400).json({ msg: "Email này đã tồn tại." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Mật khẩu phải có ít nhất 6 ký tự." });

      //Mã hóa mật khẩu
      const passwordHash = await bcrypt.hash(password, 12);
      // console.log({password, passwordHash})

      const newUser = new Users({
        name,
        email,
        password: passwordHash,
        // status: "Chưa duyệt",
      });

      // Save mongodb
      await newUser.save();

      // const accesstoken = createAccessToken({ id: newUser._id });
      const refreshtoken = createRefreshToken({ id: newUser._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
        // maxAge: 7*24*60*60*1000 // 7d
      });

      // res.json({ accesstoken })

      // const activation_token = createActivationToken(newUser);
      // const url = `${CLIENT_URL}/user/activate/${activation_token}`;
      // sendMail(email, url);

      res.json({ msg: "Đăng ký thành công! " });

      // res.json(newUser)
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      if (!email || !password)
        return res
          .status(400)
          .json({ msg: "Vui lòng điền vào tất cả các lĩnh vực." });

      const user = await Users.findOne({ email });
      if (!user)
        return res.status(400).json({ msg: "Email này không tồn tại." });

      const isMatch = await bcrypt.compare(password, user.password);
      if (!isMatch)
        return res.status(400).json({ msg: "Mật khẩu không đúng." });

      // If login success , create access token and refresh token
      const accesstoken = createAccessToken({ id: user._id });
      const refreshtoken = createRefreshToken({ id: user._id });

      res.cookie("refreshtoken", refreshtoken, {
        httpOnly: true,
        path: "/user/refresh_token",
        // maxAge: 7 * 24 * 60 * 60 * 1000 // 7d
      });
      const infoUser = await Users.findOne({ email });
      res.json({
        msg: "Đăng nhập thành công!",
        accesstoken,
        infoUser,
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  refreshToken: (req, res) => {
    try {
      const rf_token = req.cookies.refreshtoken;
      if (!rf_token)
        return res.status(400).json({ msg: "Vui lòng đăng nhập hoặc đăng ký" });

      jwt.verify(rf_token, process.env.REFRESH_TOKEN_SECRET, (err, user) => {
        if (err)
          return res
            .status(400)
            .json({ msg: "Vui lòng đăng nhập hoặc đăng ký" });

        const accesstoken = createAccessToken({ id: user.id });

        res.json({ user, accesstoken });
      });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  resetPassword: async (req, res) => {
    try {
      const { password } = req.body;
      console.log(password);
      const passwordHash = await bcrypt.hash(password, 12);

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Mật khẩu phải có ít nhất 6 ký tự." });

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          password: passwordHash,
        }
      );

      res.json({ msg: "Mật khẩu đã được thay đổi thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUser: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id).select("-password");
      if (!user)
        return res.status(400).json({ msg: "Người dùng không tồn tại." });

      res.json(user);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getUsers: async (req, res) => {
    try {
      const users = await Users.find();
      res.json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  getRecruit: async (req, res) => {
    try {
      const users = await Users.find({ role: 2 });
      res.json(users);
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  logout: async (req, res) => {
    try {
      res.clearCookie("refreshtoken", { path: "/user/refresh_token" });
      return res.json({ msg: "Đã đăng xuất" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  createUsers: async (req, res) => {
    try {
      const {
        name,
        email,
        phone,
        address,
        gender,
        birthday,
        company,
        password,
      } = req.body;

      const mail = mailer.message(email, "Test mail", "WellCome");
      mailer.sendMail(mail);

      // if (
      //   !name ||
      //   !email ||
      //   !phone ||
      //   !address ||
      //   !gender ||
      //   !birthday ||
      //   !company ||
      //   !password
      // )
      //   return res
      //     .status(400)
      //     .json({ msg: "Vui lòng điền vào tất cả các lĩnh vực." });

      const user = await Users.findOne({ name });
      if (user)
        return res.status(400).json({ msg: "Người dùng này đã tồn tại." });

      if (password.length < 6)
        return res
          .status(400)
          .json({ msg: "Mật khẩu phải có ít nhất 6 ký tự." });

      //Mã hóa mật khẩu
      const passwordHash = await bcrypt.hash(password, 12);

      const newUser = new Users({
        name,
        email,
        phone,
        address,
        gender,
        birthday,
        company,
        password: passwordHash,
        // status: "Chưa duyệt",
        role: 2,
      });
      // res.json(newRecruitNew)
      await newUser.save();
      res.json({ msg: "Đã tạo mới một Người Dùng!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  updateUser: async (req, res) => {
    // res.json({ msg: "Update Success!" });
    try {
      const { name, avatar, phone, address, gender, birthday, company } =
        req.body;
      if (!avatar)
        return res.status(400).json({ msg: "Không có hình ảnh tải lên" });

      await Users.findByIdAndUpdate(
        { _id: req.params.id },
        {
          name,
          avatar,
          phone,
          address,
          gender,
          birthday,
          company,
          // status: "Chưa duyệt",
        }
      );

      res.json({ msg: "Cập nhật thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  updateUsersRole: async (req, res) => {
    try {
      const { role } = req.body;

      await Users.findOneAndUpdate(
        { _id: req.params.id },
        {
          role,
        }
      );

      res.json({ msg: "Cập nhật vai trò Thành công!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  addSaveJobs: async (req, res) => {
    try {
      const user = await Users.findById(req.user.id);
      if (!user)
        return res.status(400).json({ msg: "Người dùng không tồn tại." });

      await Users.findOneAndUpdate(
        { _id: req.user.id },
        {
          savejobs: req.body.savejobs,
        }
      );

      return res.json({ msg: "Đã thêm vào mục công việc của tôi!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },

  deleteRecruitment: async (req, res) => {
    try {
      await Recruitment.findByIdAndDelete(req.params.id);
      res.json({ msg: "Đã xóa một hồ sơ tuyển dụng!" });
    } catch (err) {
      return res.status(500).json({ msg: err.message });
    }
  },
  // activateEmail: async (req, res) => {
  //   try {
  //     const { activation_token } = req.body;
  //     const user = jwt.verify(
  //       activation_token,
  //       process.env.ACTIVATION_TOKEN_SECRET
  //     );

  //     // console.log(user)

  //     const { name, email, password } = user;

  //     const check = await Users.findOne({ email });
  //     if (check)
  //       return res.status(400).json({ msg: "This email already exists." });

  //     const newUser = new Users({
  //       name,
  //       email,
  //       password,
  //     });

  //     await newUser.save();

  //     res.json({ msg: "Account has been activated!" });
  //   } catch (err) {
  //     return res.status(500).json({ msg: err.message });
  //   }
  // },

  // login: async (req, res) => {
  //     try {
  //         const {email, password} = req.body
  //         const user = await Users.findOne({email})
  //         if(!user) return res.status(400).json({msg: "This email does not exist."})

  //         const isMatch = await bcrypt.compare(password, user.password)
  //         if(!isMatch) return res.status(400).json({msg: "Password is incorrect."})

  //         console.log(user)

  //         const refresh_token = createRefreshToken({id: user._id})
  //         // res.cookie('refreshtoken', refresh_token, {
  //         //     httpOnly: true,
  //         //     path: '/user/refresh_token',
  //         //     maxAge: 7*24*60*60*1000 // 7 days
  //         // })

  //         res.json({msg: "Login success!"})
  //     } catch (err) {
  //         return res.status(500).json({msg: err.message})
  //     }
  // },
};

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email);
}

const createActivationToken = (payload) => {
  return jwt.sign(payload, process.env.ACTIVATION_TOKEN_SECRET, {
    expiresIn: "5m",
  });
};

const createAccessToken = (user) => {
  return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: "11m" });
};

const createRefreshToken = (user) => {
  return jwt.sign(user, process.env.REFRESH_TOKEN_SECRET, { expiresIn: "7d" });
};

module.exports = userCtrl;
