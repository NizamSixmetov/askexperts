import BlogSingleBestBusiness from "@/app/Components/BlogSingleBestBusiness";
import styles from "./style.module.css";
import Loader from "@/app/Components/Loader/Loader";

export const metadata = {
  title: "Article",
  description: "Blog Single page",
  icons: {
    icon: "/metadataIcon/blogSingle.svg",
  },
};

async function fetchData(id) {
  const url = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/blogNewsData/` + id
  );
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
            {data.id > 0 ? (
              <div className={`${styles.containerDiv}`}>
                <p>{data.authorDate}</p>
                <h4>{data.cap}</h4>
              </div>
            ) : (
              <h1
                style={{
                  fontSize: "20px",
                  fontWeight: "700",
                  textAlign: "left",
                  color: "#181818",
                  width: "fit-content",
                  backgroundColor: "white",
                  padding: ".5rem",
                  borderRadius: "0.5rem",
                }}
              >
                Date and title are not available
              </h1>
            )}
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
