import styles from "./style.module.css";
import Image from "next/image";

const CaseStudySingleStoryboard = ({ data }) => {
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        <h3>Storyboard</h3>
        <p>{data.storyBoardDescription1}</p>
        <p>{data.storyBoardDescription2}</p>
        <div className={`${styles.imageDiv}`}>
          <Image fill loading="lazy" src={data.storyBoardImage} />
        </div>
      </div>
    </div>
  );
};

export default CaseStudySingleStoryboard;
