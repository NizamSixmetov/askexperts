import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

async function fetchData() {
  const url = await fetch("http://localhost:3000/api/teamData");
  const result = await url.json();
  return result;
}

async function AboutTeamData() {
  const data = await fetchData();
  return (
    <div>
      <div className={`${styles.flexDiv}`}>
        {data.map(
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
                  <Link href={`/Team/${id}`}></Link>
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
        )}
      </div>
    </div>
  );
}

export default AboutTeamData;
