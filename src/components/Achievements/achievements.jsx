import React from "react";

import styles from "./achievements.module.css";
import { getImageUrl } from "../../utils";

export const Achievements = () => {
  return (
    <section className={styles.container} id="Achievements">
      <h2 className={styles.title}>Achievements & Certifications</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("achievements/Achievements-modified.png")}
          alt="Acheivement Image"
          className={styles.achievementsImage}
        />
        <ul className={styles.achievementsItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Secured a place in Top 10 among 25 Teams in college that participated in the Smart India Hackathon.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Gained Fin-Tech Engineering Virtual Experience Program Certification from a program offered by Goldman Sachs Organization
                where we had to assess the level of protection offered by implemented controls and minimize the probability of a successful breach.
                <div className={styles.button}>
                  <a
                    href="https://forage-uploads-prod.s3.amazonaws.com/completion-certificates/Goldman%20Sachs/NPdeQ43o8P9HJmJzg_Goldman%20Sachs_3iRpvaaNWd6btkSwD_1667418861172_completion_certificate.pdf"
                    className={styles.contactBtn}
                  >
                    Completion Certificate
                  </a>
                </div>
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Won Institute Level Hackathon and Qualified for Regional level of Solving For India Hackathon organized by GeeksForGeeks x Google Cloud
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <p>
                Contributor in HacktoberFest with 8 successful PRs in various repositories.
                <div className={styles.button}>
                  <a
                    href="https://www.holopin.io/@kintsugi_me#badges"
                    className={styles.contactBtn}
                  >
                    Completion Badges
                  </a>
                </div>
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
