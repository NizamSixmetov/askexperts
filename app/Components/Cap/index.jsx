import styles from "./style.module.css";
import { SlNotebook } from "react-icons/sl";



const Cap = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className="container">
        <div className="position">
          <div className={`${styles.flexDiv}`}>
            <div className={`${styles.top}`}>
              <h2>Your small business growth advisors</h2>
            </div>
            <div className={`${styles.center}`}>
              <p>Get help from Alex Moore, a
                professional business coach
                with advanced experience on
                growth and business scaling.
              </p>
            </div>
            <div className={`${styles.bottom}`}>
              <button className={`${styles.leftButton}`}>Our Services</button>
              <button className={`${styles.rightButton}`} >
                <i><SlNotebook /></i>
                <p>Book a Meeting</p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cap