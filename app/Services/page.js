import PageCap from "../Components/PageCap";
import ServicesProcess from "../Components/ServicesProcess";
import styles from "./style.module.css";
import ServicesPricing from "../Components/ServicesPricing";
import HomeContact from "../Components/HomeContact";
import HomeServices from "../Components/HomeServices";

export const metadata = {
  title: "Services",
  description: "Services page",
  icons: {
    icon: "/metadataIcon/services.svg",
  },
};

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
      <ServicesPricing />
      <HomeContact />
    </div>
  );
};

export default services;
