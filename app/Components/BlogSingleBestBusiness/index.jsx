import styles from "./style.module.css";
import { BsChatSquareQuoteFill } from "react-icons/bs";
import Image from "next/image";
import Link from "next/link";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import Loader from "../Loader/Loader";

const BlogSingleBestBusiness = ({ data }) => {
  return (
    <div className="container">
      {data.id > 0 ? (
        <div className={`${styles.flex}`}>
          <div className={`${styles.firstDiv}`}>
            <h2>Best Business Consulting Services</h2>
            <p>
              Bring to the table win-win survival strategies to ensure proactive
              domination. At the end of the day, going forward, a new normal
              that has evolved from generation X is on the runway heading
              towards a streamlined cloud solution. User generated content in
              real-time will have multiple touchpoints for offshoring.
              Capitalize on low hanging fruit to identify a ballpark value added
              activity to beta test. Override the digital divide with additional
              clickthroughs from DevOps.
            </p>
            <img src="/BlogSinglePageImage/firstImage.jpg" alt="FirstImage" />
          </div>
          <div className={`${styles.twoDiv}`}>
            <h2>The Digital Assets For All</h2>
            <p>
              Appropriately empower dynamic leadership skills after business
              portals. Globally my carminate interactive supply chains with
              distinctive quality vectors global sources services. Uniquely
              matrix economically sound value through cooperative technology.
              Competently parallel task fully researched data and enterprise
              process improvements.
            </p>
            <ul>
              <li>
                Dynamically target high-payoff intellectual capital for
                customized
              </li>
              <li>Interactively procrastinate high-payoff content</li>
              <li>
                Credibly reinter mediate backend ideas for cross-platform models
              </li>
            </ul>
            <div className={`${styles.quoteDiv}`}>
              <i>
                <BsChatSquareQuoteFill />
              </i>
              <p>
                “The job market of the future will consist of those jobs that
                robots cannot perform. Our blue-collar work is pattern
                recognition, making sense of what you see. Gardeners will still
                have jobs because every garden is different.”
              </p>
              <img
                src="/BlogSinglePageImage/PatternSingleBlog.svg"
                alt="posImage"
              />
            </div>
          </div>
          <div className={`${styles.threeDiv}`}>
            <h2>Make real time a wireframes services</h2>
            <p>
              Collaboratively administrate empowered markets via plug-and-play
              networks. Dynamically procrastinate B2C users after installed base
              benefits. Dramatically visualize customer directed convergence
              without revolutionary ROI.
            </p>
            <ul>
              <li>
                It brings the right people together with all the right
                information and tools to get work done
              </li>
              <li>
                We provide operational efficiency, data security, and flexible
                scale
              </li>
              <li>
                Your best work, together in one package that works seamlessly
                from your computer
              </li>
              <li>
                Delivers the tools you need to save time Improve field
                performance always
              </li>
            </ul>
            <div className={`${styles.bottomPosDiv}`}>
              <div className={`${styles.authorImage}`}>
                <Image src={data.authorImage} fill alt="AuthorImage" />
                <div className={`${styles.triangle}`}></div>
                <div className={`${styles.circle}`}></div>
                <div className={`${styles.star}`}></div>
              </div>
              <div className={`${styles.infoDiv}`}>
                <h4>{data.authorName}</h4>
                <p className={`${styles.position}`}>{data.position}</p>
                <p className={`${styles.authorQuote}`}>{data.authorQuote}</p>
                <div className={`${styles.social}`}>
                  <Link target="_blank" href={"https://instagram.com"}>
                    <FaInstagram />
                  </Link>
                  <Link target="_blank" href={"https://facebook.com"}>
                    <FaFacebook />
                  </Link>
                  <Link target="_blank" href={"https://twitter.com"}>
                    <FaTwitter />
                  </Link>
                </div>
              </div>
              <img src="/BlogSinglePageImage/PatternPos.svg" alt="Image" />
            </div>
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
};

export default BlogSingleBestBusiness;
