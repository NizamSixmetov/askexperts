import LicensesFont from "../Components/LicensesFont";
import LicensesIconGraphics from "../Components/LicensesIconGraphics";
import LicensesPhotography from "../Components/LicensesPhotography";
import PageCap from "../Components/PageCap";
import TeamSubscribe from "../Components/TeamSubscribe";
import styles from "./style.module.css";

export const metadata = {
  title: "Licenses",
  description: "Licenses page",
  icons: {
    icon: "/metadataIcon/Licenses.svg",
  },
};

const Licenses = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap text={"Licenses"} h2Element={"All asset's Licenses"} />
          </div>
        </div>
      </div>
      <LicensesIconGraphics />
      <LicensesPhotography />
      <LicensesFont />
      <TeamSubscribe />
    </div>
  );
};

export default Licenses;
