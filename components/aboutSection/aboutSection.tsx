import React from "react";
import styles from './aboutSection.module.scss'
import Link from "next/link";

export default function AboutSection(aboutSection: any) {
    // console.log('AbtSec=',aboutSection);

    return (
       <div className="container-fluid">
           <div className={styles.aboutSection}>
                <div className={`row px-0 align-content-stretch`}>
                    <div className={`col-md-8`}>
                        <div className={styles.aboutCard}>
                        {aboutSection.aboutSection.about_card.text_field.map((element: any, index: any)=>(
                            <p> {element.text} </p>
                        ))}
                            <Link href={aboutSection.aboutSection.about_card.link} className={`btn btn-outline-light`}> {aboutSection.aboutSection.about_card.link_name} </Link>

                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.aboutImg}>
                            <img src={aboutSection.aboutSection.image}/>
                        </div>
                    </div>
                </div>

           </div>
       </div>
    )
}