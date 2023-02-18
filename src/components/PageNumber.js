import React from "react";
import styles from "./styles/PageNumber.module.scss";

export const PageNumber = ({ pageNumber, currentPage }) => {
  console.log({ currentPage });
  return (
    <>
      <div className={styles.pageNumberContainer}>
        <div className={styles.pageNumberIndicator}>{pageNumber}</div>
      </div>
    </>
  );
};
