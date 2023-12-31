import React from "react";
import styles from './serviceSection.module.scss'

export default function ServiceSection(service: any) {
  

    return (
        <div className="container-fluid" style={{marginTop: '40px',}}>
            <div id="serviceBanner" className="carousel slide " data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#serviceBanner" data-bs-slide-to="0"
                            className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#serviceBanner" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#serviceBanner" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    {service.service.map((element: any, index: any)=>(
                        <div className="carousel-item active" key={index}>
                            <div className={`${styles.banner} ${styles.banner1}`} style={{background: `url(${element.img})`, backgroundColor: element.color}}>
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