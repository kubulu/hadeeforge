import React from "react";
import styles from './aboutForgeContent.module.scss'
import Link from "next/link";

export default function AboutForgeContent() {

    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center`}>
                    <div className={`col-8 text-center pt-5 pb-5`}>
                        <h1>About Cold Forging</h1>
                        <h3>Cold forging is a process of plastically deforming unheated metals into wide variety of shaped parts by controlled flow technique. This is done at room temperature by the application of force. Any material with a fair degree of ductility (elongation% > 30) and Low strain-hardening rate can be easily cold forged.
                        </h3>
                    </div>
                </div>
               <div className={`row pb-5`}>
                   <div className={`col-md-6`}>
                       <div className={styles.aboutCard}>
                           <h3>High Quality Product with better properties:</h3>
                           <ul>
                               <li>Excellent surface finish</li>
                               <li>Better grain flow structure</li>
                               <li>Better fatigue properties</li>
                               <li>Very less subsequent machining required</li>
                               <li>Very close tolerances achieved</li>
                               <li>Increased strength & durability</li>
                               <li>Higher productivity</li>
                           </ul>
                       </div>
                   </div>
                   <div className={`col-md-6`}>
                       <div className={styles.aboutCard}>
                           <h3>Good overall cost saving</h3>
                           <ul>
                               <li>Tremendous savings of material (near net shape)</li>
                               <li>Requires less Raw Material</li>
                               <li>Possible use of low cost material</li>
                               <li>Energy cost saving over hot forging</li>
                               <li>Replacement of assemblies with single components</li>
                               <li>Simplified Processing</li>
                           </ul>
                       </div>
                   </div>

               </div>

           </div>
       </div>
    )
}