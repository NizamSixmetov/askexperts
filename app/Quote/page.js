import PageCap from "../Components/PageCap";
import QuoteSingle from "../Components/QuoteSingle";
import styles from "./style.module.css";

const Quote = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}></div>
      <div className="container">
        <div className={`${styles.paddingDiv}`}>
          <QuoteSingle />
        </div>
      </div>
    </div>
  );
};

export default Quote;
