import PageCap from "../Components/PageCap";
import styles from "./style.module.css";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import HomeContact from "../Components/HomeContact";

async function fetchData() {
  const url = await fetch("http://localhost:3000/api/HomeProccess");
  const result = await url.json();
  return result;
}

const CaseStudy = async () => {
  const data = await fetchData();
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap pElemnt={"Case Studies"} h2Element={"Case Studies"} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${styles.filterPadding}`}>
          <div className={`${styles.filterBg}`}>
            <div className={`${styles.topFilter}`}>
              <button>All</button>
              <button>Taxes & Efficiency</button>
              <button>Investment banking</button>
            </div>
            <div className={`${styles.bottomFilter}`}>
              <button>Financial Plan</button>
              <button>Audit & Evaluation</button>
            </div>
          </div>
        </div>
        <div className={`${styles.allCase}`}>
          {data.map(({ id, image, name, description }) => {
            return (
              <div className={`${styles.cardDiv}`} key={id}>
                <div className={`${styles.imageDiv}`}>
                  <Image src={image} fill alt="CardImage" />
                  <div className={`${styles.displayDiv}`}>
                    <h5>{name}</h5>
                    <p>{description}</p>
                    <Link href={`/CaseStudy/${id}`}>
                      <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div className={`${styles.contactPadding}`}>
        <HomeContact />
      </div>
    </div>
  );
};

export default CaseStudy;
