import React from 'react';
import Slider from "react-slick";
import styles from './clientSection.module.scss';
export default function ClientSection(client: any) {
    // console.log('Client==',client);
        const settings = {
            dots: true,
            infinite: true,
            slidesToScroll: 1,
            slidesToShow: 8,
            autoplay: true,
            arrows: false,
            speed: 2000,
            autoplaySpeed: 2000,
            cssEase: "linear",
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 2,
                        initialSlide: 2
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1
                    }
                }
            ]
        };
        return (
            <div className={`container-fluid`}>
                <div className={`row`}>
                    <div className={`col-12 text-center pt-5`}>
                        <div className={styles.clientsText}>
                            <h2>Featured Customer</h2>
                        </div>
                    </div>
                </div>
                <div className={styles.clients}>
                <Slider {...settings}>
                    {client.client.map((element: any, index: any)=>(
                        <div className={styles.img} key={index}>
                            <img src={element.img} alt="images" />
                        </div>
                    ))}
                </Slider>
                </div>
            </div>
        );
}