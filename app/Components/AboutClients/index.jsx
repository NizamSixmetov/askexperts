import Link from "next/link";
import styles from "./style.module.css";
import AboutClientData from "../AboutClientData";

const AboutClients = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className="container">
        <div className={`${styles.firstDiv}`}>
          <p className={`${styles.firstP}`}>GROWING WITH OUR CLIENTS</p>
          <div className={`${styles.flexDiv}`}>
            <div className={`${styles.leftDiv}`}>
              <h2>Our core values & principles</h2>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity beta test. Override the digital divide with
                additional from DevOps.
              </p>
            </div>
            <div className={`${styles.rightDiv}`}>
              <Link href={"/Pricing"} prefetch>Get in touch</Link>
            </div>
          </div>
          <div className={`${styles.dataDiv}`}>
            <AboutClientData />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutClients;
