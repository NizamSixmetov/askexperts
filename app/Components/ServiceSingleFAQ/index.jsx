import ServiceSingleFAQAccordion from "../ServiceSingleFAQAccordion";
import styles from "./style.module.css";

const ServiceSingleFAQ = () => {
  return (
    <div style={{padding:"4rem 0"}}>
      <div className={`${styles.cardDiv}`}>
        <div className={`${styles.flex}`}>
          <div className={`${styles.top}`}>
            <p>FAQ</p>
          </div>
          <div className={`${styles.center}`}>
            <h3>Customer Questions</h3>
          </div>
          <div className={`${styles.bottom}`}>
            <ServiceSingleFAQAccordion />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleFAQ;
