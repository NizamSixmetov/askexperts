import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

async function fetchData() {
  const response = await fetch(`https://askexpressdata.vercel.app/data/`, {
    next: { revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await response.json();
  return result;
}

const HomeServicesData = async () => {
  const card = await fetchData();

  return (
    <div className="container">
      <div className={`${styles.card}`}>
        {card.map(({ id, url, cap, description }) => (
          <Link
            href={`/Services/${id}`}
            prefetch
            key={id}
            className={`${styles.flex}`}
          >
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
