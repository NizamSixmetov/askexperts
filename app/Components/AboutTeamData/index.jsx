import Image from "next/image";
import styles from "./style.module.css";
import AboutTeamSocialData from "../AboutTeamSocialData";
import Link from "next/link";

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
                  <AboutTeamSocialData data={data} />
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
