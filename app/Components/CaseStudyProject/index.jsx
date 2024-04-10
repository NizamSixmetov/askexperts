import styles from "./style.module.css";

const CaseStudyProject = ({ data }) => {
  return (
    <div className="container">
      <div className={`${styles.paddingDiv}`}>
        <h3>Project Overview</h3>
        <p>{data.overviewCap}</p>
        <div className={`${styles.ulDiv}`}>
          <ul>
            <li>{data.overviewDescription1}</li>
            <li>{data.overviewDescription2}</li>
            <li>{data.overviewDescription3}</li>
            <li>{data.overviewDescription4}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default CaseStudyProject;
