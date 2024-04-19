"use client";
import styles from "./style.module.css";
import { FiPhone } from "react-icons/fi";
import { IoTimeOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import handlePhoneClick from "../goPhone/goPhone";
import LocationLink from "../goLocation/LocationLink";
import toast, { Toaster } from "react-hot-toast";
import { FaCircleCheck } from "react-icons/fa6";
import { useState } from "react";
import { MdOutlineError } from "react-icons/md";

const notify = () => {
  toast("Information sent", {
    duration: 2000,
    position: "bottom-right",
    style: { color: "green", fontSize: "20px" },
    icon: <FaCircleCheck />,
  });
};

const ErrorNotify = () => {
  toast("Fill in the blank cells", {
    duration: 2000,
    position: "bottom-right",
    style: { color: "red", fontSize: "20px" },
    icon: <MdOutlineError />,
  });
};

const HomeContact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [company, setCompany] = useState("");

  const checkInput = () => {
    if (
      name.trim() === "" ||
      email.trim() === "" ||
      phone.trim() === "" ||
      message.trim() === "" ||
      company.trim() === ""
    ) {
      ErrorNotify();

      return;
    }

    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setCompany("");

    checkFullInput();
  };

  function checkFullInput() {
    if (
      name.trim() !== "" ||
      email.trim() !== "" ||
      phone.trim() !== "" ||
      message.trim() !== "" ||
      company.trim() !== ""
    ) {
      notify();
    }
  }

  return (
    <div className="container">
      <div className={`${styles.flexBase}`}>
        <div className={`${styles.leftDiv}`}>
          <p>Proccess</p>
          <div className={`${styles.capDiv}`}>
            <h3>Contact Us. It’s Easy.</h3>
            <p>
              Leverage agile frameworks to provide a robust synopsis for high
              level overviews. Iterative approaches to corporate strategy foster
              collaborative.
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
                  <p onClick={() => handlePhoneClick("+1800100900")}>
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
                  <LocationLink />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={`${styles.rightDiv}`}>
          <form className={`${styles.form}`}>
            <div className={`${styles.firstInput}`}>
              <div className={`${styles.fullName}`}>
                <p>Full Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="john david"
                  required
                />
              </div>
              <div className={`${styles.fullName}`}>
                <p>Email</p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="consult@mail.com"
                  required
                />
              </div>
            </div>
            <div className={`${styles.firstInput}`}>
              <div className={`${styles.fullName}`}>
                <p>Phone</p>
                <input
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  type="number"
                  pattern="^\+7[1-9]{10}$"
                  required
                  placeholder="+008 654 231"
                  maxLength={18}
                  minLength={10}
                />
              </div>
              <div className={`${styles.fullName}`}>
                <p>Company(optional)</p>
                <input
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
                  type="text"
                  placeholder="yourcompany.com"
                  required
                />
              </div>
            </div>
            <div className={`${styles.messageInput}`}>
              <p>Message</p>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                cols="30"
                rows="10"
                placeholder="Briefly tell us about your project and your current goals. How can we help you?"
                required
              ></textarea>
            </div>
            <button type="button" onClick={() => checkInput()}>
              Send Message
            </button>
            <Toaster />
          </form>
        </div>
      </div>
    </div>
  );
};

export default HomeContact;
