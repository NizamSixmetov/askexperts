import styles from "./style.module.css";
import { IoIosCheckmarkCircleOutline } from "react-icons/io";

const AboutVision = () => {
  return (
    <div className={`container ${styles.paddingDiv}`}>
      <p className={`${styles.firstP}`}>OUR VISION</p>
      <div className={`${styles.flexDiv}`}>
        <div className={`${styles.leftDiv}`}>
          <div className={`${styles.h3Div}`}>
            <h3>Turn your ideas into reality.</h3>
          </div>
          <div className={`${styles.pDiv}`}>
            <p>
              Capitalize on low hanging fruit to identify a ballpark value added
              activity beta test. Override the digital divide with additional
              from DevOps.
            </p>
          </div>
          <div className={`${styles.flexDiv2}`}>
            <div className={`${styles.topVariant}`}>
              <i>
                <IoIosCheckmarkCircleOutline />
              </i>
              <p>
                Bring to the table win-win survival strategies to ensure
                proactive domination. At the end of the day.
              </p>
            </div>
            <div className={`${styles.bottomVariant}`}>
              <i>
                <IoIosCheckmarkCircleOutline />
              </i>
              <p>
                Capitalize on low hanging fruit to identify a ballpark value
                added activity to beta test override the digital.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.rightDiv}`}>
          <img
            className={`${styles.index1}`}
            src="/AboutUsImages/BackgroundImage.svg"
            alt="Image"
          />
          <div className={`${styles.index2}`}></div>
          <img
            className={`${styles.index3}`}
            src="/AboutUsImages/Photo1Photo.jpg"
            alt="Image"
          />
        </div>
      </div>
    </div>
  );
};

export default AboutVision;
