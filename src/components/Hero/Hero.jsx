import React, { useEffect, useState } from "react";
import Lottie from "lottie-react";
import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";
import animationData from "./animation.json";
import animationData1 from "./Animation_1.json";

export const Hero = () => {
  // Function will execute on click of button

  const [aniWidth, setAniWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", () => {
      setAniWidth(window.innerWidth);
    });
  }, []);

  const onButtonClick = () => {

    //   // using Java Script method to get PDF file
    fetch("https://drive.google.com/file/d/1pfKsTK059OHAFvVe9qPEOMmwqsNwQZnd/view").then((response) => {
      response.blob().then((blob) => {

        // Creating new object of PDF file
        const fileURL =
          window.URL.createObjectURL(blob);

        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "Resume (Dhruv Srivastava).pdf";
        alink.click();
      });
    });
  };
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Dhruv Srivastava</h1>
        <p className={styles.description}>
          <ul>
            <li>
              I'm a Full-Stack Developer with 2 years of experience using React and
              NodeJS.
            </li>
            <li>
              I'm passionate about building Scalable and Maintainable web applications.
            </li>
            <li>
              I'm currently looking for new opportunities.
            </li>
          </ul>
        </p>
        <div className={styles.links}>
          <a href="/Dhruv_Srivastava_Resume.pdf" className={styles.contactBtn}  >
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            Resume
          </a>
          {/* <input type="button" id="btn" value="Download" /> */}
          {/* <a href="mailto:myemail@email.com" className={styles.contactBtn}>
            Contact Me via Mail
          </a>
          <a href="https://www.linkedin.com/in/dhruv-srivastava-296786228/" className={styles.contactBtn}>
            Connect with me on LinkedIn
          </a> */}
        </div>
      </div>
      {/* <img
        src={getImageUrl("hero/heroImage.JPG")}
        alt="Hero image of me"
        className={styles.heroImg}
      /> */}
      {aniWidth > 768 ?
        <div className={styles.animation}>
          {/* <Lottie animationData={animationData} /> */}
          <Lottie animationData={animationData1} />
        </div> : <></>}
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
