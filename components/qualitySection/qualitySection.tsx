import React from "react";
import styles from './qualitySection.module.scss'
import Link from "next/link";

export default function QualitySection() {

    return (
       <div className="container-fluid">
           <div className={styles.qualitySection}>
               <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-12`}>
                            <h2>Quality Policy</h2>
                            <p>We are committed to supply our customers with products of highest quality, timely delivery and effective customer service. We will achieve this by the process of continuous improvement and team work.
                                System approach Documentary activities include, APQP, PPAP for the developments.
                                Calibration for instruments and tractability for parts produced.
                                Also we look upon the below things to achieve consistent quality.
                                Internal audits, Preventive maintenance for machines and  monitoring of tool life.</p>
                        </div>
                    </div>
                   <div className={`row`}>
                       <div className={`col-md-6`}>
                           <h3>Quality instruments</h3>
                           <ul>
                               <li>Contour tracer</li>
                               <li>Profile projector</li>
                               <li>MPI machine</li>
                               <li>Roughness value measuring machine</li>
                               <li>Digital height gauge</li>
                               <li>Hardness tester</li>
                               <li>Portable coating thickness measuring machine</li>
                               <li>Meteorological lab</li>
                               <li>Microscope</li>
                           </ul>
                       </div>
                       <div className={`col-md-6`}>
                           <img src={`/images/quality.png`} width={`100%`}/>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}