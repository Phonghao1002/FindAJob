import "./login.scss";
// import { Link } from 'react-router-dom'
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import axios from "axios";
import { useState } from "react";

const RegisterRecruit = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    password: "",
    gender: "",
    birthday: "",
    company: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const registerRecruitSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/user/registerRecruit", { ...user });

      localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="login-page">
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Đăng ký Nhà tuyển dụng
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={registerRecruitSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="name"
                  label="Tên tài khoản"
                  name="name"
                  autoComplete="family-name"
                  value={user.name}
                  onChange={onChangeInput}
                  // helperText="Please enter your name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email"
                  name="email"
                  autoComplete="email"
                  value={user.email}
                  onChange={onChangeInput}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-phone"
                  name="phone"
                  required
                  fullWidth
                  id="phone"
                  value={user.phone}
                  label="Số điện thoại"
                  autoFocus
                  onChange={onChangeInput}
                />
                <TextField
                  autoComplete="given-name"
                  name="gender"
                  required
                  fullWidth
                  id="gender"
                  value={user.gender}
                  label="Giới tính"
                  autoFocus
                  onChange={onChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Địa chỉ"
                  type="address"
                  id="address"
                  autoComplete="new-password"
                  value={user.address}
                  onChange={onChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="company"
                  label="Công Ty"
                  type="company"
                  id="company"
                  autoComplete="new-password"
                  value={user.company}
                  onChange={onChangeInput}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={user.password}
                  onChange={onChangeInput}
                />
              </Grid>
              {/* <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid> */}
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Đăng ký
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="/login" variant="body2">
                  Bạn co săn sàng để tạo một tai khoản? Đăng nhập
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        {/* <Copyright sx={{ mt: 5 }} /> */}
      </Container>
    </div>
  );
};

export default RegisterRecruit;
