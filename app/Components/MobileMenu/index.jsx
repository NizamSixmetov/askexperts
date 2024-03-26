'use client'

import { useState } from 'react';
import styles from './style.module.css';
import { IoRadioButtonOn } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/About" },
  { name: "Services", href: "/Services" },
  { name: "Licenses", href: "/Licenses" },
  { name: "Blog", href: "/Blog" },
  { name: "Contact", href: "/Contact" }
];


const MobileMenu = () => {

  const pathName = usePathname();

  const [isOpen, setIsOpen] = useState();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }
  return (
    <div className={`${styles.first}`}>
      <div className={`${styles.toggleDiv}`}>
        <button onClick={() => {
          toggleMenu();
        }}><IoRadioButtonOn /></button>
        <div className={isOpen ? `${styles.flexDiv} ${styles.mobileMenu}` : ""}>
          {
            isOpen && (
              <div className={`container ${styles.font}`}>
                <div className={`${styles.buttonDiv}`}>
                  <button onClick={toggleMenu}>
                    <i><IoRadioButtonOn /></i>
                  </button>
                </div>
                <div>
                  <div className={`${styles.mobileSocial}`}>
                    <Link href={'https://www.instagram.com'} target='_blank'>
                      <IoLogoInstagram />
                    </Link>
                    <Link href={'https://www.facebook.com'} target='_blank'>
                      <FaFacebook />
                    </Link>
                    <Link href={'https://www.twitter.com'} target='_blank'>
                      <FaTwitter />
                    </Link>
                    <Link href={'https://www.linkedin.com'} target='_blank'>
                      <FaLinkedin />
                    </Link>
                  </div>
                  <div className={`${styles.navDiv}`}>
                    {
                      navLinks.map((link) => {
                        const isActive = pathName === link.href;
                        return (
                          <ul key={link.name} className={`${styles.ul}`}>
                            <li className={isActive ? `${styles.active} ${styles.li}` : `${styles.li}`}>
                              <Link
                                onClick={() => { toggleMenu() }}
                                href={link.href}
                                key={link.name}
                                className={isActive ? `${styles.active}` : `${styles.aTag}`}>
                                {link.name}
                              </Link>
                            </li>
                          </ul>
                        )
                      })
                    }
                  </div>
                </div>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
};

export default MobileMenu;