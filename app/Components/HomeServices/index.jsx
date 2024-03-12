import HomeServicesData from '../HomeServicesData';
import styles from './style.module.css';

const HomeServices = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className='container'>
        <div className={`${styles.flex}`}>
          <div className={`${styles.top}`}>
            <p>Services</p>
            <h2>Get Control Over Your
              Business I take your
              finance to next level
            </h2>
          </div>
          <div className={`${styles.bottom}`}>
            <HomeServicesData />
          </div>
        </div>
      </div>
    </div>
  )
};

export default HomeServices;