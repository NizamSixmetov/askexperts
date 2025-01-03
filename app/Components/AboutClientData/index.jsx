import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa6";
import Loader from "../Loader/Loader";

async function fetchData() {
  const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/clientData`);
  const result = await url.json();
  return result;
}

async function AboutClientData() {
  const data = await fetchData();
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        <div className={`${styles.cardFlex}`}>
          {data.length > 0 ? (
            data.map(({ id, image, cap, description }) => {
              return (
                <div className={`${styles.cardDiv}`} key={id}>
                  <Image alt="Image" width={35} height={35} src={image} />
                  <h3>{cap}</h3>
                  <p>{description}</p>
                  <div className={`${styles.linkDiv}`}>
                    <Link href={`/Pricing`} prefetch={true}>Read More</Link>
                    <i>
                      <FaArrowRight />
                    </i>
                  </div>
                </div>
              );
            })
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </div>
  );
}

export default AboutClientData;