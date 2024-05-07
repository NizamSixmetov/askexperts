import React from "react";
import PageCap from "../Components/PageCap";
import styles from "./style.module.css";
import ContactLetsTalk from "../Components/ContactLetsTalk";
import TeamSubscribe from "../Components/TeamSubscribe";
import HomeContact from "../Components/HomeContact";

export const metadata = {
  title: "Contact",
  description: "Contact page",
};

const Contact = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap
              pElemnt={"CONTACT US"}
              h2Element={"Feel Free To Reach Us"}
            />
          </div>
        </div>
      </div>
      <ContactLetsTalk />
      <TeamSubscribe />
      <HomeContact />
    </div>
  );
};

export default Contact;
