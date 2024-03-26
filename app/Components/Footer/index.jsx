import Link from 'next/link';
import styles from './style.module.css';
import { TbPointFilled } from "react-icons/tb";

const Footer = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className='container'>
        <div className={`${styles.baseFlex}`}>
          <div className={`${styles.icon}`}>
            <Link href={'/'}>
              <img src="/Navigation/LogoNavigation.svg" alt="Logo" />
            </Link>
            <div className={`${styles.socialDiv}`}>
              <Link href={'https://facebook.com'} target='_blank'>Fb.</Link>
              <Link href={'https://whatsapp.com'} target='_blank'> /lg.</Link>
              <Link href={'https://twitter.com'} target='_blank'> /Tw.</Link>
              <Link href={'https://linkedin.com'} target='_blank'> /Be.</Link>
            </div>
          </div>
          <div className={`${styles.centerLine}`}></div>
          <div className={`${styles.info}`}>
            <div className={`${styles.left}`}>
              <h4>Product</h4>
              <div className={`${styles.bottomLine}`}></div>
              <ul className={`${styles.ul}`}>
                <li className={`${styles.li}`}>
                  <i><TbPointFilled /></i>
                  <Link href={'/'}> Service</Link>
                </li>
                <li className={`${styles.li}`}>
                  <i><TbPointFilled /></i>
                  <Link href={'/'}>FAQ</Link></li>
                <li className={`${styles.li}`}>
                  <i><TbPointFilled /></i>
                  <Link href={'/'}>Single Service</Link>
                </li>
                <li className={`${styles.li}`}>
                  <i><TbPointFilled /></i>
                  <Link href={'/'}>Get Quote</Link>
                </li>
                <li className={`${styles.li}`}>
                  <i><TbPointFilled /></i>
                  <Link href={'/'}>Prices</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.center}`}>
              <div className={`${styles.left}`}>
                <h4>Company</h4>
                <div className={`${styles.bottomLine}`}></div>
                <ul className={`${styles.ul}`}>
                  <li className={`${styles.li}`}>
                    <i><TbPointFilled /></i>
                    <Link href={'/'}> About</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i><TbPointFilled /></i>
                    <Link href={'/'}>News</Link></li>
                  <li className={`${styles.li}`}>
                    <i><TbPointFilled /></i>
                    <Link href={'/'}>Contacts</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i><TbPointFilled /></i>
                    <Link href={'/'}>Testimonials</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i><TbPointFilled /></i>
                    <Link href={'/'}>Our team</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i><TbPointFilled /></i>
                    <Link href={'/'}>Our approach</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.right}`}>
              <div className={`${styles.left}`}>
                <h4>Address</h4>
                <div className={`${styles.bottomLineAddress}`}></div>
                <p>
                  1700 W Blancke St, kiyev port south
                  USA, America
                </p>
                <button>Book an Appoinment</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer