import Link from "next/link";
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
              <p>
                Get help from Alex Moore, a professional business coach with
                advanced experience on growth and business scaling.
              </p>
            </div>
            <div className={`${styles.bottom}`}>
              <Link href={"/Services"} prefetch className={`${styles.leftButton}`}>
                Our Services
              </Link>
              <Link href={"/Contact"} prefetch className={`${styles.rightButton}`}>
                <i>
                  <SlNotebook />
                </i>
                <p>Book a Meeting</p>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cap;
