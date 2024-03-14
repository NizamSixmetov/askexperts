import styles from './style.module.css';
import { IoRadioButtonOn } from "react-icons/io5";


const MobileMenu = () => {
  return (
    <div className={`${styles.first}`}>
      <div className={`${styles.toggleDiv}`}>
        <button><IoRadioButtonOn /></button>
      </div>
    </div>
  )
};

export default MobileMenu;