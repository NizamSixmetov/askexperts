import styles from './style.module.css';
import { FaStar } from "react-icons/fa";
import { FaSmile } from "react-icons/fa";


const HomeAbout = () => {
  return (
    <div className={`container ${styles.firstDiv}`}>
      <div className={`${styles.flexDiv}`}>
        <div className={`${styles.left}`}>
          <p className={`${styles.one}`}>About Us</p>
          <h1>About our Consuting Agency Team</h1>
          <p className={`${styles.twoP}`}>We create experiences and build
            products that make business grow
          </p>
          <p className={`${styles.thee}`}>Get help from Alex Moore,
            a professional business coach
            with advanced experience on
            growth and business scaling.
          </p>
          <div className={`${styles.topLine}`}></div>
          <div className={`${styles.flexDiv2}`}>
            <div className={`${styles.line}`}>
              <div className={`${styles.leftDiv}`}>
                <div className={`${styles.starDiv}`}>
                  <FaStar style={{ color: "#FFCC4A", fontSize: "20px" }} />
                  <p>400 +</p>
                </div>
                <p>Business Services</p>
              </div>
              <div className={`${styles.rightDiv}`}></div>
            </div>
            <div className={`${styles.centerLine}`}></div>
            <div className={`${styles.line}`}>
              <div className={`${styles.leftDiv}`}>
                <div className={`${styles.starDiv}`}>
                  <FaSmile style={{ color: "#4EAF4E", fontSize: "20px" }} />
                  <p>400 +</p>
                </div>
                <p>Business Services</p>
              </div>
              <div className={`${styles.rightDiv}`}></div>
            </div>
          </div>
          <div className={`${styles.bottomLine}`}></div>
        </div>
        <div className={`${styles.right}`}>
          <div className={`${styles.absoluteDiv}`}>
            <img className={`${styles.index1}`} src="/HomeAbout/Pattern.svg" alt="Image" />
            <img className={`${styles.index2}`} src="/HomeAbout/Photo.svg" alt="Image" />
            <img className={`${styles.index3}`} src="/HomeAbout/content.svg" alt="Image" />
          </div>
        </div>
      </div>
    </div >
  )
}

export default HomeAbout