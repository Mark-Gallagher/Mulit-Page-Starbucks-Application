import React from "react";
import styles from "./layout.module.css";
import GiftCards from "@/components/GiftCards";

export default function GiftCardsPage(children) {
  return (
    <>
      <div className={styles.container}>
        <GiftCards/>
        {children}
      </div>
    </>
  );
}
