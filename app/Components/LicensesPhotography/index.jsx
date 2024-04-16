import styles from "./style.module.css";

const LicensesPhotography = () => {
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        <div className={`${styles.left}`}>
          <h3>Photography</h3>
        </div>
        <div className={`${styles.right}`}>
          <p>
            All images used in the PrimeChat Webflow Template are licensed for
            free personal and commercial use. If you'd like to use any specific
            image, you can check the licenses and download the images for free
            on
          </p>
          <h4>
            Pexels :<span>Licenses</span>
          </h4>
          <p>
            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image
            8, Image 9, Image 10, Image 11, Image 12, Image 13, Image 14, Image
            15, Image 16, Image 17, Image 18, Image 19, Image 20, Image 21,
            Image 22, Image 23, Image 24, Image 25
          </p>
          <h4>
            Unsplash : <span>Licenses</span>
          </h4>
          <p>
            Image 1, Image 2, Image 3, Image 4, Image 5, Image 6, Image 7, Image
            8, Image 9, Image 10
          </p>
        </div>
      </div>
    </div>
  );
};

export default LicensesPhotography;
