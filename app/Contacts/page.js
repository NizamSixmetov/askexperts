import HomeContact from "../Components/HomeContact";
import styles from "./style.module.css";

export const metadata = {
  title: "Contacts",
  description: "Contacts Page",
  icons: {
    icon: "/metadataIcon/contact.svg",
  },
};

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
