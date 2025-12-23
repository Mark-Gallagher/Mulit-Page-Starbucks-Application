import * as React from "react";
import styles from "./layout.module.css";
import JoinNow from "@/components/JoinNow";

export default function JoinNowPage(children) {
    return (
    <>
      <div className={styles.container}>
        <JoinNow />
        {children}
      </div>
    </>
  );
}

