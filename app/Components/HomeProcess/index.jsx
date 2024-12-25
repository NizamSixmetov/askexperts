import CountUpNum1 from "./CountUpNum1";
import CountUpNum2 from "./CountUpNum2";
import CountUpNum3 from "./CountUpNum3";
import styles from "./style.module.css";

const HomeProcess = () => {
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        <div className={`${styles.leftDiv}`}>
          <p className={`${styles.processP}`}>Proccess</p>
          <h2 className={`${styles.leftH2}`}>
            There have some easy steps to join with us!
          </h2>
          <p className={`${styles.leverageP}`}>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className={`${styles.item}`}>
            <span className={`${styles.span1}`}>
              <CountUpNum1 />
            </span>
            <div className={`${styles.inItem}`}>
              <p className={`${styles.oneP}`}>Setup Account</p>
              <p className={`${styles.twoP}`}>
                We understand the importance of approaching each work
                integrally.
              </p>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <span className={`${styles.span2}`}>
              <CountUpNum2 />
            </span>
            <div className={`${styles.inItem}`}>
              <p className={`${styles.oneP}`}>Consult with us</p>
              <p className={`${styles.twoP}`}>
                Increase social reach and productivity with our App Directory, a
                collection.
              </p>
            </div>
          </div>
          <div className={`${styles.item}`}>
            <span className={`${styles.span3}`}>
              <CountUpNum3 />
            </span>
            <div className={`${styles.inItem}`}>
              <p className={`${styles.oneP}`}>Payment & Boost</p>
              <p className={`${styles.twoP}`}>
                We encourage every team member to be a whole person. We have a
                flexible.
              </p>
            </div>
          </div>
        </div>
        <div className={`${styles.rightDiv}`}>
          <p className={`${styles.rightP}`}>Growing with our clients</p>
          <h2>30 Years of Experience</h2>
          <p className={`${styles.rightOneP}`}>
            Capitalize on low hanging fruit to identify a ballpark value added
            activity beta test. Override the digital divide with additional from
            DevOps.
          </p>
          <p className={`${styles.rightOneP}`}>
            Leverage agile frameworks to provide a robust synopsis for high
            level overviews. Iterative approaches to corporate strategy foster
            collaborative thinking to further the overall value proposition.
          </p>
          <div className={`${styles.flexFourDiv}`}>
            <div className={`${styles.rightOneFlex}`}>
              <div className={`${styles.cardFour}`}>
                <img src="/HomeProccess/one.svg" alt="image" />
                <p className={`${styles.fatP}`}>Consistency</p>
                <p className={`${styles.normalP}`}>
                  Podcasting operational change management workflow.
                </p>
              </div>
              <div className={`${styles.cardFour}`}>
                <img src="/HomeProccess/two.svg" alt="image" />
                <p className={`${styles.fatP}`}>Improvement</p>
                <p className={`${styles.normalP}`}>
                  Podcasting operational change management workflow.
                </p>
              </div>
            </div>
            <div className={`${styles.rightOneFlex}`}>
              <div className={`${styles.cardFour}`}>
                <img src="/HomeProccess/thee.svg" alt="image" />
                <p className={`${styles.fatP}`}>Branching</p>
                <p className={`${styles.normalP}`}>
                  Podcasting operational change management workflow.
                </p>
              </div>
              <div className={`${styles.cardFour}`}>
                <img src="/HomeProccess/four.svg" alt="image" />
                <p className={`${styles.fatP}`}>Company Growth</p>
                <p className={`${styles.normalP}`}>
                  Podcasting operational change management workflow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeProcess;
