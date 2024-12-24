"use client";

import styles from "./style.module.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";

const HomePartner = () => {
  return (
    <div className={`${styles.swiperDiv}`}>
      <Swiper
        watchSlidesProgress={true}
        slidesPerView={5}
        className="mySwiper"
        autoplay={{
          delay: 1000,
        }}
        loop={true}
        modules={[Autoplay]}
      >
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            {/* <img src="/Homepartner/1.svg" alt="TestImage1" /> */}
            {/* <img src="/public/HomePartner/1.svg" alt="TestImage2" /> */}
            {/* <img src="../../../public/HomePartner/1.svg" alt="TestImage3" /> */}
            <Image
              src={"/HomePartner/1.svg"}
              alt="TestImage1"
              width={100}
              height={100}
              loading="lazy"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img
              className={`${styles.imgDiv}`}
              src="/Homepartner/2.svg"
              alt="Image"
            />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img src="/Homepartner/3.svg" alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img src="/Homepartner/4.svg" alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img src="/Homepartner/5.svg" alt="Image" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={`${styles.swiper}`}>
            <img src="/Homepartner/6.svg" alt="Image" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomePartner;
