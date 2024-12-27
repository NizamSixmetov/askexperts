import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import { TiPlus } from "react-icons/ti";

export async function fetchData() {
  const res = await fetch(
    `https://askexpressdata.vercel.app/HomeProccess?_limit=3`,
    {
      next: { revalidate: 3600 },
    }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

const HomeGallery = async () => {
  const limitCard = await fetchData();

  return (
    <div className={`${styles.positionDiv}`}>
      <div className={`container ${styles.absoluteDiv}`}>
        <div className={`${styles.topDiv}`}>
          <p>Proccess</p>
          <div className={`${styles.flexTop}`}>
            <h2>
              Our client, global analytical techno company, wanted to build
              market.
            </h2>
            <Link href={"/CaseStudy"} prefetch={true}>
              More Gallery
            </Link>
          </div>
        </div>
        <div className={`${styles.bottomDiv}`}>
          <div className={`${styles.limitFlex}`}>
            {limitCard.map(({ id, image, name, description }) => {
              return (
                <div className={`${styles.limitCard}`} key={id}>
                  <Image src={image} layout="fill" alt="ImageTest" />
                  <div className={`${styles.insetDiv}`}>
                    <Link href={`/CaseStudy/${id}`} prefetch={true}>
                      <TiPlus />
                    </Link>
                    <p className={`${styles.limPTop}`}>{name}</p>
                    <p className={`${styles.limPBottom}`}>{description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className={`${styles.responsiveButton}`}>
          <Link href={"/CaseStudy"} prefetch={true}>
            More Gallery
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomeGallery;
