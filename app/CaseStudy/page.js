"use client";

import PageCap from "../Components/PageCap";
import styles from "./style.module.css";
import Image from "next/image";
import { FaPlus } from "react-icons/fa6";
import Link from "next/link";
import HomeContact from "../Components/HomeContact";
import { useEffect, useState } from "react";
import axios from "axios";

const url = "http://localhost:3000/api/HomeProccess";

const CaseStudy = () => {
  const [products, setProducts] = useState([]);
  const [selectedCategory, setSelectCategory] = useState("");
  const [error, setError] = useState("Bele bir Product yoxdur");

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(url);
      setProducts(response.data);
    };
    fetchData();
  }, []);

  const handleCategoryClick = (category) => {
    setSelectCategory(category);
  };

  const filteredProduct = products.filter(
    (product) => product.category === selectedCategory || !selectedCategory
  );

  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <PageCap pElemnt={"Case Studies"} h2Element={"Case Studies"} />
          </div>
        </div>
      </div>
      <div className="container">
        <div className={`${styles.filterPadding}`}>
          <div className={`${styles.filterBg}`}>
            <div className={`${styles.topFilter}`}>
              <button
                onClick={() => handleCategoryClick("")}
                className={`${selectedCategory === "" ? styles.topActive : ""}`}
              >
                All
              </button>
              <button
                onClick={() => handleCategoryClick("Taxes&Efficiency")}
                className={`${
                  selectedCategory === "Taxes&Efficiency"
                    ? styles.topActive
                    : ""
                }`}
              >
                Taxes & Efficiency
              </button>
              <button
                onClick={() => handleCategoryClick("InvestmentBanking")}
                className={`${
                  selectedCategory === "InvestmentBanking"
                    ? styles.topActive
                    : ""
                }`}
              >
                Investment banking
              </button>
            </div>
            <div className={`${styles.bottomFilter}`}>
              <button
                onClick={() => handleCategoryClick("FinancialPlan")}
                className={`${
                  selectedCategory === "FinancialPlan"
                    ? styles.bottomActive
                    : ""
                }`}
              >
                Financial Plan
              </button>
              <button
                onClick={() => handleCategoryClick("Audit&Evaluation")}
                className={`${
                  selectedCategory === "Audit&Evaluation"
                    ? styles.bottomActive
                    : ""
                }`}
              >
                Audit & Evaluation
              </button>
            </div>
          </div>
        </div>
        <div className={`${styles.allCase}`}>
          {filteredProduct.length > 0 ? (
            filteredProduct.map((product) => (
              <div className={`${styles.cardDiv}`} key={product.id}>
                <div className={`${styles.imageDiv}`}>
                  <Image src={product.image} fill alt="CardImage" />
                  <div className={`${styles.displayDiv}`}>
                    <h5>{product.name}</h5>
                    <p>{product.description}</p>
                    <Link href={`/CaseStudy/${product.id}`}>
                      <FaPlus />
                    </Link>
                  </div>
                </div>
              </div>
            ))
          ) : (
            <h2
              style={{
                display: "flex",
                justifyContent: "center",
                margin: "0 auto",
                padding: "1rem",
                color: "#ffcc4a",
              }}
            >
              Not found Case
            </h2>
          )}
        </div>
      </div>
      <div className={`${styles.contactPadding}`}>
        <HomeContact />
      </div>
    </div>
  );
};

export default CaseStudy;
