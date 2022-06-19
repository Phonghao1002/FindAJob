import "./changePassword.scss";
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
import SidebarCandidate from "../sidebarCandidate/SidebarCandidate";
import NavbarCandidate from "../NavbarCandidate/NavbarCandidate";
// import KeyIcon from '@mui/icons-material/Key';
import { useEffect, useState } from "react";
import { axios } from "axios";
import Navbargeneral from "../../navbargeneral/Navbargeneral";

const ChangePassword = () => {
  const [infoUser, setInfoUser] = useState({});

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("infoUser"));
    if (data) {
      setInfoUser(data);
    }
    // setUsers(initialState);
    // console.log("infoUser", infoUser);
  }, []);
  const [user, setUser] = useState({
    password: "",
  });

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const changepasswordSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4110/user/reset", { ...user });

      // localStorage.setItem("firstLogin", true);

      window.location.href = "/";
    } catch (err) {
      alert(err.response.data.msg);
    }
  };
  return (
    <div className="homeChangePassword">
      <SidebarCandidate />
      <div className="homeChangePasswordContainer">
        <Navbargeneral infoUser={infoUser} />
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
                Đặt lại mật khẩu
              </Typography>
              <Box
                component="form"
                noValidate
                sx={{ mt: 3 }}
                onSubmit={changepasswordSubmit}
              >
                <Grid container spacing={2}>
                  {/* <Grid item xs={12}>
                    <TextField
                      autoComplete="given-name"
                      name="firstName"
                      required
                      fullWidth
                      id="firstName"
                      label="Mật khẩu"
                      autoFocus
                      onChange={onChangeInput}
                    />
                  </Grid> */}
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="password"
                      label="Mật khẩu mới"
                      name="password"
                      autoComplete="password"
                      value={user.password}
                      onChange={onChangeInput}
                    />
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      required
                      fullWidth
                      id="password"
                      label="Nhập lại mật khẩu mới"
                      name="password"
                      autoComplete="password"
                      value={user.password}
                      onChange={onChangeInput}
                    />
                  </Grid>

                  {/* <Grid item xs={12}>
                                <FormControlLabel
                                    control={<Checkbox value="allowExtraEmails" color="primary" />}
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
                  Đặt lại mật khẩu
                </Button>
                <Grid container justifyContent="flex-end">
                  {/* <Grid item>
                    <Link href="/login" variant="body2">
                      Return to? Sign in
                    </Link>
                  </Grid> */}
                </Grid>
              </Box>
            </Box>
            {/* <Copyright sx={{ mt: 5 }} /> */}
          </Container>
        </div>
      </div>
    </div>
  );
};

export default ChangePassword;
