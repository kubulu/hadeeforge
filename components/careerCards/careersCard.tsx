import React from "react";
import styles from './careersCard.module.scss'
import Link from "next/link";

export default function CareersCard(career: any) {
    // console.log('Career=',career);
    return (
      <div>
          <div className={`row`}>
                {career.career.job_card.map((element: any, index: any)=>(
                    <div className={`col-md-6`}>  
                            <div className={styles.jobCards} key={index}>
                                <div className={styles.jobContent}>
                                    <div dangerouslySetInnerHTML={{ __html: element.content }} />
                                </div>
                            </div>  
                    </div>
                ))}
          </div>

          <div className={`row`}>
              <div className={`col-md-12`}>
                  <div className={styles.jobMain}>
                      <div dangerouslySetInnerHTML={{ __html: career.career.job_main }} />
                  </div>
              </div>
          </div>
      </div>
    )
}