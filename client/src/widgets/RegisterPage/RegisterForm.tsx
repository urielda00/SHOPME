import {
  Avatar,
  Button,
  TextField,
  Grid,
  Box,
  Typography,
  Container,
  InputAdornment,
  IconButton,
  Tooltip,
} from "@mui/material";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import ReCAPTCHA from "react-google-recaptcha";
import ErrorMessages from "./ErrorMessages";
import axios from "axios";
import DialogIs from "./Dialog";
import SuccessMessage from "./SuccessMessage";
import baseRenderUrl from "../../assets/baseUrl";
// ReactHook:
import { useForm } from "react-hook-form";
import React, { useState, useEffect } from "react";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";

type FormValues = {
  firstName: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
  verifyPass: string;
  phoneNumber: number;
};

const SITE_KEY = "6Le6bSMnAAAAAFsg4MZvHcr9FTA5r82NKIsvPjGm";

// The component:
const RegisterForm = () => {
  const onCaptchaChange = () => {
    setCaptchaVerified(true);
  };
  const [passwordEye, setPasswordEye] = useState(false);
  const [passwordEyeVerify, setPasswordEyeVerify] = useState(false);
  const [captchaVerified, setCaptchaVerified] = useState(false);
  const [openPassHelp, setOpenPassHelp] = useState(false);
  const [fetchErrors, setFetchErrors] = useState(false);
  const [successFetch, setSuccessFetch] = useState(false);

  const form = useForm<FormValues>({ mode: "onChange" });
  const { register, handleSubmit, formState, watch, reset } = form;
  const password = watch("password");
  const { errors, isDirty, isValid, isSubmitSuccessful } = formState;
  const handleChangeEyePassword = () => {
    setPasswordEye(!passwordEye);
  };
  const handleChangeEyeVerify = () => {
    setPasswordEyeVerify(!passwordEyeVerify);
  };

  const onSubmit = (data: FormValues) => {
    // later, import to here the function from services that handle the axios:
    axios
      .post(`${baseRenderUrl}/auth/register`, data)
      .then((response) => {
        setFetchErrors(false);
        setSuccessFetch(true);
        setTimeout(() => {
          window.location.replace("https://bejewelled-fenglisu-523224.netlify.app/login");
        }, 2000);
      })
      .catch((error) => {
        setFetchErrors(true);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
      setTimeout(() => {
        setFetchErrors(false);
      }, 4000);
    }
  }, [isSubmitSuccessful, reset, fetchErrors]);

  let testArr = [];
  if (errors.password) {
    testArr.push(errors.password.message);
  } else {
    testArr = [];
  }

  // Rejex for password validation:
  const upperCaseRjx = /(?=.*?[A-Z])/;
  const lowerCaseRjx = /(?=.*?[a-z])/;
  const digitRjx = /(?=.*?[0-9])/;
  const min4Rjx = /.{4,}/;

  return (
    <Container sx={containerStyle} maxWidth="sm" component="main">
      {successFetch ? <SuccessMessage /> : <div hidden></div>}
      <Box sx={insideContainerStyle}>
        <Avatar sx={{ m: 0.5, bgcolor: "secondary.main" }}>
          <LockOutlinedIcon />
        </Avatar>

        <Typography sx={{ mb: -2 }} component="h1" variant="h5">
          Sign up
        </Typography>

        <Box
          component="form"
          noValidate
          sx={{ mt: 3 }}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="given-name"
                fullWidth
                label="First Name"
                type="text"
                {...register("firstName", {
                  required: "First Name Is Required",
                })}
                error={!!errors.firstName}
                helperText={errors.firstName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                autoComplete="family-name"
                type="text"
                {...register("lastName", { required: "Last Name Is Required" })}
                error={!!errors.lastName}
                helperText={errors.lastName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Email Address"
                autoComplete="email"
                type="email"
                {...register("email", {
                  required: "Email Is Required",
                  pattern: {
                    value:
                      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                    message: "Invalid Email format",
                  },
                  validate: {
                    emailAvailable: async (fieldValue) => {
                      while (
                        fieldValue.length >= 3 &&
                        fieldValue.includes("@")
                      ) {
                        const res = await fetch(
                          `${baseRenderUrl}/auth/checkIfExist/${fieldValue}`
                        );
                        const data = await res.json();
                        return data.length === 0 || "Email Already Exist";
                      }
                    },
                  },
                })}
                error={!!errors.email}
                helperText={errors.email?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="User Name"
                type="text"
                {...register("userName", {
                  required: "User Name Is Required",
                  validate: {
                    userAvailable: async (fieldValue) => {
                      while (fieldValue.length >= 4) {
                        const res = await fetch(
                          `${baseRenderUrl}/auth/checkIfExist/${fieldValue}`
                        );
                        const data = await res.json();
                        return data.length === 0 || "User Name Already Exist";
                      }
                    },
                    has6Characters: (value) =>
                      min4Rjx.test(value) || "Must have at least 4 Characters",
                  },
                })}
                error={!!errors.userName}
                helperText={errors.userName?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                type={passwordEye ? "text" : "password"}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="More Info">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={() => {
                            setOpenPassHelp(true);
                            setTimeout(() => {
                              setOpenPassHelp(false);
                            }, 1000);
                          }}
                        >
                          <HelpOutlineIcon />
                        </IconButton>
                      </Tooltip>
                      <Tooltip title="Show Password">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleChangeEyePassword}
                        >
                          {passwordEye ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
                autoComplete="new-password"
                {...register("password", {
                  required: "Password Is Required",
                  validate: {
                    hasUpperCase: (value) =>
                      upperCaseRjx.test(value) ||
                      "Password Must have at least 1 UpperCase",
                    hasLowerCase: (value) =>
                      lowerCaseRjx.test(value) ||
                      "Password Must have at least 1 LowerCase",
                    hasDigitCase: (value) =>
                      digitRjx.test(value) ||
                      "Password Must have at least 1 Digit",
                    has6Characters: (value) =>
                      min4Rjx.test(value) ||
                      "Password Must have at least 4 Characters",
                  },
                })}
                error={!!errors.password}
              />
              <DialogIs open={openPassHelp} />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Verify Password"
                type={passwordEyeVerify ? "text" : "password"}
                InputProps={{
                  // <-- This is where the toggle button is added.
                  endAdornment: (
                    <InputAdornment position="end">
                      <Tooltip title="More Info">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleChangeEyeVerify}
                        >
                          {passwordEyeVerify ? (
                            <VisibilityIcon />
                          ) : (
                            <VisibilityOffIcon />
                          )}
                        </IconButton>
                      </Tooltip>
                    </InputAdornment>
                  ),
                }}
                {...register("verifyPass", {
                  required: "Verify Password Is Required",
                  validate: (value) => {
                    return value === password || "The passwords do not match";
                  },
                })}
                error={!!errors.verifyPass}
                helperText={errors.verifyPass?.message}
              />
            </Grid>
            <Grid item xs={12} sm={6.89}>
              <TextField
                fullWidth
                label="Phone Number"
                type="tel"
                autoComplete="phone"
                {...register("phoneNumber", {
                  required: "Phone Number Is Required",
                })}
                error={!!errors.phoneNumber}
                helperText={errors.phoneNumber?.message}
              />
            </Grid>
            <Grid item xs={12} sm={4}>
              <ReCAPTCHA
                sitekey={SITE_KEY}
                onChange={onCaptchaChange}
                style={{ transform: "scale(0.75)", transformOrigin: "0 0" }}
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={!isDirty || !isValid || !captchaVerified}
            sx={{
              mt: 3,
              backgroundColor: "#CD5888",
              ":hover": { backgroundColor: "#FF2171" },
            }}
          >
            Sign Up
          </Button>
          <Button
            type="button"
            fullWidth
            onClick={() => reset()}
            variant="contained"
            sx={{
              mt: 1.5,
              mb: 2,
              backgroundColor: "#7895CB",
              ":hover": { backgroundColor: "#4A55A2" },
            }}
          >
            Reset Form
          </Button>

          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link to="/login">Already have an account? Sign in</Link>
            </Grid>
          </Grid>
        </Box>
        {fetchErrors ? (
          <ErrorMessages
            errors={"Internal Server Error, please try again later"}
          />
        ) : (
          <ErrorMessages errors={testArr} />
        )}
      </Box>
    </Container>
  );
};

export default RegisterForm;

// Styles here:
const containerStyle = {
  backgroundColor: "#fff",
  borderRadius: "10px",
  height: { md: "620px", sm: "620px", xs: "900px" },
  boxShadow: "-11px 6px 26px -14px rgba(0,0,0,0.52)",
};

const insideContainerStyle: React.CSSProperties = {
  marginTop: 1,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
};
