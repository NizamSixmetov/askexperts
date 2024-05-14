import styles from "./style.module.css";
import Link from "next/link";
import Image from "next/image";
import { TiPlus } from "react-icons/ti";

async function limitData() {
  const url = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/HomeProccess?limit=3`);
  const result = await url.json();
  return result;
}

const MoreCaseData = async () => {
  const limitCard = await limitData();
  return (
    <div className="container">
      <div className={`${styles.bottomDiv}`}>
        <div className={`${styles.limitFlex}`}>
          {limitCard.map(({ id, image, name, description }) => {
            return (
              <div className={`${styles.limitCard}`} key={id}>
                <Image src={image} fill alt="Image" />
                <div className={`${styles.insetDiv}`}>
                  <Link href={`/CaseStudy/${id}`}>
                    <TiPlus />
                  </Link>
                  <p className={`${styles.limPTop}`}>{name}</p>
                  <p className={`${styles.limPBottom}`}>{description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default MoreCaseData;
