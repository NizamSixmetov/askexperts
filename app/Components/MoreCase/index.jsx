import MoreCaseData from "../MoreCaseData";
import styles from "./style.module.css";
import Link from "next/link";

const MoreCase = () => {
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        <div className={`${styles.top}`}>
          <h3>More case studies</h3>
        </div>
        <div className={`${styles.center}`}>
          <MoreCaseData />
        </div>
        <div className={`${styles.bottom}`}>
          <Link href={"/"}>Browse all case studies</Link>
        </div>
      </div>
    </div>
  );
};

export default MoreCase;
