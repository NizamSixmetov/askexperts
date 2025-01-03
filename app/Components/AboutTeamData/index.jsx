import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Loader from "../Loader/Loader";

async function fetchData() {
  const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/teamData/`);
  const result = await url.json();
  return result;
}

async function AboutTeamData() {
  const data = await fetchData();
  return (
    <div>
      <div className={`${styles.flexDiv}`}>
        {data.length > 0 ? (
          data.map(
            ({
              id,
              image,
              name,
              description,
              position,
              instagram,
              facebook,
              twitter,
            }) => {
              return (
                <div className={`${styles.cardDiv}`} key={id}>
                  <div className={`${styles.image}`}>
                    <Image src={image} fill alt="image" />
                    <p>{position}</p>
                    <Link href={`/Team/${id}`} prefetch={true}></Link>
                  </div>
                  <h4>{name}</h4>
                  <p>{description}</p>
                  <div className={`${styles.socialDiv}`}>
                    <Link href={instagram}>
                      <FaInstagram />
                    </Link>
                    <Link href={facebook}>
                      <FaFacebook />
                    </Link>
                    <Link href={twitter}>
                      <FaTwitter />
                    </Link>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}

export default AboutTeamData;
