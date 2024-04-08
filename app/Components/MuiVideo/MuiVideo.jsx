// "use client";
// import { useState } from "react";
// import TheVideo from "@Video/DaDoSeideBaby.mp4";
import styles from "./style.module.css";

const MuiVideo = ({ src }) => {
  // const [isPlaying, setIsPlaying] = useState(false);

  // const togglePlay = () => {
  //   setIsPlaying(!isPlaying);
  // };

  return (
    <div className={`${styles.containerDiv}`} style={{ margin: "1rem" }}>
      <iframe
        // width="560"
        // height="315"
        src="https://www.youtube.com/embed/ZlQzaehW-zo?si=0Lo45t9OOnJcl71I"
        // title="YouTube video player"
        frameBorder="0"
        allow="autoplay; encrypted-media"
        // referrerpolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <video src="/"></video>
    </div>
    // <div style={{ margin: "1rem" }}>
    //   <video width={700} height={450} controls>
    //     <source src="/Video/DaDoSeideBaby.mp4" type="video/mp4" />
    //   </video>
    // </div>
    // <div
    //   style={{
    //     position: "relative",
    //     maxWidth: "50%",
    //     overflow: "hidden",
    //     paddingTop: "20%",
    //     borderRadius: "2rem",
    //     margin: "1rem auto",
    //   }}
    // >
    //   <div
    //     style={{
    //       position: "absolute",
    //       top: 0,
    //       left: 0,
    //       width: "100%",
    //       height: "100%",
    //     }}
    //   >
    //     {isPlaying ? (
    //       <iframe
    //         src={src}
    //         width="100%"
    //         height="100%"
    //         frameBorder="0"
    //         allowFullScreen
    //         style={{ position: "absolute", top: 0, left: 0 }}
    //       ></iframe>
    //     ) : (
    //       <img
    //         src="/Video/Play.svg"
    //         alt="Play Button"
    //         style={{
    //           cursor: "pointer",
    //           position: "absolute",
    //           top: "50%",
    //           left: "50%",
    //           transform: "translate(-50%, -50%)",
    //           width: "30%",
    //           background:"red",
    //           borderRadius:"2rem"
    //         }}
    //         onClick={togglePlay}
    //       />
    //     )}
    //   </div>
    // </div>
  );
};

export default MuiVideo;
