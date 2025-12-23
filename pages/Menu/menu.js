import React from "react";
import styles from "./layout.module.css";
import Menu from "../../components/Menu";

export default function MenuPage(children) {
  return (
    <>
      <div className={styles.container}>
        <Menu />
        {children}
      </div>
    </>
  );
}
