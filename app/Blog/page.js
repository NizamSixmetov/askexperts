import BlogPageBlog from "../Components/BlogPageBlog";
import PageCap from "../Components/PageCap";
import TeamContact from "../Components/TeamContact";
import styles from "./style.module.css";


export const metadata = {
  title: "Blog",
  description: "Blog page",
  icons: {
    icon: "/metadataIcon/blog.svg",
  },
};

const Blog = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap pElemnt={"Blog"} h2Element={"Latest Blogs & News"} />
          </div>
        </div>
      </div>
      <div>
        <BlogPageBlog />
      </div>
      <div>
        <TeamContact />
      </div>
    </div>
  );
};

export default Blog;
