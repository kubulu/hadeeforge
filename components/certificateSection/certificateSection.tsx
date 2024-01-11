import React from "react";
import styles from './certificateSection.module.scss';
import Link from "next/link";

export default function CertificateSection(certificate: any) {
// console.log('CERTIFII===',certificate);


        return (
            <div>
                <div className={styles.certificate}>
                    <div className={`row px-0 mx-0`}>
                        <div className={`col-md-6`}>
                            <div className={styles.certificateCard}>
                                <h3> {certificate.certificate.title} </h3>
                                <p> {certificate.certificate.text} </p>
                            </div>
                        </div>
                        <div className={`col-md-6 d-flex justify-content-center align-items-center`}>
                            <div className={styles.certificateImg}>
                               <img src={certificate.certificate.img} alt="certificate"/>
                            </div>
                            <div className={styles.certificateImg}>
                                <img src={certificate.certificate.img} alt="certificate"/>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }