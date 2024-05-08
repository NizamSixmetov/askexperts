import PageCap from "@/app/Components/PageCap";
import styles from "./style.module.css";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { ImLinkedin2 } from "react-icons/im";
import TeamSubscribe from "@/app/Components/TeamSubscribe";

async function fetchData(id) {
  const url = await fetch("http://localhost:3000/api/teamFullData/" + id);
  const result = await url.json();
  return result;
}

export const metadata = {
  title: "Employee",
  description: "Employee Page",
  icons: {
    icon: "/metadataIcon/person.svg",
  },
};

const TeamSingle = async ({ params: { id } }) => {
  const data = await fetchData(id);
  return (
    <div>
      <div className={`${styles.marginDiv}`}></div>
      <div className="container">
        <div className={`${styles.flex}`}>
          <div className={`${styles.left}`}>
            <div className={`${styles.imagesDiv}`}>
              <Image src={data.image} alt="WorkerImage" fill />
              <img
                className={`${styles.posImage}`}
                src="/teamSingleImage/teamSinglePosition.svg"
                alt="Image"
              />
              <div className={`${styles.frameDiv}`}></div>
            </div>
          </div>
          <div className={`${styles.right}`}>
            <div className={`${styles.bottomFlex}`}>
              <div className={`${styles.nameDiv}`}>
                <h4>{data.name}</h4>
                <div className={`${styles.topBorder}`}></div>
                <section className={`${styles.social}`}>
                  <Link target="_blank" href={data.instagram}>
                    <FaInstagram />
                  </Link>
                  <Link target="_blank" href={data.facebook}>
                    <FaFacebook />
                  </Link>
                  <Link target="_blank" href={data.twitter}>
                    <FaTwitter />
                  </Link>
                  <Link target="_blank" href={data.linkedin}>
                    <ImLinkedin2 />
                  </Link>
                </section>
              </div>
              <p className={`${styles.firstP}`}>{data.position}</p>
              <p className={`${styles.twoP}`}>{data.topDescription}</p>
            </div>
            <div className={`${styles.bottomLine}`}></div>
            <h4>{data.past}</h4>
            <p className={`${styles.twoP}`}>{data.bottomDescription1}</p>
            <p className={`${styles.twoP}`}>{data.bottomDescription2}</p>
          </div>
        </div>
        <TeamSubscribe />
      </div>
    </div>
  );
};

export default TeamSingle;
