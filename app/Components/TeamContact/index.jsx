"use client";

import Link from "next/link";
import styles from "./style.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineError } from "react-icons/md";
import { useState } from "react";

const TeamContact = () => {
  const notify = () => {
    toast("Information Sent", {
      duration: 2000,
      position: "bottom-right",
      style: { color: "green", fontSize: "20px" },
      icon: <FaCircleCheck />,
    });
  };

  const ErrorNotify = () => {
    toast("Enter your Email", {
      duration: 2000,
      position: "bottom-right",
      style: { color: "red", fontSize: "20px" },
      icon: <MdOutlineError />,
    });
  };

  const [email, setEmail] = useState("");
  const checkInput = () => {
    if (email.trim() === "") {
      ErrorNotify();
      return;
    }
    setEmail("");

    checkFullInput();
  };

  function checkFullInput() {
    if (email.trim !== "") {
      notify();
    }
  }

  return (
    <div className="container">
      <div className={`${styles.paddingDiv}`}>
        <div className={`${styles.flex}`}>
          <div className={`${styles.left}`}>
            <p className={`${styles.topP}`}>Contact</p>
            <h4>Ready To Talk?</h4>
            <p className={`${styles.bottomP}`}>
              Posuere sollicitudin aliquam ultrices sagittis orci a scelerisque.
              Massa placerat duis ultricies lacus sed turpis. Pellentesque
              pellentesque habitant morbi tristique.
            </p>
            <div className={`${styles.form}`}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your email address"
              />
              <button onClick={() => checkInput()}>Send Message</button>
              <Toaster />
            </div>
          </div>
          <div className={`${styles.right}`}>
            <img
              className={`${styles.relIMage}`}
              src="/TeamContactImage/TeamContactBg.svg"
              alt="Image"
            />
            <img
              className={`${styles.posImage}`}
              src="/TeamContactImage/Pattern.svg"
              alt="Image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamContact;
