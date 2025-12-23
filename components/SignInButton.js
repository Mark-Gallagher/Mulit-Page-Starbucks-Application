import React from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";

function SignInButton() {
  return (
    <Link className={classes.linkdivButtonOne} href="/SignIn">
      Sign in
    </Link>
  );
}

export default SignInButton;
