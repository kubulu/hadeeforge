import React from "react";
import styles from './aboutSection.module.scss'
import Link from "next/link";

export default function AboutSection() {

    return (
       <div className="container-fluid">
           <div className={styles.aboutSection}>
                <div className={`row px-0 align-content-stretch`}>
                    <div className={`col-md-8`}>
                        <div className={styles.aboutCard}>
                            <p>We are a precision cold forging company headquartered in Narasapura Industrial Area in Kolar. We currently serve customers from Automotive, Aerospace, Industrial and other general industries. We are one of the major aluminium cold forgings company in Bengaluru</p>
                            <p><b>HADEE FORGINGS and GUNMA SEIKO CO., LTD. (Japan) have a technical support contract for forging, machining and quality.</b></p>
                            <p>The unit is ISO 9001-2015 & IATF 16949 certified Company. We are approved by Maruthi Suzuki as a green channel supplier All our furnaces are calibrated as per CQI-9.</p>
                            <Link href={`/`} class={`btn btn-outline-light`}>Read More</Link>

                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.aboutImg}>
                            <img src={`/images/about.png`}/>
                        </div>
                    </div>
                </div>

           </div>
       </div>
    )
}