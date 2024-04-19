import BlogSingleBestBusiness from "@/app/Components/BlogSingleBestBusiness";
import styles from "./style.module.css";

async function fetchData(id) {
  const url = await fetch("http://localhost:3000/api/blogNewsData/" + id);
  const result = await url.json();
  return result;
}

const BlogSinglePage = async ({ params: { id } }) => {
  const data = await fetchData(id);
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <div className={`${styles.containerDiv}`}>
              <p>{data.authorDate}</p>
              <h4>{data.cap}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <BlogSingleBestBusiness data={data} />
      </div>
    </div>
  );
};

export default BlogSinglePage;