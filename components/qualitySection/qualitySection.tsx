import React from "react";
import styles from './qualitySection.module.scss'
import Link from "next/link";

export default function QualitySection(quality: any) {
   

    return (
       <div className="container-fluid">
           <div className={styles.qualitySection}>
               <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-12`}>
                            <h2> {quality.quality.title} </h2>
                            <p> {quality.quality.text} </p>
                        </div>
                    </div>
                   <div className={`row justify-content-center align-items-center`}>
                       <div className={`col-md-6`}>
                           <div dangerouslySetInnerHTML={{ __html: quality.quality.text_list }} />
                       </div>
                       <div className={`col-md-6`}>
                           <div className={styles.qualityImg}>
                                <img src={quality.quality.img} width={`100%`} alt="image"/>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
           <div className={styles.certificate}>
               <h3>Awards and Certification</h3>
              <img src={`/images/certificate-full.png`} />
           </div>
       </div>
    )
}