import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import Loader from "../Loader/Loader";

export async function fetchData() {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogNewsData/`
  );
  return res.json();
}

const BlogPageBlogData = async () => {
  const data = await fetchData();

  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        {data.length > 0 ? (
          data.map(
            ({
              id,
              image,
              cap,
              description,
              authorImage,
              authorName,
              authorDate,
            }) => {
              return (
                <div key={id} className={`${styles.newsCard}`}>
                  <div className={`${styles.imageDiv}`}>
                    <Image fill alt="Image" src={image} />
                  </div>
                  <div className={`${styles.cap}`}>
                    <h3>{cap}</h3>
                  </div>
                  <div className={`${styles.description}`}>
                    <p>{description}</p>
                  </div>
                  <div className={`${styles.author}`}>
                    <div className={`${styles.authorImage}`}>
                      <Image src={authorImage} fill alt="Image" />
                    </div>
                    <div className={`${styles.authorName}`}>
                      <p>{authorName}</p>
                    </div>
                    <div className={`${styles.authorLine}`}></div>
                    <div className={`${styles.authorDate}`}>
                      <p>{authorDate}</p>
                    </div>
                    <div className={`${styles.authorLink}`}>
                      <Link href={`/Blog/${id}`} prefetch={true}>
                        Read More
                      </Link>
                    </div>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default BlogPageBlogData;
