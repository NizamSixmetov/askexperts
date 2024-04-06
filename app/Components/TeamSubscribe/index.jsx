import styles from "./style.module.css";

const TeamSubscribe = () => {
  return (
    <div className="container">
      <div className={`${styles.paddingDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className={`${styles.flex}`}>
            <div className={`${styles.left}`}>
              <h4>Subscribe Our Newsletter</h4>
              <p>Build stronger Customer Relationships with Consultalk</p>
            </div>
            <div className={`${styles.right}`}>
              <input type="email" placeholder="your email address" />
              <button>Subscribe</button>
              <img src="/TeamSubscribeImage/teamSubscribeBg.svg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSubscribe;
