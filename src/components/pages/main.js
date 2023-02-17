import React from "react";
import Layout from "../layouts/Layout";
import FormLayout from "../layouts/FormLayout";
import { MultiPageForm } from "../forms/MultiPageForm";
import styles from "../../styles/Main.module.scss";

export const Main = ({ pages }) => {
  return (
    <>
      <Layout>
        <MultiPageForm pages={pages}>
          {({ current, next, previous, reset, goto }) => {
            return (
              <div className={styles.mainContainer}>
                {current === "info" ? (
                  <>
                    <FormLayout
                      title="Personal Info"
                      subtitle="Please provide your name , email and phone number"
                    ></FormLayout>
                  </>
                ) : current === "success" ? (
                  <></>
                ) : null}
              </div>
            );
          }}
        </MultiPageForm>
      </Layout>
    </>
  );
};
