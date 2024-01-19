import React from "react";
import styles from './aboutContent.module.scss'
import Link from "next/link";

export default function AboutContent(aboutContent: any) {
    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center align-items-center`}>
                    <div className={`col-md-8  pt-5 pb-5`}>
                        <div dangerouslySetInnerHTML={{ __html: aboutContent.aboutContent.text }} />
                    </div>
                    <div className={`col-md-4 pt-5 pb-5`}>
                        <img src={`/images/about.png`} />
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