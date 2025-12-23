import Link from "next/link";
import classes from "./MainNavigation.module.css";
import { Card } from "@/components/ui/card";
import PlaceIcon from "@mui/icons-material/Place";
import React from "react";
import PropTypes from "prop-types";
import SignInButton from "./SignInButton";
import SignUpButton from "./SignUpButton";

function MainNavigation()  {

  return (
    // bordered shadow={false} hoverable css={{ mw: "100%" }}
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
          <div className={classes.link_headerLeft}>
            <div className={classes.link_headerDiv}>
              <Link href="/Menu" className={classes.linkdiv}>
                MENU
              </Link>
            </div>
            <div className={classes.link_headerDiv}>
              <Link href="/Rewards" className={classes.linkdiv}>
                REWARDS
              </Link>
            </div>
            <div className={classes.link_headerDiv}>
              <Link href="/GiftCards" className={classes.linkdiv}>
                GIFT CARDS
              </Link>
            </div>
          </div>
          <div className={classes.link_headerRight}>
            <div className={classes.linkDivStore}>
              <Link href="https://www.starbucks.com/store-locator?map=53.272992,-6.449843,6z">
                <PlaceIcon fontSize="small" />
                Find a store
              </Link>
            </div>
            <div className={classes.linkDivSignIn}>
              <Link href="/SignIn">
                <SignInButton />
              </Link>
            </div>
            <div className={classes.linkDivJoinNow}>
              <Link href="/JoinNow">
                <SignUpButton />
              </Link>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
  // React.createElement('div', { className: 'linkdivTwo' }, React.createElement('a', { classname: 'linkDiv' }, 'Rewards'));
}

MainNavigation.propTypes = {
  menuPage: PropTypes.object // or PropTypes.shape({...}) if you want to be more specific
};
export default MainNavigation;
