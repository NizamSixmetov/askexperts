import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";

async function fetchData() {
  const url = await fetch(`https://askexpressdata.vercel.app/clientData`);
  const result = await url.json();
  return result;
}

async function AboutClientData() {
  const data = await fetchData();
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        <div className={`${styles.cardFlex}`}>
          {data.map(({ id, image, cap, description }) => {
            return (
              <div className={`${styles.cardDiv}`} key={id}>
                <Image alt="Image" width={35} height={35} src={image} />
                <h3>{cap}</h3>
                <p>{description}</p>
                <div className={`${styles.linkDiv}`}>
                  <Link href={`/Pricing`}>Read More</Link>
                  <i>
                    <FaArrowRight />
                  </i>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default AboutClientData;

// import Image from "next/image";
// import styles from "./style.module.css";
// import Link from "next/link";
// import { FaArrowRight } from "react-icons/fa6";

// // Функция для получения данных с кэшированием
// async function fetchData() {
//   const response = await fetch(`https://askexpressdata.vercel.app/clientData`, {
//     next: { revalidate: 3600 }, // ISR: обновление кэша каждые 3600 секунд (1 час)
//   });

//   if (!response.ok) {
//     throw new Error("Failed to fetch data");
//   }

//   const result = await response.json();
//   return result;
// }

// // Серверный компонент с использованием кэшированных данных
// export default async function AboutClientData() {
//   const data = await fetchData(); // Запрос данных с кэшированием

//   return (
//     <div className="container">
//       <div className={`${styles.flexDiv}`}>
//         <div className={`${styles.cardFlex}`}>
//           {data.map(({ id, image, cap, description }) => (
//             <div className={`${styles.cardDiv}`} key={id}>
//               <Image alt="Image" width={35} height={35} src={image} />
//               <h3>{cap}</h3>
//               <p>{description}</p>
//               <div className={`${styles.linkDiv}`}>
//                 <Link href={`/Pricing`}>Read More</Link>
//                 <i>
//                   <FaArrowRight />
//                 </i>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
