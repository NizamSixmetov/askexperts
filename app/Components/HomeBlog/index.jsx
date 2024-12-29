import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

async function fetchData() {
  const url = `${process.env.NEXT_PUBLIC_BACKEND_URL}/homeBlog/`;
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}

const HomeBlog = async () => {
  const data = await fetchData();

  if (!data) {
    return (
      <div className={`${styles.bg}`}>
        <h2
          style={{
            display: "flex",
            justifyContent: "center",
            margin: "0 auto",
            padding: "1rem",
            color: "#ffcc4a",
          }}
        >
          Failed to load blogs. Please try again later.
        </h2>
      </div>
    );
  }

  return (
    <div className={`${styles.bg}`}>
      <div className={`container ${styles.dataAndTextFlex}`}>
        <div className={`${styles.flex1}`}>
          <div className={`${styles.left1}`}>
            <p>BLOG</p>
            <h2>Take a look at our latest articles & resources</h2>
          </div>
          <div className={`${styles.right1}`}>
            <Link href="/Blog" prefetch={true}>
              More News
            </Link>
          </div>
        </div>
        <div className={`${styles.topFlex}`}>
          <div className={`${styles.flex2}`}>
            {data.map(
              ({ id, image, profileImage, cap, description, name, date }) => (
                <div className={`${styles.dataFlex1}`} key={id}>
                  <div className={`${styles.left2}`}>
                    <Image
                      style={{ borderRadius: "1rem", top: "0px" }}
                      src={image}
                      fill
                      alt="Blog Image"
                    />
                  </div>
                  <div className={`${styles.text}`}>
                    <h3>{cap}</h3>
                    <p>{description}</p>
                  </div>
                  <div className={`${styles.lineDiv} ${styles.lineHide}`}></div>
                  <div className={`${styles.smallInfo}`}>
                    <img src={profileImage} alt="Author Image" />
                    <p>{name}</p>
                    <div className={`${styles.smallBorder}`}></div>
                    <p>{date}</p>
                    <Link href={`/Blog/${id}`} prefetch={true}>
                      Read More
                    </Link>
                  </div>
                  <div className={`${styles.lineDiv}`}></div>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeBlog;
