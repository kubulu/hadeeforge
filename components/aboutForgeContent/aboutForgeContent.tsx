import React from "react";
import styles from './aboutForgeContent.module.scss'
import Link from "next/link";

export default function AboutForgeContent(aboutForge: any) {

    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center`}>
                    <div className={`col-md-8 text-center pt-5 pb-5`}>
                    <div dangerouslySetInnerHTML={{ __html: aboutForge.aboutForge.text }} />
                    </div>
                </div>
               <div className={`row pb-5`}>
                    {aboutForge.aboutForge.card.map((element: any, index: any)=>(
                    <div className={`col-md-6`} key={index}>
                        <div className={styles.aboutCard}>
                            <div dangerouslySetInnerHTML={{ __html: element.content }}/>
                        </div>
                    </div>
                    ))}
               </div>
               <div className={`row`}>
                   <div className={`col-md-12 mb-5`}>
                   <div dangerouslySetInnerHTML={{ __html: aboutForge.aboutForge.table }} /> 
                   </div>
               </div>
           </div>
       </div>
    )
}