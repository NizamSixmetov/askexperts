"use client";

import styles from "./style.module.css";
import { FiPhone } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import LocationLink from "../goLocation/LocationLink";
import handlePhoneClick from "../goPhone/goPhone";

const ServiceDetailProces = () => {
  return (
    <div>
      <div className="container">
        <div className={`${styles.flexBase}`}>
          <div className={`${styles.leftDiv}`}>
            <p>Proccess</p>
            <div className={`${styles.capDiv}`}>
              <h3>Contact Us. It’s Easy.</h3>
              <p>
                Leverage agile frameworks to provide a robust synopsis for high
                level overviews. Iterative approaches to corporate strategy
                foster collaborative.
              </p>
              <div className={`${styles.flexM}`}>
                <div className={`${styles.flexIcon}`}>
                  <div className={`${styles.icon}`}>
                    <i className={`${styles.firstTimeIcon}`}>
                      <FiPhone />
                    </i>
                  </div>
                  <div className={`${styles.text}`}>
                    <p>Call Today</p>
                    <p onClick={() => handlePhoneClick("+1 800 100 900")}>
                      +1 800 100 900
                    </p>
                  </div>
                </div>
                <div className={`${styles.flexIcon}`}>
                  <div className={`${styles.icon}`}>
                    <i className={`${styles.twoTimeIcon}`}>
                      <IoTimeOutline />
                    </i>
                  </div>
                  <div className={`${styles.text}`}>
                    <p>Monday To Friday</p>
                    <p>9AM - 5PM</p>
                  </div>
                </div>
                <div className={`${styles.flexIcon}`}>
                  <div className={`${styles.icon}`}>
                    <i className={`${styles.theeTimeIcon}`}>
                      <CiLocationOn />
                    </i>
                  </div>
                  <div className={`${styles.text}`}>
                    <p>USA Office</p>
                    <div className={`${styles.location}`}>
                      <LocationLink />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.rightDiv}`}>
            <div className={`${styles.leftImage}`}>
              <img src="/ServiceDetailProcesImage/LeftImage.svg" alt="Image" />
              <div className={`${styles.posFrame}`}></div>
            </div>
            <div className={`${styles.rightImage}`}>
              <img src="/ServiceDetailProcesimage/rightTop.svg" alt="Image" />
              <img
                src="/ServiceDetailProcesimage/rightBottom.svg"
                alt="Image"
              />
              <img
                className={`${styles.positionImage}`}
                src="/ServiceDetailProcesImage/ServiceDetailProcesBg.svg"
                alt="Image"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceDetailProces;
