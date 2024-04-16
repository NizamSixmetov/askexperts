import styles from "./style.module.css";

const LicensesFont = () => {
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        <div className={`${styles.left}`}>
          <h3>Font</h3>
        </div>
        <div className={`${styles.right}`}>
          <p>
            Consultalk template uses free licensed Google Fonts. please check
            Cabin and Lato
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicensesFont;
