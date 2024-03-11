import styles from './style.module.css'
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Header = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className='container'>
        <div className={`${styles.flexDiv}`}>
          <div className={`${styles.left}`}>
            <i><IoTimeOutline /></i>
            <p>Monday - Friday8AM - 9PM</p>
          </div>
          <div className={`${styles.center}`}>
            <i><IoLocationOutline /></i>
            <p>725 Park Ave, New York</p>
          </div>
          <div className={`${styles.right}`}>
            <IoLogoInstagram />
            <FaFacebook />
            <FaTwitter />
            <FaLinkedin />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
