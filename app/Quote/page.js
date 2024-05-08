import QuoteSingle from "../Components/QuoteSingle";
import styles from "./style.module.css";

export const metadata = {
  title: "Quote",
  description: "Quote page",
  icons: {
    icon: "/metadataIcon/quote.svg",
  },
};

const Quote = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}></div>
      <div className="container">
        <div className={`${styles.paddingDiv}`}>
          <QuoteSingle />
        </div>
      </div>
    </div>
  );
};

export default Quote;
