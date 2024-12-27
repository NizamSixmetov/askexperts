import styles from "./style.module.css";
import Link from "next/link";
import BlogPageBlogData from "../BlogPageBlogData";

const BlogPageBlog = () => {
  return (
    <div className="container">
      <div>
        <div className={`${styles.flexTop}`}>
          <div className={`${styles.topLeft}`}>
            <p>Blog</p>
            <h3>Take a look at our latest articles & resources</h3>
          </div>
          <div className={`${styles.topRight}`}>
            <Link href={"/Blog"} prefetch={true}>More News</Link>
          </div>
        </div>
        <div>
          <BlogPageBlogData />
        </div>
      </div>
    </div>
  );
};

export default BlogPageBlog;
