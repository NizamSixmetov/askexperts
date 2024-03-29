import styles from "./style.module.css";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const AboutTeamSocialData = ({ data }) => {
  return (
    <div>
      <div className={`${styles.socialDiv}`}>
        <Link target="_blank" href={`${data.instagram}`}>
          <FaInstagram />
        </Link>
        <Link target="_blank" href={`${data.facebook}`}>
          <FaFacebook />
        </Link>
        <Link target="_blank" href={`${data.twitter}`}>
          <FaTwitter />
        </Link>
      </div>
    </div>
  );
};

export default AboutTeamSocialData;
