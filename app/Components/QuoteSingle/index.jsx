import styles from "./style.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";

const QuoteSingle = () => {
  return (
    <div>
      <div className={`${styles.quoteDiv}`}>
        <i>
          <BsChatSquareQuoteFill />
        </i>
        <p>
          “The job market of the future will consist of those jobs that robots
          cannot perform. Our blue-collar work is pattern recognition, making
          sense of what you see. Gardeners will still have jobs because every
          garden is different.”
        </p>
        <img src="/BlogSinglePageImage/PatternSingleBlog.svg" alt="posImage" />
        {/* <div className={`${styles.cubeDiv}`}></div> */}
      </div>
    </div>
  );
};

export default QuoteSingle;
