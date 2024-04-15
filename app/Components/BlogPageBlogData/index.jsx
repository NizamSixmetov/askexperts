import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";

async function fetchData() {
  const url = await fetch("http://localhost:3000/api/blogNewsData");
  const result = await url.json();
  return result;
}

const BlogPageBlogData = async () => {
  const data = await fetchData();
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        {data.map(
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
                    <Link href={`/Blog/${id}`}>Read More</Link>
                  </div>
                </div>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default BlogPageBlogData;
