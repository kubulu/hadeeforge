import React from "react";
import styles from './heroSection.module.scss'
import { url } from "inspector";
import Slider from "react-slick";


export default function HeroSection(hero: any) {

    // console.log('Banner=',hero);

    const settings = {
        dots: false,
        infinite: true,
        autoplay: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
    };

    return (
       <div className={`${styles.banner}`} >
           <div className={`row`}>
               <div className={`col-md-6 p-5 justi`}>
                   <div className={`d-flex justify-content-center align-items-center h-100`}>
                       <div>
                           <h5>Welcome to HaDee forgings</h5>
                           <h2>Providing Chip less Solutions to Automotive, Aerospace, Electricals Domestic appliance industries.</h2>
                       </div>
                   </div>
               </div>
               <div className={`col-md-6`}>
                   <Slider {...settings}>
                       {hero.hero.map((element: any, index: any)=>(
                           <div className="carousel-item active"  key={index}>
                               <div>
                                   <div className={``}>
                                       <div className={`row justify-content-center align-items-center px-0`}>
                                           {/*<div className={`col-md-6 px-5`}>*/}
                                           {/*    <div dangerouslySetInnerHTML={{ __html: element.text }} />*/}
                                           {/*    <button className={`btn btn-outline-light`}> {element.button_name} </button>*/}
                                           {/*</div>*/}
                                           <div className={`col-md-12`}>
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
               </div>
           </div>
       </div>
    )
}