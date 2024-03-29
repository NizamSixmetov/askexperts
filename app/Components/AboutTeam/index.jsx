import AboutTeamData from "../AboutTeamData";
import styles from "./style.module.css";

const AboutTeam = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className="container">
        <div className={`${styles.flexDiv}`}>
          <p className={`${styles.topP}`}>OUR TEAM</p>
          <h3>We champion the bold to achieve the extraordinary</h3>
          <p className={`${styles.bottomP}`}>
            Ippsum is the result of synergy between our teams and our customers.
            Our company culture is focused on excellent productivity, customer
            satisfaction, respect for team.
          </p>
          <div className={`${styles.teamDataDiv}`}>
            <AboutTeamData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutTeam;
