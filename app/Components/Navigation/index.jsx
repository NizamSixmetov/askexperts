"use client";

import Link from "next/link";
import styles from "./style.module.css";
import { FiPhone } from "react-icons/fi";
import MobileMenu from "../MobileMenu";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import handlePhoneClick from "../goPhone/goPhone";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Services", href: "/Services" },
  { name: "Licenses", href: "/Licenses" },
  { name: "Blog", href: "/Blog" },
  { name: "Contact", href: "/Contact" },
];

const Navigation = () => {
  const pathName = usePathname();

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const shouldBeScrolled = scrollTop > 10;
      setIsScrolled(shouldBeScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`${styles.scrollDiv} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={`${styles.bgDiv}`}>
        <div className="container">
          <div className={`${styles.flexDiv}`}>
            <div className={`${styles.left}`}>
              <Link href={"/"} prefetch={true}>
                <img src="/Navigation/LogoNavigation.svg" alt="logo" />
              </Link>
            </div>
            <div className={`${styles.center}`}>
              <div className={`${styles.linksDiv}`}>
                {navLinks.map((link) => {
                  const isActive = pathName === link.href;
                  return (
                    <ul key={link.name} className={`${styles.ul}`}>
                      <li
                        className={
                          isActive
                            ? `${styles.active} ${styles.li}`
                            : `${styles.li}`
                        }
                      >
                        <Link
                          prefetch={true}
                          href={link.href}
                          key={link.name}
                          className={
                            isActive ? `${styles.active}` : `${styles.aTag}`
                          }
                        >
                          {link.name}
                        </Link>
                      </li>
                    </ul>
                  );
                })}
              </div>
            </div>
            <div className={`${styles.right}`}>
              <button
                onClick={() => handlePhoneClick("+8884521505")}
                className={`${styles.button}`}
              >
                <i>
                  <FiPhone />
                </i>
                <p>+ (888) 452 1505</p>
              </button>
            </div>
            <div className={`${styles.toggleDiv}`}>
              <MobileMenu />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
