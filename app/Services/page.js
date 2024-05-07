import PageCap from "../Components/PageCap";
import ServicesProcess from "../Components/ServicesProcess";
import styles from "./style.module.css";
import ServicesPricing from "../Components/ServicesPricing";
import HomeContact from "../Components/HomeContact";
import HomeServices from "../Components/HomeServices";
import { Cabin, Roboto } from "next/font/google";

// const cabin = Roboto({
//   subsets: ["latin"],
//   // weight: ["400", "500", "600", "700"],
//   // weight: [],
//   weight:['100', '300', '400', '500', '700' , '900']
// });

export const metadata = {
  title: "Services",
  description: "Services page",
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
