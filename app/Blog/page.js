import MuiVideo from "../Components/MuiVideo/MuiVideo";
import PageCap from "../Components/PageCap";
import styles from "./style.module.css";

const Blog = () => {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap
              pElemnt={"Services"}
              h2Element={"Creative Services For Boost Your Business Growth"}
            />
          </div>
        </div>
      </div>
      <h1>Video Player: </h1>
      <MuiVideo />
    </div>
  );
};

export default Blog;
