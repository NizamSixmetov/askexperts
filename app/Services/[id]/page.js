import HomePartner from "@/app/Components/HomePartner";
import styles from "./style.module.css";
import PageCap from "@/app/Components/PageCap";
import ServiceSingleSwiper from "@/app/Components/ServiceSingleSwiper";
import ServiceSingleWill from "@/app/Components/ServiceSingleWill";
import Image from "next/image";
import ServiceDetailHistory from "@/app/Components/ServiceDetailHistory";
import ServiceDetailProces from "@/app/Components/ServiceDetailProces";
import ServiceSingleFAQ from "@/app/Components/ServiceSingleFAQ";

async function fetchData(id) {
  const url = await fetch("http://localhost:3000/api/data/" + id);
  const result = await url.json();
  return result;
}

const ServiceSingle = async ({ params: { id } }) => {
  const data = await fetchData(id);
  return (
    <div>
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
            <p>{data.singlePageDescription}</p>
          </div>
          <div>
            <ServiceSingleSwiper />
          </div>
        </div>
      </div>
      <div className="container">
        <ServiceSingleWill />
        <HomePartner />
      </div>
      <div>
        <ServiceDetailHistory />
      </div>
      <div className="container">
        <ServiceDetailProces />
        <ServiceSingleFAQ />
      </div>
    </div>
  );
};

export default ServiceSingle;
