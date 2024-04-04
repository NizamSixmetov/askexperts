import styles from "./style.module.css";

const PageCap = ({ pElemnt, h2Element }) => {
  return (
    <div className={`${styles.bgDiv}`}>
      <p>{pElemnt}</p>
      <h2>{h2Element}</h2>
    </div>
  );
};

export default PageCap;
