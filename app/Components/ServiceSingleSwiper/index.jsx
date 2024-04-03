"use client";
import styles from "./style.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { FaNewspaper } from "react-icons/fa";
import { IoCard } from "react-icons/io5";
import { PiBankFill } from "react-icons/pi";
import { PiCurrencyDollarSimpleFill } from "react-icons/pi";
import { Autoplay, Navigation, Pagination, Parallax } from "swiper/modules";
import "swiper/css/navigation";

const ServiceSingleSwiper = () => {
  return (
    <div className={`${styles.firstDiv}`}>
      <Swiper
        style={{
          "--swiper-navigation-color": "#FFCC4A",
          "--swiper-pagination-color": "#FFCC4A",
          "--swiper-navigation-sides-offset": "-1px",
          "--swiper-navigation-sides-offset": "-1px",
        }}
        slidesPerView={4}
        centeredSlidesBounds={true}
        loop={true}
        navigation={true}
        modules={[Parallax, Pagination, Navigation, Autoplay]}
        centeredSlides={true}
        breakpoints={{
          0: {
            slidesPerView: 2,
          },
          576: {
            slidesPerView: 2,
          },
          768: {
            slidesPerView: 3,
          },
          992: {
            slidesPerView: 4,
          },
        }}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className={`${styles.cardDiv}`}>
            <i>
              <FaNewspaper />
            </i>
            <h3>The Balance Sheet</h3>
            <p>
              The Balance Sheet is a summary of the assets and liabilities and
              equity of a business at a specific point of time.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.cardDiv}`}>
            <i>
              <IoCard />
            </i>
            <h3>Income Statement</h3>
            <p>
              The Income (Profit and Loss) Statement, commonly referred to as
              the P&L statement, summarizes the revenue and expenses for a
              specific time period (one month, one quarter, one year, etc.)
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.cardDiv}`}>
            <i>
              <PiBankFill />
            </i>
            <h3>Financial Plan</h3>
            <p>
              Keep your information current and review the documents on a
              regular basis (monthly or more often if needed). Review them with
              key individuals within your company.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.cardDiv}`}>
            <i>
              <PiCurrencyDollarSimpleFill />
            </i>
            <h3>Financial Ratios</h3>
            <p>
              Ratios are useful when comparing your company with the competition
              on financial performance and also when benchmarking the
              performance of your company.
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.cardDiv}`}>
            <i>
              <FaNewspaper />
            </i>
            <h3>The Balance Sheet</h3>
            <p>
              The Balance Sheet is a summary of the assets and liabilities and
              equity of a business at a specific point of time.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ServiceSingleSwiper;
