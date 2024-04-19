"use client";
import { useState } from "react";
import styles from "./style.module.css";
import toast, { Toaster } from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { MdOutlineError } from "react-icons/md";

const TeamSubscribe = () => {
  const notify = () => {
    toast("Information sent", {
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
    if (email.trim() !== "") {
      notify();
    }
  }

  return (
    <div className="container">
      <div className={`${styles.paddingDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className={`${styles.flex}`}>
            <div className={`${styles.left}`}>
              <h4>Subscribe Our Newsletter</h4>
              <p>Build stronger Customer Relationships with Consultalk</p>
            </div>
            <div className={`${styles.right}`}>
              <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                type="email"
                placeholder="your email address"
              />
              <button onClick={() => checkInput()}>Subscribe</button>
              <Toaster />
              <img src="/TeamSubscribeImage/teamSubscribeBg.svg" alt="Image" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamSubscribe;
