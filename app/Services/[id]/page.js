import styles from "./style.module.css";
import HomePartner from "@/app/Components/HomePartner";
import PageCap from "@/app/Components/PageCap";
import ServiceSingleSwiper from "@/app/Components/ServiceSingleSwiper";
import ServiceSingleWill from "@/app/Components/ServiceSingleWill";
import Image from "next/image";
import ServiceDetailHistory from "@/app/Components/ServiceDetailHistory";
import ServiceDetailProces from "@/app/Components/ServiceDetailProces";
import ServiceSingleFAQ from "@/app/Components/ServiceSingleFAQ";

export const metadata = {
  title: "Service",
  description: "Service Single",
  icons: {
    icon: "/metadataIcon/services.svg",
  },
};

async function fetchData(id) {
  const response = await fetch(`https://askexpressdata.vercel.app/data/` + id);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  const result = await response.json();
  return result;
}

const ServiceSingle = async ({ params: { id } }) => {
  const data = await fetchData(id);

  return (
    <>
      <div className={`${styles.firstBgDiv}`}>
        <div className={`${styles.marginDiv}`}>
          <div className={`${styles.bgDiv}`}>
            <div className="container">
              <PageCap
                text={"Services"}
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
    </>
  );
};

export default ServiceSingle;
