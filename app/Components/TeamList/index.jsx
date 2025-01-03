import Link from "next/link";
import styles from "./style.module.css";
import TeamMeetData from "../TeamMeetData";

const TeamList = () => {
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        <div className={`${styles.left}`}>
          <h3>Meet Our Great Team</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. enim ad
            minim veniam, quis nostrud exercitation.
          </p>
        </div>
        <div className={`${styles.right}`}>
          <Link href={"/Contacts"} prefetch={true}>Join our team</Link>
        </div>
      </div>
      <div className={`${styles.compDiv}`}>
        <TeamMeetData />
      </div>
    </div>
  );
};

export default TeamList;
