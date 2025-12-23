import styles from "./layout.module.css";
import MainNavigation from "./MainNavigation";
import PropTypes from "prop-types";
import React from "react";

export default function Layout({ children }) {
  return (
    <div className={styles.container}>
      <MainNavigation />
      {children}
    </div>
  );
}
Layout.propTypes = {
  children: PropTypes.node.isRequired,
};
