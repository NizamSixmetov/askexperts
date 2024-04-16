import styles from "./style.module.css";
import Image from "next/image";
import { FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocationOutline } from "react-icons/io5";

const ContactLetsTalk = () => {
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        <div className={`${styles.left}`}>
          <div className={`${styles.imageDiv}`}>
            <Image
              fill
              src={"/ContactLetsTalkImage/ContactImageLeft.svg"}
              alt="Image"
              style={{ objectFit: "cover" }}
            />
          </div>
          <img src="/ContactLetsTalkImage/posBg.svg" alt="Image" />
          <div className={`${styles.imageCube}`}></div>
        </div>
        <div className={`${styles.right}`}>
          <p className={`${styles.firstP}`}>Let’s talk</p>
          <h3>Get In Touch With Us</h3>
          <p className={`${styles.twoP}`}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </p>
          <div className={`${styles.info}`}>
            <div className={`${styles.leftInfo}`}>
              <i>
                <FaPhoneAlt />
              </i>
            </div>
            <div className={`${styles.rightInfo}`}>
              <p className={`${styles.left1}`}>Have Any Question?</p>
              <p className={`${styles.right1}`}>Free +01 238 543 987</p>
            </div>
          </div>
          <div className={`${styles.info}`}>
            <div className={`${styles.leftInfo}`}>
              <i>
                <CiMail />
              </i>
            </div>
            <div className={`${styles.rightInfo}`}>
              <p className={`${styles.left1}`}>Write Email</p>
              <p className={`${styles.right1}`}>Info@consultalk.com</p>
            </div>
          </div>
          <div className={`${styles.info}`}>
            <div className={`${styles.leftInfo}`}>
              <i>
                <IoLocationOutline />
              </i>
            </div>
            <div className={`${styles.rightInfo}`}>
              <p className={`${styles.left1}`}>Visit Anytime</p>
              <p className={`${styles.right1}`}>
                King Street, Prior Lake, New York.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactLetsTalk;
