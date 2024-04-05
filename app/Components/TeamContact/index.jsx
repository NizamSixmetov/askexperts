import Link from "next/link";
import styles from "./style.module.css";

const TeamContact = () => {
  return (
    <div className="container">
      <div className={`${styles.paddingDiv}`}>
        <div className={`${styles.flex}`}>
          <div className={`${styles.left}`}>
            <p className={`${styles.topP}`}>Contact</p>
            <h4>Ready To Talk?</h4>
            <p className={`${styles.bottomP}`}>
              Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
              Massa placerat duis ultricies lacus sed turpis. Pellentesque
              pellentesque habitant morbi tristique.
            </p>
            <form className={`${styles.form}`}>
              <input type="email" placeholder="your email address" />
              <button>Send Message</button>
            </form>
          </div>
          <div className={`${styles.right}`}>
            <img
              className={`${styles.relIMage}`}
              src="/TeamContactImage/TeamContactBg.svg"
              alt="Image"
            />
            <img
              className={`${styles.posImage}`}
              src="/TeamContactImage/Pattern.svg"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContact;
