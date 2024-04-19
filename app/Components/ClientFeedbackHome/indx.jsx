import ClientCouruselHome from "../ClientCouruselHome";
import styles from "./style.module.css";

function ClientFeedbackHome() {
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        <p className={`${styles.firstP}`}>CLIENT FEEDBACK</p>
        <h3>
          “Lorem ipsum dolor sit amet, consectetur{" "}
          <span className={`${styles.span}`}>
            adipiscing elit, sed do eiusmod
          </span>{" "}
          tempor incididunt ut labore et dolore”
        </h3>
        <div className={`${styles.componentDiv}`}>
          <ClientCouruselHome />
        </div>
      </div>
    </div>
  );
}

export default ClientFeedbackHome;
