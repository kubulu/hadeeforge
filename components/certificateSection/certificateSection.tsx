import React from "react";
import Slider from "react-slick";
import styles from './certificateSection.module.scss';
import Link from "next/link";

export default function CertificateSection() {



        return (
            <div>
                <div className={styles.certificate}>
                    <div className={`row px-0`}>
                        <div className={`col-md-6`}>
                            <div className={styles.certificateCard}>
                                <h3>Certification</h3>
                                <p>We are committed to supply our customers with products of highest quality, timely delivery and effective customer service. We will achieve this by the process of continuous improvement and team work.</p>
                            </div>
                        </div>
                        <div className={`col-md-6 d-flex justify-content-center align-items-center`}>
                            <div className={styles.certificateImg}>
                               <img src={`/images/certificate.png`}/>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        );
    }