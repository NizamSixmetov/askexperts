import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

async function fetchData() {
  const url = await fetch("http://localhost:3000/api/teamFullData");
  const result = await url.json();
  return result;
}

const TeamMeetData = async () => {
  const data = await fetchData();
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        {data.map(
          ({
            id,
            image,
            name,
            position,
            description,
            instagram,
            facebook,
            twitter,
          }) => {
            return (
              <div className={`${styles.workerCard}`}>
                <section className={`${styles.image}`}>
                  <Image src={image} fill alt="WorkerImage" />
                  <p>{position}</p>
                  <Link
                    className={`${styles.hrefLink}`}
                    href={`/Team/${id}`}
                  ></Link>
                </section>
                <section className={`${styles.name}`}>
                  <h4>{name}</h4>
                </section>
                <section className={`${styles.description}`}>
                  <p>{description}</p>
                </section>
                <section className={`${styles.social}`}>
                  <Link target="_blank" href={instagram}>
                    <FaInstagram />
                  </Link>
                  <Link target="_blank" href={facebook}>
                    <FaFacebook />
                  </Link>
                  <Link target="_blank" href={twitter}>
                    <FaTwitter />
                  </Link>
                </section>
              </div>
            );
          }
        )}
      </div>
    </div>
  );
};

export default TeamMeetData;
