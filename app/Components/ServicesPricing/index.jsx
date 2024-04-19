import ServicesPricingData from "../ServicesPricingData";
import styles from "./style.module.css";
const ServicesPricing = () => {
  return (
    <div className={`${styles.flexDiv}`}>
      <p className={`${styles.pricing}`}>Pricing</p>
      <h3>Our Pricing Plan</h3>
      <ServicesPricingData />
    </div>
  );
};

export default ServicesPricing;
