import HomeContact from "../Components/HomeContact";
import PageCap from "../Components/PageCap";
import styles from "./style.module.css";

const Contacts = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.contentDiv}`}>
          <HomeContact />
        </div>
      </div>
    </div>
  );
};

export default Contacts;
