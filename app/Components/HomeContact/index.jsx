import styles from './style.module.css';
import { FiPhone } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";

const HomeContact = () => {
  return (
    <div className='container'>
      <div className={`${styles.flexBase}`}>
        <div className={`${styles.leftDiv}`}>
          <p>Proccess</p>
          <div className={`${styles.capDiv}`}>
            <h3>Contact Us. It’s Easy.</h3>
            <p>
              Leverage agile frameworks to
              provide a robust synopsis for
              high level overviews. Iterative
              approaches to corporate strategy
              foster collaborative.
            </p>
            <div className={`${styles.flexM}`}>
              <div className={`${styles.flexIcon}`}>
                <div className={`${styles.icon}`}>
                  <i className={`${styles.firstTimeIcon}`}><FiPhone /></i>
                </div>
                <div className={`${styles.text}`}>
                  <p>Call Today</p>
                  <p>+1 800 100 900</p>
                </div>
              </div>
              <div className={`${styles.flexIcon}`}>
                <div className={`${styles.icon}`}>
                  <i className={`${styles.twoTimeIcon}`}><IoTimeOutline /></i>
                </div>
                <div className={`${styles.text}`}>
                  <p>Monday To Friday</p>
                  <p>9AM - 5PM</p>
                </div>
              </div>
              <div className={`${styles.flexIcon}`}>
                <div className={`${styles.icon}`}>
                  <i className={`${styles.theeTimeIcon}`}><CiLocationOn /></i>
                </div>
                <div className={`${styles.text}`}>
                  <p>USA Office</p>
                  <p>195 Devonshire St Boston, MA 02110</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.rightDiv}`}>
          <form className={`${styles.form}`}>
            <div className={`${styles.firstInput}`}>
              <div className={`${styles.fullName}`}>
                <p>Full Name</p>
                <input type="text" placeholder='john david' />
              </div>
              <div className={`${styles.fullName}`}>
                <p>Email</p>
                <input type="text" placeholder='consult@mail.com' />
              </div>
            </div>
            <div className={`${styles.firstInput}`}>
              <div className={`${styles.fullName}`}>
                <p>Phone</p>
                <input type="number" placeholder='+008 654 231' />
              </div>
              <div className={`${styles.fullName}`}>
                <p>Company(optional)</p>
                <input type="text" placeholder='yourcompany.com' />
              </div>
            </div>
            <div className={`${styles.messageInput}`}>
              <p>Message</p>
              <textarea cols="30" rows="10" placeholder='Briefly tell us about your project and your current goals. How can we help you?'></textarea>
            </div>
            <button>Send Message</button>


          </form>
        </div>
      </div>
    </div>
  )
};

export default HomeContact;