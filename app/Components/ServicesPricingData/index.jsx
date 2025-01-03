import Link from "next/link";
import styles from "./style.module.css";
import { FaAngleRight } from "react-icons/fa";
import Loader from "../Loader/Loader";

async function fetchData() {
  const url = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/aboutPricing/`
  );
  const result = await url.json();
  return result;
}

const ServicesPricingData = async () => {
  const data = await fetchData();
  return (
    <div className="container">
      <div className={`${styles.flexDiv}`}>
        {data.length > 0 ? (
          data.map(
            ({
              id,
              planName,
              description,
              price,
              time,
              services1,
              services2,
              services3,
              services4,
            }) => {
              return (
                <div className={`${styles.card}`} key={id}>
                  <div className={`${styles.top}`}>
                    <h4>{planName}</h4>
                    <p>{description}</p>
                    <div className={`${styles.lineDiv}`}></div>
                    <div className={`${styles.priceDiv}`}>
                      <p>{price}</p>
                      <span>{time}</span>
                    </div>
                  </div>
                  <div className={`${styles.center}`}>
                    <div className={`${styles.servicesDiv}`}>
                      <i>
                        <FaAngleRight />
                      </i>
                      <p>{services1}</p>
                    </div>
                    <div className={`${styles.servicesDiv}`}>
                      <i>
                        <FaAngleRight />
                      </i>
                      <p>{services2}</p>
                    </div>
                    <div className={`${styles.servicesDiv}`}>
                      <i>
                        <FaAngleRight />
                      </i>
                      <p>{services3}</p>
                    </div>
                    <div className={`${styles.servicesDiv}`}>
                      <i>
                        <FaAngleRight />
                      </i>
                      <p>{services4}</p>
                    </div>
                  </div>
                  <div className={`${styles.bottom}`}>
                    <Link href={"/"} prefetch={true}>
                      Get This Plan
                    </Link>
                  </div>
                </div>
              );
            }
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
};

export default ServicesPricingData;
