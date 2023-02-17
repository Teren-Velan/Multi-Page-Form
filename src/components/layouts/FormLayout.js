import React from "react";
import styles from "./styles/FormLayout.module.scss";

function FormLayout({ title, subtitle, children }) {
  return (
    <div className={styles.layout}>
      <div className={styles.title}>{title}</div>
      <div className={styles.subtitle}>{subtitle}</div>
      {children}
    </div>
  );
}

export default FormLayout;
