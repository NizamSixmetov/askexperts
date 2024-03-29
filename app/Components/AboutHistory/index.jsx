import styles from "./style.module.css";

const AboutHistory = () => {
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        <p className={`${styles.topP}`}>Our History</p>
        <h3>Better Website Means A User Experience</h3>
        <p className={`${styles.bottomP}`}>
          Ippsum is the result of synergy between our teams and our customers.
          Our company culture is focused on excellent productivity, customer
          satisfaction, respect for team and individual achievements.
        </p>
        <div className={`${styles.mediaDiv}`}>
          <iframe
            width="650"
            height="250"
            src="https://www.youtube.com/embed/QxpfRN5lfHg?si=C2u8Cy7HNCdWtecN"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
          <img src="/AboutHistoryImage/rightBg.svg" alt="image" />
          <div className={`${styles.mediaCube}`}></div>
        </div>
      </div>
    </div>
  );
};

export default AboutHistory;