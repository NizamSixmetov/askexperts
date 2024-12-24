import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import { TiPlus } from "react-icons/ti";

// http://localhost:3000/api/HomeProccess?limit=3

export async function fetchData() {
  const res = await fetch(
    `https://askexpressdata.vercel.app/HomeProccess?_limit=3`
  );
  return res.json();
}

const HomeGallery = async () => {
  // if (!limitCard || limitCard.length === 0) {
  //   return <div>No data</div>;
  // }

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
            <Link href={"/CaseStudy"}>More Gallery</Link>
          </div>
        </div>
        <div className={`${styles.bottomDiv}`}>
          <div className={`${styles.limitFlex}`}>
            {limitCard.map(({ id, image, name, description }) => {
              return (
                <div className={`${styles.limitCard}`} key={id}>
                  <Image src={image} layout="fill" alt="Image" />
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
};

// export async function getStaticProps() {
//   try {
//     console.log(
//       "Fetching data from:",
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/HomeProccess?limit=3`
//     );
//     const res = await fetch(
//       `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/HomeProccess?limit=3`
//     );
//     if (!res.ok) {
//       throw new Error(`Failed to fetch data: ${res.statusText}`);
//     }
//     const limitCard = await res.json();
//     console.log("Fetched data:", limitCard);

//     return {
//       props: {
//         limitCard,
//       },
//     };
//   } catch (error) {
//     console.error("Failed to fetch data", error);
//     return {
//       props: {
//         limitCard: [],
//       },
//     };
//   }
// };

export default HomeGallery;
