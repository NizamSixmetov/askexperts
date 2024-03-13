import Link from 'next/link';
import styles from './style.module.css';
import Image from 'next/image';

async function fetchData() {
  const url = await fetch("http://localhost:3000/api/homeBlog");
  const result = await url.json();
  return result;
}

const HomeBlog = async () => {
  const data = await fetchData();
  return (
    <div className={`${styles.bg}`}>
      <div className={`container ${styles.dataAndTextFlex}`}>
        <div className={`${styles.flex1}`}>
          <div className={`${styles.left1}`}>
            <p>BLOG</p>
            <h2>Take a look at our latest
              articles & resources
            </h2>
          </div>
          <div className={`${styles.right1}`}>
            <Link href={'/blog'}>More News</Link>
          </div>
        </div>
        <div className={`${styles.topFlex}`}>
          <div className={`${styles.flex2}`}>
            {
              data.map(({ id, image, profileImage, cap, description, name, date }) => {
                return (
                  <div className={`${styles.dataFlex1}`} key={id}>
                    <div className={`${styles.left2}`}>
                      <Image
                        style={{ borderRadius: "1rem", top: "0px" }}
                        src={image}
                        fill
                        alt='Image'
                      />
                    </div>
                    <div className={`${styles.text}`}>
                      <h3>{cap}</h3>
                      <p>{description}</p>
                    </div>
                    <div className={`${styles.lineDiv}`}></div>
                    <div className={`${styles.smallInfo}`}>
                      <img src={profileImage} alt="Image" />
                      <p>{name}</p>
                      <div className={`${styles.smallBorder}`}></div>
                      <p>{date}</p>
                      <Link href={'/'}>Read More</Link>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomeBlog