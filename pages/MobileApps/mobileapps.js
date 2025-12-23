import * as React from "react";
import styles from "./layout.module.css";
import MobileApps from "../../components/MobileApps";

export default function mobileApps(children) {
  return (
    <>
      <div className={styles.container}>
        <MobileApps />
        {children}
      </div>
    </>
  );
}
