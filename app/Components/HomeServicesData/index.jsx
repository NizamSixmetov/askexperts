import Link from "next/link";
import styles from "./style.module.css";
import Image from "next/image";
import Loader from "../Loader/Loader";

async function fetchData() {
  const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/data/`);

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
        {card.length > 0 ? (
          card.map(({ id, url, cap, description }) => (
            <Link
              href={`/Services/${id}`}
              prefetch={true}
              key={id}
              className={`${styles.flex}`}
            >
              <Image src={url} width={100} height={100} alt="Image" />
              <h3>{cap}</h3>
              <p>{description}</p>
            </Link>
          ))
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default HomeServicesData;
