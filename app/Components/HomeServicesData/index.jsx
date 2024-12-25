// import Link from "next/link";
// import styles from "./style.module.css";
// import Image from "next/image";

// async function fetchData() {
//   const url = await fetch(`https://askexpressdata.vercel.app/data/`);
//   const result = await url.json();
//   return result;
// }

// const HomeServicesData = async () => {
//   const card = await fetchData();
//   return (
//     <div className="container">
//       <div className={`${styles.card}`}>
//         {card.map(({ id, url, cap, description, singlePageDescription }) => {
//           return (
//             <Link
//               href={`/Services/${id}`}
//               key={id}
//               className={`${styles.flex}`}
//             >
//               <Image src={url} width={100} height={100} alt="Image" />
//               <h3>{cap}</h3>
//               <p>{description}</p>
//             </Link>
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default HomeServicesData;

import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

// Функция для получения данных с кэшированием
async function fetchData() {
  const response = await fetch(`https://askexpressdata.vercel.app/data/`, {
    next: { revalidate: 3600 }, // ISR: обновление кэша каждые 3600 секунд (1 час)
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await response.json();
  return result;
}

// Серверный компонент с использованием кэшированных данных
const HomeServicesData = async () => {
  const card = await fetchData();

  return (
    <div className="container">
      <div className={`${styles.card}`}>
        {card.map(({ id, url, cap, description }) => (
          <Link href={`/Services/${id}`} key={id} className={`${styles.flex}`}>
            <Image src={url} width={100} height={100} alt="Image" />
            <h3>{cap}</h3>
            <p>{description}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HomeServicesData;
