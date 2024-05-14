import styles from "./style.module.css";

const PageCap = ({ text, h2Element }) => {
  return (
    <div className={`${styles.bgDiv}`}>
      <p>{text}</p>
      <h2>{h2Element}</h2>
    </div>
  );
};

export default PageCap;
