import React from "react";
import styles from "./styles/Layout.module.scss";
import { PageNumber } from "../PageNumber";

function Layout({ pages, currentPage, children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.bgImage}>
        <div className={styles.pageNumber}>
          <PageNumber pageNumber="1" currentPage={currentPage} />
          <PageNumber pageNumber="2" />
          <PageNumber pageNumber="3" />
          <PageNumber pageNumber="4" />
        </div>
      </div>
      <div className={styles.formContainer}>{children}</div>
    </div>
  );
}

export default Layout;
