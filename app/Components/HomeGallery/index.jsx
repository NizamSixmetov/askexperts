import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import { TiPlus } from "react-icons/ti";

async function limitData() {
  const url = await fetch(`/api/HomeProccess?limit=3`);
  const result = await url.json();
  return result;
}

async function HomeGallery() {
  const limitCard = await limitData();
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
            <Link href={"/CaseStudy"}>More Gallery</Link>
          </div>
        </div>
        <div className={`${styles.bottomDiv}`}>
          <div className={`${styles.limitFlex}`}>
            {limitCard.map(({ id, image, name, description }) => {
              return (
                <div className={`${styles.limitCard}`} key={id}>
                  <Image src={image} fill alt="Image" />
                  <div className={`${styles.insetDiv}`}>
                    <Link href={`/CaseStudy/${id}`}>
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
          <Link href={"/CaseStudy"}>More Gallery</Link>
        </div>
      </div>
    </div>
  );
}

export default HomeGallery;
