import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import Loader from "../Loader/Loader";

async function fetchData() {
  const url = await fetch(`https://askexpressdata.vercel.app/homeBlog/`);
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
            <h2>Take a look at our latest articles & resources</h2>
          </div>
          <div className={`${styles.right1}`}>
            <Link href={"/Blog"}>More News</Link>
          </div>
        </div>
        <div className={`${styles.topFlex}`}>
          <div className={`${styles.flex2}`}>
            {data.length > 0 ? (
              data.map(
                ({ id, image, profileImage, cap, description, name, date }) => {
                  return (
                    <div className={`${styles.dataFlex1}`} key={id}>
                      <div className={`${styles.left2}`}>
                        <Image
                          style={{ borderRadius: "1rem", top: "0px" }}
                          src={image}
                          fill
                          alt="Image"
                        />
                      </div>
                      <div className={`${styles.text}`}>
                        <h3>{cap}</h3>
                        <p>{description}</p>
                      </div>
                      <div
                        className={`${styles.lineDiv} ${styles.lineHide}`}
                      ></div>
                      <div className={`${styles.smallInfo}`}>
                        <img src={profileImage} alt="Image" />
                        <p>{name}</p>
                        <div className={`${styles.smallBorder}`}></div>
                        <p>{date}</p>
                        <Link href={`/Blog/${id}`}>Read More</Link>
                      </div>
                      <div className={`${styles.lineDiv}`}></div>
                    </div>
                  );
                }
              )
            ) : (
              <Loader />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
