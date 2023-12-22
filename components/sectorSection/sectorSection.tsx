import React from "react";
import styles from './sectorSection.module.scss'
import Link from "next/link";

export default function SectorSection() {

    return (
       <div className={`container-fluid`}>
           <div className={styles.sectorSection}>
               <div className={`row`}>
                   <div className={`col-md-3`}>
                       <div className={styles.sectorCard}>
                           <div className={`img`}><img src={`/images/icon-1.svg`}/> </div>
                           <div>
                               <h3>Automotive</h3>
                               <p>We are a precision cold forging company headquartered</p>
                               <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                           </div>
                       </div>
                   </div>
                   <div className={`col-md-3`}>
                       <div className={styles.sectorCard}>
                           <div className={`img`}><img src={`/images/icon-1.svg`}/> </div>
                           <div>
                               <h3>Automotive</h3>
                               <p>We are a precision cold forging company headquartered</p>
                               <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                           </div>
                       </div>
                   </div>
                   <div className={`col-md-3`}>
                       <div className={styles.sectorCard}>
                           <div className={`img`}><img src={`/images/icon-1.svg`}/> </div>
                           <div>
                               <h3>Automotive</h3>
                               <p>We are a precision cold forging company headquartered</p>
                               <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                           </div>
                       </div>
                   </div>
                   <div className={`col-md-3`}>
                       <div className={styles.sectorCard}>
                           <div className={`img`}><img src={`/images/icon-1.svg`}/> </div>
                           <div>
                               <h3>Automotive</h3>
                               <p>We are a precision cold forging company headquartered</p>
                               <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                           </div>
                       </div>
                   </div>
               </div>
           </div>

       </div>
    )
}