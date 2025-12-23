
import BottomPage from "./BottomHalf";
import { Card } from "../components/ui/card";
import classes from "./JoinNow.module.css";
import React from "react";
import Link from "next/link";
import SignupForm from "./SignupForm";

function JoinNow() {
 

  // function Dropdown() {
  //   if (typeof document !== "undefined") {
  //     const elements = document.getElementsByClassName("formDropdownSection");
  //     Array.from(elements).forEach((el) => {
  //       el.style.visibility = "visible";
  //     });
  //   }
  // }
  
    return (
      <>
        <Card>
          <div className={classes.mainDiv}>
            <div className={classes.iconDiv}>
              <Link href="http://localhost:3001/">
                <img
                  src="/avatars/logo.svg"
                  alt="Avatar"
                  className={classes.avatar}
                />
              </Link>
            </div>
          </div>
        </Card>
        <div className={classes.joinnowTitle}>
          <div className={classes.joinnowTitleInner}>
            <div className={classes.joinnowHeader}>
              <h1 className={classes.joinnowHeader}> Create an account</h1>
              <h2 className={classes.joinnowHeader}>Starbucks® Rewards</h2>
              <p className={classes.joinnowHeader}>
                Join Starbucks Rewards to earn Stars for free food and drinks,
                any way you pay. Get access to mobile ordering, a birthday
                Reward, and
                <span className={classes.joinnowHeader}> more</span>
                <a href="/Rewards" className={classes.joinnowHeader}>
                  more
                </a>
                .
              </p>
            </div>
          </div>
        </div>

        <SignupForm/>
        <BottomPage />
      </>
    );
  }

  export default JoinNow;

  /*
  
      <span className={classes.joinnowCheckboxFlex}>
        <span className={classes.joinnowcheckboxFlexItemOne}>
          <span className={classes.joinnowFlexItemTick}>
            <SvgIcon className={classes.signinFlexItemIcon}>
              <path d="M4.29 12.104c-.277-.308-.75-.332-1.06-.054-.306.278-.33.752-.053 1.06l4.485 4.963c.29.322.795.33 1.096.017L20.414 6.003c.288-.298.28-.773-.02-1.06-.297-.288-.772-.28-1.06.02L8.237 16.47 4.29 12.105z"></path>
            </SvgIcon>
          </span>
        </span>
        <span className={classes.joinnowcheckboxFlexItemTwo}>
          Yes, I’d like email from Starbucks
          <span className={classes.joinnowCheckboxLine}>
            Know about initiatives, announcements and product
            offers.
          </span>
        </span>
      </span>
  
  
          <label className={classes.joinnowcheckboxFlexItemTwo}>
            Yes, I’d like email from Starbucks
            <Box
              sx={{ textAlign: "centre" }}
              className={classes.joinnowCheckboxLine}>
              Know about initiatives, announcements and product
              offers.
            </Box>
          </label>
  */

