import CaseStudyLivePreview from "@/app/Components/CaseStudyLivePreview";
import styles from "./style.module.css";
import Image from "next/image";
import CaseStudyProject from "@/app/Components/CaseStudyProject";
import CaseStudySingleStoryboard from "@/app/Components/CaseStudySingleStoryboard";
import CaseStudyProjectResult from "@/app/Components/CaseStudyProjectResult";
import TeamSubscribe from "@/app/Components/TeamSubscribe";
import MoreCase from "@/app/Components/MoreCase";

export const metadata = {
  title: "Case",
  description: "Case Page",
  icons: {
    icon: "/metadataIcon/caseSingle.svg",
  },
};

async function fetchData(id) {
  const url = await fetch("/api/HomeProccess/" + id);
  const result = await url.json();
  return result;
}

const CaseStudySingle = async ({ params: { id } }) => {
  const data = await fetchData(id);
  return (
    <div>
      <div className={`${styles.marginDiv}`}>
        <div className={`${styles.bgDiv}`}>
          <div className="container">
            <div className={`${styles.containerDiv}`}>
              <p>Case Studies single</p>
              <h4>{data.name}</h4>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div style={{ padding: "3rem 0", margin: "0 auto" }}>
          <div className={`${styles.ImageDiv}`}>
            <Image src={data.fullImage} fill alt="Image" />
          </div>
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: "-50px",
                left: "50%",
                translate: "-50%",
                width: "100%",
              }}
            >
              <CaseStudyLivePreview data={data} />
            </div>
          </div>
          <div style={{ marginTop: "7rem" }}>
            <CaseStudyProject data={data} />
          </div>
          <div>
            <CaseStudySingleStoryboard data={data} />
          </div>
          <div>
            <CaseStudyProjectResult data={data} />
          </div>
          <div>
            <TeamSubscribe />
          </div>
          <div>
            <MoreCase />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudySingle;
