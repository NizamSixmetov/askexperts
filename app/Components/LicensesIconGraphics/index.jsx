import styles from "./style.module.css";

const LicensesIconGraphics = () => {
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        <div className={`${styles.left}`}>
          <h3>Icon & Graphics</h3>
        </div>
        <div className={`${styles.right}`}>
          <p>
            All graphical assets in this template are licensed for personal and
            commercial use. If you'd like to use a specific asset, please check
            the license below.
          </p>
          <p>
            The iconography used in this Template are licensed for free personal
            and commercial use. If you'd like to use any specific Icon, you can
            check the licenses and download the images for free on
            phosphoricons.
          </p>
          <h4>
            Phosphor Icon: <span>Licenses</span>
          </h4>
        </div>
      </div>
    </div>
  );
};

export default LicensesIconGraphics;
