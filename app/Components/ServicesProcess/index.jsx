import styles from "./style.module.css";
import { FaWallet } from "react-icons/fa";
import { IoSettingsSharp } from "react-icons/io5";
import { IoTrendingUpOutline } from "react-icons/io5";

const ServicesProcess = () => {
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        <div className={`${styles.left}`}>
          <img
            className={`${styles.centerImage}`}
            src="/ServicesProcessImage/centerImage.jpg"
            alt="image"
          />
          <img
            className={`${styles.bottomImage}`}
            src="/ServicesProcessImage/bottomImage.svg"
            alt="image"
          />
          <div className={`${styles.posDiv}`}></div>
        </div>
        <div className={`${styles.right}`}>
          <p>Process</p>
          <h2>Our Consuting Service Development</h2>
          <div className={`${styles.flex2}`}>
            <div className={`${styles.left2}`}>
              <i>
                <FaWallet />
              </i>
            </div>
            <div className={`${styles.right2}`}>
              <h6>Banking and Finance</h6>
              <p>
                Professionally fashion wireless leadership rather than
                prospective experiences my cardinate clicks-and-mortar testing
                whereas.
              </p>
            </div>
          </div>
          <div className={`${styles.flex2}`}>
            <div className={`${styles.left2}`}>
              <i>
                <IoSettingsSharp />
              </i>
            </div>
            <div className={`${styles.right2}`}>
              <h6>Banking and Finance</h6>
              <p>
                Professionally fashion wireless leadership rather than
                prospective experiences my cardinate clicks-and-mortar testing
                whereas.
              </p>
            </div>
          </div>
          <div className={`${styles.flex2}`}>
            <div className={`${styles.left2}`}>
              <i>
                <IoTrendingUpOutline />
              </i>
            </div>
            <div className={`${styles.right2}`}>
              <h6>Banking and Finance</h6>
              <p>
                Professionally fashion wireless leadership rather than
                prospective experiences my cardinate clicks-and-mortar testing
                whereas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServicesProcess;
