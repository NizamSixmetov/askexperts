import styles from "./style.module.css";
import Link from "next/link";

const CaseStudyLivePreview = async ({ data }) => {
  return (
    <div className="container">
      <div className={`${styles.bgDiv}`}>
        <div className={`${styles.flexDiv}`}>
          <div className={`${styles.cardDiv}`}>
            <div className={`${styles.topFlex}`}>
              <div className={`${styles.left}`}>
                <h5>Case Name</h5>
                <p>{data.name}</p>
              </div>
              <div className={`${styles.center}`}>
                <h5>Category</h5>
                <p>{data.description}</p>
              </div>
            </div>
            <div className={`${styles.bottomFlex}`}>
              <div className={`${styles.right}`}>
                <h5>Date</h5>
                <p>{data.date}</p>
              </div>
              <a target="_blank" href={data.preview}>
                Live Preview
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyLivePreview;
