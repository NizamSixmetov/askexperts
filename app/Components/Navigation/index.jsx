import Link from 'next/link';
import styles from './style.module.css';
import { FiPhone } from "react-icons/fi";




const index = () => {


  return (
    <div className={`${styles.bgDiv}`}>
      <div className='container'>
        <div className={`${styles.flexDiv}`}>
          <div className={`${styles.left}`}>
            <Link href={'/'}>
              <img src="/Navigation/LogoNavigation.svg" alt="logo" />
            </Link>
          </div>
          <div className={`${styles.center}`}>
            <ul className={`${styles.flexUl}`}>
              <li> <Link href={'/'}>Home</Link> </li>
              <li> <Link href={'/About'}>About</Link> </li>
              <li> <Link href={'/Services'}>Services</Link> </li>
              <li> <Link href={'/Licenses'}>Licenses</Link> </li>
              <li> <Link href={'/Blog'}>Blog</Link> </li>
              <li> <Link href={'/Contact'}>Contact</Link> </li>
            </ul>
          </div>
          <div className={`${styles.right}`}>
            <button className={`${styles.button}`}>
              <i><FiPhone /></i>
              <p>+ (888) 452 1505</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default index