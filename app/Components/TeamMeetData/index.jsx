import Image from "next/image";
import styles from "./style.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Loader from "../Loader/Loader";

async function fetchData() {
  const url = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/teamFullData`
  );
  const result = await url.json();
  return result;
}

const TeamMeetData = async () => {
  const data = await fetchData();
  return (
    <div className="container">
      <div className={`${styles.flex}`}>
        {data.length > 0 ? (
          data.map(
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
                      prefetch={true}
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
          )
        ) : (
          <div
            style={{
              padding: "1rem",
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Loader />
            <p style={{ color: "#ffcc4a" }}>Lost connection with server</p>
            <p style={{ color: "#ffcc4a" }}>Please try again</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TeamMeetData;
