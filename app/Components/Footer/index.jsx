import Link from "next/link";
import styles from "./style.module.css";
import { TbPointFilled } from "react-icons/tb";
import LocationLinkFooter from "../goLocationFooter/LocationLinkFooter";

const Footer = () => {
  return (
    <div className={`${styles.bgDiv}`}>
      <div className="container">
        <div className={`${styles.baseFlex}`}>
          <div className={`${styles.icon}`}>
            <Link href={"/"} prefetch>
              <img src="/Navigation/LogoNavigation.svg" alt="Logo" />
            </Link>
            <div className={`${styles.socialDiv}`}>
              <Link href={"https://facebook.com"} target="_blank">
                Fb.
              </Link>
              <Link href={"https://whatsapp.com"} target="_blank">
                {" "}
                /lg.
              </Link>
              <Link href={"https://twitter.com"} target="_blank">
                {" "}
                /Tw.
              </Link>
              <Link href={"https://linkedin.com"} target="_blank">
                {" "}
                /Be.
              </Link>
            </div>
          </div>
          <div className={`${styles.centerLine}`}></div>
          <div className={`${styles.info}`}>
            <div className={`${styles.left}`}>
              <h4>Product</h4>
              <div className={`${styles.bottomLine}`}></div>
              <ul className={`${styles.ul}`}>
                <li className={`${styles.li}`}>
                  <i>
                    <TbPointFilled />
                  </i>
                  <Link href={"/Services"} prefetch> Service</Link>
                </li>
                <li className={`${styles.li}`}>
                  <i>
                    <TbPointFilled />
                  </i>
                  <Link href={`/FAQ`} prefetch>FAQ</Link>
                </li>
                <li className={`${styles.li}`}>
                  <i>
                    <TbPointFilled />
                  </i>
                  <Link href={"/error"} prefetch>Single Service</Link>
                </li>
                <li className={`${styles.li}`}>
                  <i>
                    <TbPointFilled />
                  </i>
                  <Link href={"/Quote"} prefetch>Get Quote</Link>
                </li>
                <li className={`${styles.li}`}>
                  <i>
                    <TbPointFilled />
                  </i>
                  <Link href={"/Pricing"} prefetch>Prices</Link>
                </li>
              </ul>
            </div>
            <div className={`${styles.center}`}>
              <div className={`${styles.left}`}>
                <h4>Company</h4>
                <div className={`${styles.bottomLine}`}></div>
                <ul className={`${styles.ul}`}>
                  <li className={`${styles.li}`}>
                    <i>
                      <TbPointFilled />
                    </i>
                    <Link href={"/About"} prefetch> About</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i>
                      <TbPointFilled />
                    </i>
                    <Link href={"/Blog"} prefetch>News</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i>
                      <TbPointFilled />
                    </i>
                    <Link href={"/Contacts"} prefetch>Contacts</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i>
                      <TbPointFilled />
                    </i>
                    <Link href={"/Services"} prefetch>Testimonials</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i>
                      <TbPointFilled />
                    </i>
                    <Link href={"/Team"} prefetch>Our team</Link>
                  </li>
                  <li className={`${styles.li}`}>
                    <i>
                      <TbPointFilled />
                    </i>
                    <Link href={"/About"} prefetch>Our approach</Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className={`${styles.right}`}>
              <div className={`${styles.left}`}>
                <h4>Address</h4>
                <div className={`${styles.bottomLineAddress}`}></div>
                <div className={`${styles.compStyle}`}>
                  <LocationLinkFooter />
                </div>
                <Link href={"/Contact"} prefetch>Book an Appoinment</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.privacyPolicy}`}>
          <div className={`${styles.privacyPolicyLine}`}></div>
          <p>
            ©2022 Consultalk. All rights reserved | Terms of Service | Privacy
            Policy
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
