import React from "react";
import styles from "./style.module.css";
import PageCap from "../Components/PageCap";
import TeamList from "../Components/TeamList";
import TeamContact from "../Components/TeamContact";

export const metadata = {
  title: "Team",
  description: "Team page",
  icons: {
    icon: "/metadataIcon/team.svg",
  },
};

const Team = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap
              pElemnt={"Team"}
              h2Element={"The best consultants for you"}
            />
          </div>
        </div>
      </div>
      <div>
        <TeamList />
        <TeamContact />
      </div>
    </div>
  );
};

export default Team;
