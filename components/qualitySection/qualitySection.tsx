import React from "react";
import styles from './qualitySection.module.scss'
import Link from "next/link";

export default function QualitySection(quality: any) {

    // console.log('Q==', quality);
    return (
        <div>
            <div className="container-fluid">
                <div className={styles.qualitySection}>
                    <div className={`container`}>
                        <div className={`row`}>
                            <div className={`col-md-12`}>
                                <div dangerouslySetInnerHTML={{__html: quality.quality.text}}/>
                            </div>
                        </div>
                        <div className={`row justify-content-center align-items-center`}>
                            <div className={`col-md-6`}>
                                <div dangerouslySetInnerHTML={{__html: quality.quality.text_list}}/>
                            </div>
                            <div className={`col-md-6`}>
                                <div className={styles.qualityImg}>
                                    <img src={quality.quality.img} width={`100%`} alt="image"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container-fluid`}>
                <div className={styles.certificate}>
                    <h3> {quality.quality.certificate.title} </h3>
                    <img src={quality.quality.certificate.img} />
                </div>
                <div className={styles.certificate}>
                    <h3> {quality.quality.award.title} </h3>
                    <img src={quality.quality.award.img}/>
                </div>
            </div>
        </div>
    )
}