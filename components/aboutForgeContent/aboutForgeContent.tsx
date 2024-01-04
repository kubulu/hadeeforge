import React from "react";
import styles from './aboutForgeContent.module.scss'
import Link from "next/link";

export default function AboutForgeContent(aboutForge: any) {
    // console.log('AbtForge==',aboutForge);

    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center`}>
                    <div className={`col-8 text-center pt-5 pb-5`}>
                        <h1> {aboutForge.aboutForge.title} </h1>
                        <h3> {aboutForge.aboutForge.content} </h3>
                    </div>
                </div>
               <div className={`row pb-5`}>
                    {aboutForge.aboutForge.about_card.map((element: any, index: any)=>(
                    <div className={`col-md-6`} key={index}>
                        <div className={styles.aboutCard}>
                            <h3> {element.title} </h3>
                            <ul>
                                {element.text.map((ele: any, ind:any)=>(
                                    <li key={ind}> {ele.list} </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    ))}
               </div>
           </div>
       </div>
    )
}