import styles from "./style.module.css";

const CaseStudyProjectResult = ({ data }) => {
  return (
    <div className="container">
      <div className={`${styles.flexDIv}`}>
        <h3>Project result</h3>
        <p>{data.resultDescription1}</p>
        <p>{data.resultDescription2}</p>
      </div>
    </div>
  );
};

export default CaseStudyProjectResult;
