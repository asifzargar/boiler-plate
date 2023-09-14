import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import IconButton from "@mui/material/IconButton";
import InputAdornment from "@mui/material/InputAdornment";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useForm, Controller } from "react-hook-form";
import Typography from "@mui/material/Typography";
import logo from "../../../assets/Logo.svg";
import { FormValues } from "@/types";
import { Authenticaion } from "../../../services";
import Snackbar from "@mui/material/Snackbar";
import MuiAlert from "@mui/material/Alert";
import { useNavigate } from "react-router-dom";

const LoginPage: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"error" | "success">(
    "success"
  );

  const Navigate = useNavigate();

  let auth_service = new Authenticaion();
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<FormValues>({
    defaultValues: { email: "", password: "" },
  });

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
  const openSnackbar = (message: string, severity: "error" | "success") => {
    setSnackbarMessage(message);
    setSnackbarSeverity(severity);
    setSnackbarOpen(true);
  };
  const closeSnackbar = () => {
    setSnackbarOpen(false);
  };

  const onSubmit = async (data: FormValues) => {
    try {
      let response = await auth_service.login(data);
      if (response && response.status === 200) {
        openSnackbar("Login successful", "success");
        setTimeout(() => {
          Navigate("/forgot-password");
        }, 1000);
      } else {
        openSnackbar("Login failed", "error");
      }
    } catch (error) {
      console.error(error);
      openSnackbar("Login failed", "error");
    }
  };

  return (
    <Grid container style={{ height: "100vh" }}>
      <Snackbar open={snackbarOpen} onClose={closeSnackbar}>
        <MuiAlert
          elevation={6}
          variant="filled"
          severity={snackbarSeverity}
          onClose={closeSnackbar}
        >
          {snackbarMessage}
        </MuiAlert>
      </Snackbar>
      <Grid
        item
        xs={12}
        md={6}
        style={{
          backgroundColor: "#84754d",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        sx={{
          display: {
            xs: "none",
            sm: "none",
            md: "none",
            lg: "block",
            xl: "block",
          },
        }}
      >
        <img
          src={logo}
          alt="Random"
          style={{ maxWidth: "100%", maxHeight: "100%", objectFit: "cover" }}
        />
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={6}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Card
          style={{
            width: "50%",
            paddingBottom: "50px",
            boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
          }}
        >
          <h2 style={{ marginTop: 50, marginLeft: 48 }}>Sign in</h2>
          <CardContent style={{ padding: "50px" }}>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <Controller
                    name="email"
                    control={control}
                    rules={{
                      required: "Email is required!",
                      pattern: {
                        value: /\S+@\S+\.\S+/,
                        message: "Entered value does not match email format",
                      },
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        id="email"
                        placeholder="Email Address"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <PersonOutlineOutlinedIcon />
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                  {errors.email && (
                    <Typography variant="caption" color="error">
                      {errors.email.message}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={12}>
                  <Controller
                    name="password"
                    control={control}
                    rules={{
                      required: "Password is required!",
                    }}
                    render={({ field }) => (
                      <TextField
                        {...field}
                        type={showPassword ? "text" : "password"}
                        id="password"
                        placeholder="Password"
                        variant="outlined"
                        fullWidth
                        margin="normal"
                        InputProps={{
                          startAdornment: (
                            <InputAdornment position="start">
                              <LockOutlinedIcon />
                            </InputAdornment>
                          ),
                          endAdornment: (
                            <InputAdornment position="end">
                              <IconButton
                                onClick={togglePasswordVisibility}
                                edge="end"
                              >
                                {showPassword ? (
                                  <VisibilityIcon />
                                ) : (
                                  <VisibilityOffIcon />
                                )}
                              </IconButton>
                            </InputAdornment>
                          ),
                        }}
                      />
                    )}
                  />
                  {errors.password && (
                    <Typography variant="caption" color="error">
                      {errors.password.message}
                    </Typography>
                  )}
                </Grid>
                <div
                  style={{
                    marginBottom: "1rem",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                    width: "100%",
                  }}
                >
                  <span style={{ fontSize: "0.875rem", color: "text" }}>
                    <span>
                      <Link
                        to="/forget-password"
                        style={{
                          textDecoration: "none",
                          color: "primary",
                        }}
                      >
                        forgot password?
                      </Link>
                    </span>
                  </span>
                </div>
                <Grid item xs={12} sm={12} md={0} style={{ marginTop: "16px" }}>
                  <Button
                    type="submit"
                    variant="contained"
                    fullWidth
                    sx={{ padding: "20px" }}
                  >
                    Sign in
                  </Button>
                </Grid>
              </Grid>
            </form>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default LoginPage;
