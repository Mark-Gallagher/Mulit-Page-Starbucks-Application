import styles from "./layout.module.css";
import Rewards from "../../components/Rewards";
import React from "react";

export default function RewardsPage(children) {
  return (
    <>
      <div className={styles.container}>
        <Rewards />
        {children}
      </div>
    </>
  );
}
