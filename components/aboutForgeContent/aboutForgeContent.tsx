import React from "react";
import styles from './aboutForgeContent.module.scss'
import Link from "next/link";

export default function AboutForgeContent() {

    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center`}>
                    <div className={`col-8 text-center pt-5 pb-5`}>
                        <h3>Hadee forgings pvt.ltd (HFPL) is a precision cold forging company established in the year 2015, located at Jakkasandra industrial area (Adj. to Honda motorcycles and scooters  mfg plant) in Narsapura ind. Area  Kolar. Plant location has land area of 88000 Sq. feet and built up area of 40000 Sq. feet.
                        </h3>
                    </div>
                </div>
               <div className={`row pb-5`}>
                   <div className={`col-md-6`}>
                       <div className={styles.aboutCard}>
                           <h3>Partnership</h3>
                           <p>Developing strategic partnership with the customer to achieve common goals and provide best value for money.</p>
                       </div>
                   </div>
                   <div className={`col-md-6`}>
                       <div className={styles.aboutCard}>
                           <h3>Hadee Team</h3>
                           <p>A team of dedicated professionals with combined cold forging experience of more than 50 years. HFPL provides continuous training to employees to achieve good quality and less PPM.</p>
                       </div>
                   </div>
                   <div className={`col-md-6`}>
                       <div className={styles.aboutCard}>
                           <h3>Quality</h3>
                           <p>We are committed to supply our customers with products of highest quality, timely delivery and effective customer service. We will achieve this by the process of continuous improvement and team work.</p>
                       </div>
                   </div>
                   <div className={`col-md-6`}>
                       <div className={styles.aboutCard}>
                           <h3>Why US</h3>
                           <p>Highly robust quality systems with a lot of emphasis on transparency, traceability, 4M change management & the philosophy of zero defect. We are working with OEM’s on the basis of KANBAN & supplier managed inventory
                           </p>
                       </div>
                   </div>

               </div>

           </div>
       </div>
    )
}