import React from "react";
import styles from './aboutContent.module.scss'
import Link from "next/link";

export default function AboutContent(aboutContent: any) {
    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center`}>
                    <div className={`col-8 text-center pt-5 pb-5`}>
                        <h3> {aboutContent.aboutContent.text} </h3>
                    </div>
                </div>
                <div className={`row pb-5`}>
                    {aboutContent.aboutContent.about_card.map((element: any, index: any)=>(
                        <div className={`col-md-6`} key={index}>
                            <div className={styles.aboutCard} dangerouslySetInnerHTML={{ __html: element.text }}/>   
                        </div>
                        ))}
                </div>
           </div>
       </div>
    )
}