import styles from './style.module.css'
import { IoTimeOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';

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
            <Link href={'https://www.instagram.com'} target='_blank'>
              <IoLogoInstagram />
            </Link>
            <Link href={'https://www.facebook.com'} target='_blank'>
              <FaFacebook />
            </Link>
            <Link href={'https://www.twitter.com'} target='_blank'>
              <FaTwitter />
            </Link>
            <Link href={'https://www.linkedin.com'} target='_blank'>
              <FaLinkedin />
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Header
