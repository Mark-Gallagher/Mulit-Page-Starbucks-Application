import React from "react";
import classes from "./MainNavigation.module.css";
import Link from "next/link";

function SignUpButton() {

  return (
    <Link className={classes.linkdivButtonTwo} href="/JoinNow">
      Join now
    </Link>
  );
}

export default SignUpButton;
