import React from "react";
import styles from './facilitySection.module.scss'
import Link from "next/link";

export default function FacilitySection(facility: any) {
  

    return (
       <div className="container-fluid">
           <div className={styles.facilitieSection}>
               <div className={`container`}>
                {facility.facility.map((element: any, index: any)=>(
                   <div className={`row justify-content-center align-content-center`} key={index}>
                       <div className={`col-md-12 py-5`}>
                           <div className={(index % 2) == 0 ?`row justify-content-center align-items-center`: `row justify-content-center align-items-center flex-row-reverse`}>
                           <div className={`col-md-6`} dangerouslySetInnerHTML={{ __html: element.text }} />
                               <div className={`col-md-6`}>
                                   <div className={styles.facilityImage}>
                                        <img src={element.img} />
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   ))}
               </div>
           </div>
       </div>
    )
}