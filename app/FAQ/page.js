import PageCap from "../Components/PageCap";
import ServiceSingleFAQ from "../Components/ServiceSingleFAQ";
import styles from "./style.module.css";

const FAQ = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <ServiceSingleFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
