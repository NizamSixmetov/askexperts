import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";

async function fetchData() {
  const url = await fetch(`/api/data/`);
  const result = await url.json();
  return result;
}

const HomeServicesData = async () => {
  const card = await fetchData();
  return (
    <div className="container">
      <div className={`${styles.card}`}>
        {card.map(({ id, url, cap, description, singlePageDescription }) => {
          return (
            <Link
              href={`/Services/${id}`}
              key={id}
              className={`${styles.flex}`}
            >
              <Image src={url} width={100} height={100} alt="Image" />
              <h3>{cap}</h3>
              <p>{description}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default HomeServicesData;
