import React from "react";
import styles from './heroSection.module.scss'
import { url } from "inspector";

export default function HeroSection(hero: any) {

    // console.log('Banner=',hero);

    return (
       <div className="container-fluid">
               <div id="heroBanner" className="carousel slide " data-bs-ride="carousel">
                   <div className="carousel-indicators">
                       <button type="button" data-bs-target="#heroBanner" data-bs-slide-to="0"
                               className="active" aria-current="true" aria-label="Slide 1"></button>
                       <button type="button" data-bs-target="#heroBanner" data-bs-slide-to="1"
                               aria-label="Slide 2"></button>
                       <button type="button" data-bs-target="#heroBanner" data-bs-slide-to="2"
                               aria-label="Slide 3"></button>
                   </div>
                   <div className="carousel-inner">
                        {hero.hero.map((element: any, index: any)=>(
                            <div className="carousel-item active" style={{background: element.color}} key={index}>
                                <div className={`${styles.banner} ${styles.banner1}`} style={{backgroundImage: `url(${element.img})`}}>
                                    <div className={`container`}>
                                        <div className={`row`}>
                                            <div className={`col-6`}>
                                                <div dangerouslySetInnerHTML={{ __html: element.text }} />
                                                <button className={`btn btn-outline-light`}> {element.button_name} </button>
                                            </div>
                                            <div className={`col-6`}></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                   </div>
               </div>
       </div>
    )
}