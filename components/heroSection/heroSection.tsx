import React from "react";
import styles from './heroSection.module.scss'
import { url } from "inspector";
import Slider from "react-slick";


export default function HeroSection(hero: any) {

    // console.log('Banner=',hero);

    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
       <div className="" >
                   <Slider {...settings}>
                        {hero.hero.map((element: any, index: any)=>(
                            <div className="carousel-item active"  key={index}>
                                <div className={`${styles.banner}`}>
                                    <div className={``}>
                                        <div className={`row justify-content-center align-items-center`}>
                                            <div className={`col-md-6 px-5`}>
                                                <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                                <button className={`btn btn-outline-light`}> {element.button_name} </button>
                                            </div>
                                            <div className={`col-md-6`}>
                                                <div className={styles.bannerImg}>
                                                    <img src={element.img} alt="images" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        </Slider>
                   {/* </div> */}
               {/* </div> */}
       </div>
    )
}