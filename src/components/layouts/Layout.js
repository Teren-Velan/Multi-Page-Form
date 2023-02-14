import React from "react";
import styles from "./Layout.module.scss";

function Layout() {
  return (
    <div className={styles.layout}>
      <div className={styles.bgImage}></div>
      <div className={styles.formContainer}>
        <div className={styles.layoutLeft}>
          <div className={styles.layoutLeftImg}></div>
        </div>
        <div className={styles.layoutRight}></div>
      </div>
    </div>
  );
}

export default Layout;
