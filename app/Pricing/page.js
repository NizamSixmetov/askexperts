import PageCap from "../Components/PageCap";
import ServicesPricingData from "../Components/ServicesPricingData";
import styles from "./style.module.css";

export const metadata = {
  title: "Pricing",
  description: "Pricing page",
  icons: {
    icon: "/metadataIcon/price.svg",
  },
};

const Pricing = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap
              pElemnt={"Prices"}
              h2Element={"Choose a plan that suits you"}
            />
          </div>
        </div>
      </div>
      <div className={`${styles.bg}`}>
        <ServicesPricingData />
      </div>
    </div>
  );
};

export default Pricing;
