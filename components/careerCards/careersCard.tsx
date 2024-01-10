import React from "react";
import styles from './careersCard.module.scss'
import Link from "next/link";

export default function CareersCard() {
    return (
      <div>
          <div className={`row`}>
              <div className={`col-md-6`}>
                  <div className={styles.jobCards}>
                      <div className={styles.jobContent}>
                          <h5>Design Engineer</h5>
                          <ul>
                              <li>BE or Diploma in mechanical or automobile engineering.</li>
                              <li>0-3 years or fresher with AutoCAD knowledge.</li>
                              <li>AutoCAD knowledge is must PPAP, APQP, IATF requirements, engineering documents, experience in cold forging or sheet metal components for automotive & aerospace application will be added advantage.</li>
                          </ul>
                      </div>
                  </div>

              </div>
              <div className={`col-md-6`}>
                  <div className={styles.jobCards}>
                      <div className={styles.jobContent}>
                          <h5>Design Executive</h5>
                          <ul>
                              <li>BE or Diploma in mechanical or automobile engineering.</li>
                              <li>0-3 years or fresher with AutoCAD knowledge.</li>
                              <li>AutoCAD knowledge is must PPAP, APQP, IATF requirements, engineering documents, experience in cold forging or sheet metal components for automotive & aerospace application will be added advantage.</li>
                          </ul>
                      </div>
                  </div>

              </div>
          </div>

          <div className={`row`}>
              <div className={`col-md-12`}>
                  <div className={styles.jobMain}>
                      <h3>Hadee Forge creates an environment that is harmonious and versatile allowing every employee to express their creative spirits, thereby enabling their growth. If you are looking to grow with us just drop in a line at</h3>
                      <a href={`mailto:sales@hadeeforge.in`}>sales@hadeeforge.in</a>
                  </div>
              </div>
          </div>

      </div>
    )
}