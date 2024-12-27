"use client";

import styles from "./style.module.css";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function ClientCouruselHome() {
  return (
    <div className={`${styles.swiperDiv}`}>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={1}
        className="mySwiper"
        loop={true}
        navigation={true}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img src="/ClientFreedBack/Client.jpg" alt="Image" />
            <p className={`${styles.nameP}`}>Kathleen Smith</p>
            <p className={`${styles.jobP}`}>Web Designer</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img src="/ClientFreedBack/Client.jpg" alt="Image" />
            <p className={`${styles.nameP}`}>Simitci Qaqash</p>
            <p className={`${styles.jobP}`}>Copleden</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img src="/ClientFreedBack/Client.jpg" alt="Image" />
            <p className={`${styles.nameP}`}>Bulent Ersoy</p>
            <p className={`${styles.jobP}`}>Rengsaz</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default ClientCouruselHome;
