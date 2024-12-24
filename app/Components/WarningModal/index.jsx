"use client";
import { useEffect } from "react";
import styles from "./styles.module.css";

const index = () => {
  useEffect(() => {
    const modalButton = document.querySelector(`.${styles.modalWindowClose}`);
    const modalWindow = document.querySelector(`.${styles.modalWindow}`);

    modalButton?.addEventListener("click", () => {
      modalWindow.style.display = "none";
    });
  }, []);
  return (
    <div className={styles.modalWindow}>
      <p>
        Frontend və Backend Vercel vasitəsi ilə yükləndiyi üçün saytın
        yüklənməsində gecikmə ola bilər. Xahiş edirəm bir az səbirli olasınız.
      </p>
      <button className={styles.modalWindowClose}>
        &#x2715;
      </button>
    </div>
  );
};

export default index;
