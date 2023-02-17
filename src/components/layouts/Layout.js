import React from "react";
import styles from "./styles/Layout.module.scss";

function Layout({ children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.bgImage}></div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
}

export default Layout;
