import styles from "./styles.module.css";
import Link from "next/link";

export const metadata = {
  title: "Not Found",
  description: "404 page",
  icons: {
    icon: "/metadataIcon/notFound.svg",
  },
};

export default function NotFound() {
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className={`${styles.centerDiv}`}>
            <div className={`${styles.flex}`}>
              <div className={`${styles.top}`}>
                <h2>404</h2>
              </div>
              <div className={`${styles.center}`}>
                <h3>Page Not Found</h3>
                <p>
                  This Page Doesn't or was removed! We suggest you back to home
                </p>
              </div>
              <div className={`${styles.bottom}`}>
                <Link href={"/"}>Back to home</Link>
              </div>
            </div>
            <img src="/notFoundImage/notFoundBackground.svg" alt="Image" />
            <div className={`${styles.greenFrame}`}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
