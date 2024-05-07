import React from "react";
import styles from "./style.module.css";
import PageCap from "../Components/PageCap";
import AboutVision from "../Components/AboutVision";
import ProjectNumber from "../Components/ProjectNumber";
import AboutClients from "../Components/AboutClients";
import AboutHistory from "../Components/AboutHistory";
import AboutTeam from "../Components/AboutTeam";
import HomeBookNow from "../Components/HomeBookNow";

export const metadata = {
  title: "About",
  description: "About Page",
  icons: {
    icon: "/metadataIcon/about.svg",
  },
};

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
      <AboutClients />
      <AboutHistory />
      <AboutTeam />
      <div style={{ padding: "4rem 0" }}>
        <HomeBookNow />
      </div>
    </div>
  );
};

export default About;
