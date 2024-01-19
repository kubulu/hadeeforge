import React from "react";
import styles from './aboutContent.module.scss'
import Link from "next/link";

export default function AboutContent(aboutContent: any) {
    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center align-items-center`}>
                    <div className={`col-md-8 pt-5 pb-5`}>
                        <h3> {aboutContent.aboutContent.text} </h3>
                        <h3>HADEE FORGINGS and GUNMA SEIKO CO., LTD. (Japan) have a technical support contract for forging, machining and quality.</h3>
                        <h3>The unit is ISO 9001-2015 & IATF 16949 certified Company.</h3>
                        <h3>We are approved by Maruthi Suzuki as a green channel supplier</h3>
                        <h3>All our furnaces are calibrated as per CQI-9. </h3>
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