import ServiceSingleFAQ from "../Components/ServiceSingleFAQ";
import styles from "./style.module.css";

export const metadata = {
  title: "FAQ",
  description: "FAQ page",
  icons: {
    icon: "/metadataIcon/faq.svg",
  },
};

const FAQ = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <ServiceSingleFAQ />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
