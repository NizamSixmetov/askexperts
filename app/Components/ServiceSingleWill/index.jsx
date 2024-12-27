import styles from "./style.module.css";
import { FaRegCheckCircle } from "react-icons/fa";

const ServiceSingleWill = () => {
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        <div className={`${styles.left}`}>
          <img
            className={`${styles.bgImage}`}
            src="/ServiceSingleWillImage/BackgroundImageWill.svg"
            alt="img"
          />
          <img
            className={`${styles.bodyImage}`}
            src="/ServiceSingleWillImage/PhotoWill.jpg"
            alt="Image"
          />
          <div className={`${styles.squareDiv}`}></div>
        </div>
        <div className={`${styles.right}`}>
          <p className={`${styles.cap}`}>WE'LL WORK WITH YOU</p>
          <h3>What To Expect</h3>
          <p className={`${styles.description}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className={`${styles.iconsAndText}`}>
            <div className={`${styles.icon}`}>
              <i>
                <FaRegCheckCircle />
              </i>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day.
              </p>
            </div>
            <div className={`${styles.icon}`}>
              <i>
                <FaRegCheckCircle />
              </i>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test override the digital.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingleWill;
