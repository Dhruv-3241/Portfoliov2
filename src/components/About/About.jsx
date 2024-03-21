import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/Professional_Photo.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img
              src={getImageUrl("about/iiitbh_logo.png")}
              alt="College Logo"
              className={styles.collegelogo}
            />
            <div className={styles.aboutItemText}>
              <h3>Education</h3>
              <p>
                I am a 3rd year undergrad student studying B.Tech in Computer Science and Engineering from Indian Institute of Information Technology, Bhagalpur.
              </p>
              <br/>
              <p>
                Current CGPA: 8.55 (Absolute Grading)
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" className={styles.img} />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" className={styles.img} />
            <div className={styles.aboutItemText}>
              <h3>Blockchain Developer</h3>
              <p>
                I have experience in developing smart and secure smart contracts using Solidity
              </p>
            </div>
          </li>
          {/* <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I am trying to gain some experience in developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li> */}
        </ul>
      </div>
    </section>
  );
};
