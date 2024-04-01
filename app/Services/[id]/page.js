import styles from "./style.module.css";
import PageCap from "@/app/Components/PageCap";
import Image from "next/image";

async function fetchData(id) {
  const url = await fetch("http://localhost:3000/api/data/" + id);
  const result = await url.json();
  return result;
}

const ServiceSingle = async ({ params: { id } }) => {
  const data = await fetchData(id);
  return (
    <div className={`${styles.firstBgDiv}`}>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap
              pElemnt={"Services"}
              h2Element={"Creative Services For Boost Your Business Growth"}
            />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${styles.flexDiv}`}>
          <Image src={data.url} alt="Image" width={100} height={100} />
          <h3>{data.cap}</h3>
          <div>
            <p>{data.singlePageDescription}</p>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSingle;
