import React from "react";
import styles from "./style.module.css";
import PageCap from "../Components/PageCap";
import TeamList from "../Components/TeamList";

const Team = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap pElemnt={"Team"} h2Element={"The Consultors"} />
          </div>
        </div>
      </div>
      <div>
        <TeamList />
      </div>
    </div>
  );
};

export default Team;
