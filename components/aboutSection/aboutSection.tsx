import React from "react";
import Slider from "react-slick";
import styles from './aboutSection.module.scss'
import Link from "next/link";

export default function AboutSection(aboutSection: any) {
    // console.log('AbtSec=',aboutSection);
    const settings = {
        dots: false,
        infinite: true,
        slidesToScroll: 1,
        slidesToShow: 1,
    };

    return (
       <div className="container-fluid">
           <div className={styles.aboutSection}>
                <div className={`row px-0 align-content-stretch`}>
                    <div className={`col-md-8`}>
                        <div className={styles.aboutCard}>
                        <div dangerouslySetInnerHTML={{ __html: aboutSection.aboutSection.about_card.text_field}}/>
                            <Link href={aboutSection.aboutSection.about_card.button_link} className={`btn btn-outline-light`}> {aboutSection.aboutSection.about_card.button_name} </Link>
                        </div>
                    </div>
                    <div className={`col-md-4`}>
                        <div className={styles.aboutImg}>
                            <Slider {...settings}>
                                <div><img src={aboutSection.aboutSection.img} alt="about"/></div>
                                <div><img src="/images/office-1.png" /></div>
                                <div><img src="/images/office-2.png" /></div>
                            </Slider>
                        </div>
                    </div>
                </div>

           </div>
       </div>
    )
}