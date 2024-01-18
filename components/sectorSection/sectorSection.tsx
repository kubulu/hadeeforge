import React from "react";
import styles from './sectorSection.module.scss'
import Link from "next/link";

export default function SectorSection(sector: any) {
   

    return (
       <div className={`container-fluid`}>
           <div className={styles.sectorSection}>
               <div className={`row`}>
                    {sector.sector.map((element: any, index: any)=>(
                        <div className={`col-md-4`} key={index}>
                            <div className={styles.sectorCard}>
                                <div className={`img`}><img src={element.icon} alt="image"/> </div>
                                <div>
                                    <h3> {element.title} </h3>
                                    <p> {element.text} </p>
                                    <Link href={element.link}><img src={`/images/more.svg`} alt="arrow"/> </Link>
                                </div>
                            </div>
                        </div>
                    ))}
               </div>
               
           </div>

       </div>
    )
}