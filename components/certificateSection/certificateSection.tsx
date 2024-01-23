import React from "react";
import Slider from "react-slick";
import styles from './certificateSection.module.scss';
import Link from "next/link";


export default function CertificateSection(certificate: any) {
    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
        arrows: false,
        autoplay: true,
    };
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
                        <div className={`col-md-6`}>

                            <div className={styles.certificateImg}>
                                    <div>
                                        <Slider {...settings}>
                                            <img src="/images/hadeeforge-certificate.png" alt="certificate"/>
                                        <img src="/images/ceer.png" alt="certificate"/>
                                            <img src="/images/ceer1.png" alt="certificate"/>
                                            <img src="/images/ceer2.png" alt="certificate"/>

                                        </Slider>
                                    </div>

                            </div>


                    </div>
                </div>
            </div>
            </div>
        );
    }