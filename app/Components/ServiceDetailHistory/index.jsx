import styles from "./style.module.css";

const ServiceDetailHistory = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className="container">
        <div className={`${styles.flex}`}>
          <div className={`${styles.top}`}>
            <p>Our History</p>
          </div>
          <div className={`${styles.center}`}>
            <h3>Strategy for Every Stage in the Client's Journey</h3>
          </div>
          <div className={`${styles.bottom}`}>
            <iframe
              width="750"
              height="300"
              src="https://www.youtube-nocookie.com/embed/QxpfRN5lfHg?si=6377txUGQy82aS3x"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <img
              src="/ServiceDetailHistoryImage/ServiceDetailHistoryBg.svg"
              alt="image"
            />
            <div className={`${styles.topFrame}`}></div>
            <div className={`${styles.bottomFrame}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailHistory;
