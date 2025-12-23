import styles from "./layout.module.css";
import SignIn from "../SignIn";
import * as React from "react";

export default function SignInPage(children) {
  return (
    <>
      <div className={styles.container}>
        <SignIn />
        {children}
      </div>
    </>
  );
}
