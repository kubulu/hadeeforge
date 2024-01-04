import React from "react";
import styles from './qualitySection.module.scss'
import Link from "next/link";

export default function QualitySection(quality: any) {
    console.log('QUALITY==',quality);

    return (
       <div className="container-fluid">
           <div className={styles.qualitySection}>
               <div className={`container`}>
                    <div className={`row`}>
                        <div className={`col-md-12`}>
                            <h2> {quality.quality.quality.title} </h2>
                            <p> {quality.quality.quality.content} </p>
                        </div>
                    </div>
                   <div className={`row`}>
                       <div className={`col-md-6`}>
                           <h3> {quality.quality.title} </h3>
                           <ul>
                                {quality.quality.list.map((element: any, index: any)=>(
                                <li> {element.name} </li>
                                ))}  
                           </ul>
                       </div>
                       <div className={`col-md-6`}>
                           <img src={quality.quality.img} width={`100%`}/>
                       </div>
                   </div>
               </div>
           </div>
       </div>
    )
}