import React from "react";
import styles from "./style.module.css";
import PageCap from "../Components/PageCap";
import AboutVision from "../Components/AboutVision";
import ProjectNumber from "../Components/ProjectNumber";

const About = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap
              pElemnt={"Services"}
              h2Element={"Creative Services For Boost Your Business Growth"}
            />
          </div>
        </div>
      </div>
      <AboutVision />
      <ProjectNumber />
    </div>
  );
};

export default About;
