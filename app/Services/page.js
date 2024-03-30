import HomeServices from "../Components/HomeServices";
import PageCap from "../Components/PageCap";
import ServicesProcess from "../Components/ServicesProcess";
import styles from "./style.module.css";

const services = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap
              pElemnt={"Services"}
              h2Element={"Creative Services For Boost Your Business Growth"}
            />
          </div>
        </div>
      </div>
      <HomeServices />
      <ServicesProcess />
    </div>
  );
};

export default services;
