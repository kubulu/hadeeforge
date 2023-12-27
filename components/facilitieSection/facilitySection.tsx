import React from "react";
import styles from './facilitySection.module.scss'
import Link from "next/link";

export default function FacilitySection() {

    return (
       <div className="container-fluid">
           <div className={styles.facilitieSection}>
               <div className={`container`}>
                   <div className={`row justify-content-center align-content-center`}>
                       <div className={`col-md-6`}>
                           <div className={`row justify-content-center`}>
                               <div className={`col-md-6`}>
                                   <h3>Cutting Line</h3>
                                   <p>Circular Sawing machines</p>
                               </div>
                               <div className={`col-md-6`}>
                                   <div className={styles.facilityImage}>

                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className={`col-md-6`}>
                           <div className={`row justify-content-center`}>
                               <div className={`col-md-6`}>
                                   <h3>Annealing Furnace (Steel)</h3>
                                   <p>Pit furnace capacity 100 Ton/Month</p>
                               </div>
                               <div className={`col-md-6`}>
                                   <div className={styles.facilityImage}>

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={`row justify-content-center align-content-center`}>
                       <div className={`col-md-6`}>
                           <div className={`row justify-content-center`}>
                               <div className={`col-md-6`}>
                                   <h3>Phosphatting Line</h3>
                                   <p>STEEL- Capacity 200 Ton/Month</p>
                                   <p>ALUMINUM - Capacity 50 Ton/Month</p>
                               </div>
                               <div className={`col-md-6`}>
                                   <div className={styles.facilityImage}>

                                   </div>
                               </div>
                           </div>
                       </div>

                       <div className={`col-md-6`}>
                           <div className={`row justify-content-center`}>
                               <div className={`col-md-6`}>
                                   <h3>Forging Unit</h3>
                                   <table>
                                       <tr>
                                           <td>Press Capacity</td>
                                           <td>No. of m/c</td>
                                       </tr>
                                       <tr>
                                           <td>500 Ton Hydraulic Press</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>300 Ton Hydraulic Press</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>200 Ton Hydraulic Press</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>100 Ton Hydraulic Press</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>450 Ton Mechanical Press</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>400 Ton Mechanical Press</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>300 Ton Mechanical Press</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>250 Ton Mechanical Press</td>
                                           <td>1</td>
                                       </tr>
                                   </table>
                               </div>
                               <div className={`col-md-6`}>
                                   <div className={styles.facilityImage}>

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
                   <div className={`row justify-content-center align-content-center`}>
                       <div className={`col-md-6`}>
                           <div className={`row justify-content-center`}>
                               <div className={`col-md-6`}>
                                   <h3>CNC Unit</h3>
                                   <table>
                                       <tr>
                                           <td>Galaxy 220</td>
                                           <td>No. of m/c</td>
                                       </tr>
                                       <tr>
                                           <td>LMW LL20T L3</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>LMW smart turn</td>
                                           <td>8</td>
                                       </tr>
                                       <tr>
                                           <td>Takamatsu</td>
                                           <td>1</td>
                                       </tr>
                                       <tr>
                                           <td>Okuma LSF 10</td>
                                           <td>1</td>
                                       </tr>

                                   </table>
                               </div>
                               <div className={`col-md-6`}>
                                    <div className={styles.facilityImage}>

                                    </div>
                               </div>
                           </div>
                       </div>

                       <div className={`col-md-6`}>
                           <div className={`row justify-content-center`}>
                               <div className={`col-md-6`}>
                                   <h3>Tool Room</h3>
                                   <ul>
                                       <li>Conventional lathe.</li>
                                       <li>Surface grinding machine.</li>
                                       <li>Cylindrical grinding machine.</li>
                                       <li>Drilling machine</li>
                                       <li>Polishing machine.</li>
                                   </ul>
                                   <p>Facilities to be added, EDM ( Sparking) Machine.</p>
                               </div>
                               <div className={`col-md-6`}>
                                   <div className={styles.facilityImage}>

                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}