import styles from './style.module.css';

const HomeBookNow = () => {
  return (
    <div className='container'>
      <div className={`${styles.bg}`}>
        <div className={`${styles.left}`}>
          <p className={`${styles.oneP}`}>BOOK NOW</p>
          <div className={`${styles.text}`}>
            <h2>Better Consult, <span>Better</span> Results</h2>
          </div>
          <p className={`${styles.twoP}`}>
            Our software development agency
            has a growth up to 30% per
            each year. If you are
            result-oriented, not
            afraid to take initiative – drop
            us a note and join our team!
          </p>
          <button>+800 1234 654</button>
        </div>
        <div className={`${styles.right}`}>
          <img src="/HomeBookNow/Book.svg" alt="Image" />
        </div>
      </div>
    </div>
  )
}

export default HomeBookNow;