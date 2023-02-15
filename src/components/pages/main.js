import React from "react";
import Layout from "../layouts/Layout";
import { MultiPageForm } from "../forms/MultiPageForm";
// import styles from "../../styles/Main.module.scss";

export const Main = ({ pages }) => {
  return (
    <>
      <Layout>
        {/* <MultiPageForm pages={pages}>
      {({ current, next, previous, reset, goto }) => {
        return (
          <>
            {current === "info" ? (
              <>
                <div class>hello</div>
              </>
            ) : current === "success" ? (
              <></>
            ) : null}
          </>
        );
      }}
    </MultiPageForm> */}
        <div>hello</div>
      </Layout>
    </>
  );
};
