import PageCap from "../Components/PageCap";
import styles from "./style.module.css";
import HomeContact from "../Components/HomeContact";
import CaseStudyFilter from "../Components/CaseStudyFilter";

export const metadata = {
  title: "Case Study",
  description: "Case Page",
  icons: {
    icon: "/metadataIcon/case.svg",
  },
};

const CaseStudy = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap text={"Case Studies"} h2Element={"Case Studies"} />
          </div>
        </div>
      </div>
      <div className="container">
        <div>
          <CaseStudyFilter />
        </div>
        <div className={`${styles.contactPadding}`}>
          <HomeContact />
        </div>
      </div>
    </div>
  );
};

export default CaseStudy;
