import { Card } from "../components/ui/card";
import Link from "next/link";
// import { useState, useContext } from "react";
import Box from "@mui/material/Box";
import Checkbox from "@mui/material/Checkbox";
import { Container } from "@mui/material";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import IconButton from "@mui/material/IconButton";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import OutlinedInput from "@mui/material/OutlinedInput";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import TextField from "@mui/material/TextField";
import BottomPage from "./BottomHalf";
import classes from "./SignIn.module.css";
//import DataContext from "../store/data-store.js";
import React from "react";

function SignIn() {
  //const dataCtx = useContext(DataContext);
  //let noOfItems = dataCtx.getNoItems();

  const [showPassword, setShowPassword] = React.useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <>
      <div className={classes.signinTitle}>
        <div className={classes.signinTitleInner}>
          <h1 className={classes.signinHeader}>Sign in or create an account</h1>
        </div>
      </div>
      <Container>
        <div className={classes.mainDiv}>
          <div className={classes.signinForm}>
            <div className={classes.signinFormOutline}>
              <div className={classes.signinFormBorder}>
                <form method="post" className={classes.signinFormInner}>
                  <p className={classes.signinLine}>
                    *indicates required field
                  </p>
                  <div className={classes.formTextFieldOutline}>
                    <Box
                      sx={{
                        width: 500,
                        maxWidth: "100%",
                      }}
                    >
                      <TextField
                        id="standard-basic"
                        fullWidth
                        label="*Username or Email Address"
                        normal
                        color="success"
                      />
                    </Box>
                  </div>
                  <div className={classes.formTextFieldOutline}>
                    <FormControl
                      sx={{
                        width: 435,
                        maxWidth: "100%",
                      }}
                      variant="outlined"
                      color="success"
                    >
                      <InputLabel htmlFor="outlined-adornment-password">
                        * Password
                      </InputLabel>
                      <OutlinedInput
                        id="outlined-adornment-password"
                        type={showPassword ? "text" : "password"}
                        endAdornment={
                          <InputAdornment position="end">
                            <IconButton
                              aria-label="toggle password visibility"
                              onClick={handleClickShowPassword}
                              edge="end"
                            >
                              {showPassword ? (
                                <VisibilityOff />
                              ) : (
                                <Visibility />
                              )}
                            </IconButton>
                          </InputAdornment>
                        }
                        label="*Password"
                      />
                    </FormControl>
                  </div>
                  <div className={classes.signinFlexOption}>
                    <FormGroup>
                      <FormControlLabel
                        control={
                          <Checkbox
                            sx={{ "& .MuiSvgIcon-root": { fontSize: 22 } }}
                            color="success"
                          />
                        }
                        label="Keep me signed in."
                      />
                    </FormGroup>
                    <div className={classes.signinFlexItemThree}>
                      <a className={classes.signinFlexButton}>Details</a>
                    </div>
                  </div>
                  <div className={classes.signinResetLinks}>
                    <a className={classes.signinLink} href="">
                      Forgot your username?
                    </a>
                    <br></br>
                    <a
                      className={classes.signinLinkTwo}
                      href="https://www.starbucks.com/account/forgot-password"
                    >
                      Forgot your password?
                    </a>
                  </div>
                  <div></div>
                  <div className={classes.signinButtonSpacing}>
                    <div className={classes.signinOutline}>
                      <div className={classes.signinFlex}>
                        <div className={classes.signinButtonBorder}>
                          <button className={classes.signinButton}>
                            Sign in
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
          <Card
            bordered
            shadow={false}
            css={{
              mw: "500px",
              backgroundColor: "#d4e9e2",
            }}
            className={classes.signinRewardsOutline}
          >
            <h2 className={classes.signinRewardsHeading}>
              JOIN STARBUCKS® REWARDS
            </h2>
            <div className={classes.signinRewardsLine}>
              Join Starbucks® Rewards to earn free food and drinks, get free
              refills, pay and order with your phone, and more.
            </div>
            <div className={classes.signinJoinNowSpacing}>
              <Link href="/JoinNow">
                <button type="button" className={classes.signinJoinNowButton}>
                  Join now
                </button>
              </Link>
            </div>
          </Card>
          <div className={classes.signinBottomSpacing}></div>
        </div>
      </Container>
      <div className={classes.signinBottomSpacing}>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
      </div>
      <BottomPage />
    </>
  );
}

export default SignIn;

/*
  <label className={classes.signinOptionCheckbox}>
    <input className={classes.signinCheckbox} />
      <span className={classes.signinFlexContainer}>
        <span className={classes.signinFlexItemOne}>
          <span className={classes.signinFlexItemTick}>
            <SvgIcon className={classes.signinFlexItemIcon}>
              <path d="M4.29 12.104c-.277-.308-.75-.332-1.06-.054-.306.278-.33.752-.053 1.06l4.485 4.963c.29.322.795.33 1.096.017L20.414 6.003c.288-.298.28-.773-.02-1.06-.297-.288-.772-.28-1.06.02L8.237 16.47 4.29 12.105z"></path>
            </SvgIcon>
          </span>
        </span>
        <span className={classes.signinFlexItemTwo}>
          Keep me signed in.
        </span>
      </span>
    </label>
      <div className={classes.signinFlexItemThree}>
        <a className={classes.signinFlexButton}>Details</a>
    </div>
    */
