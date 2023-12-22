import React from "react";
import styles from './serviceSection.module.scss'

export default function ServiceSection() {

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
                    <div className="carousel-item active">
                        <div className={`${styles.banner} ${styles.banner1}`}>
                            <div className={`container`}>
                                <div className={`row`}>
                                    <div className={`col-6`}>
                                        <h5>Welcome to HaDee forgings</h5>
                                        <h2>Providing Chip less Solutions to Autiance industries.</h2>
                                        <button className={`btn btn-outline-light`}>Read more</button>
                                    </div>
                                    <div className={`col-6`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={`${styles.banner} ${styles.banner2}`}>
                            <div className={`container`}>
                                <div className={`row`}>
                                    <div className={`col-6`}>
                                        <h5>Welcome to HaDee forgings</h5>
                                        <h2>Providing Chip less Solutions to Automotive, Aerospace, Electricals & Domestic appliance industries.</h2>
                                        <button className={`btn btn-outline-light`}>Read more</button>
                                    </div>
                                    <div className={`col-6`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <div className={`${styles.banner} ${styles.banner3}`}>
                            <div className={`container`}>
                                <div className={`row`}>
                                    <div className={`col-6`}>
                                        <h5>Welcome to HaDee forgings</h5>
                                        <h2>Providing Chip less Solutions to Automotive, Aerospace, Electricals & Domestic appliance industries.</h2>
                                        <button className={`btn btn-outline-light`}>Read more</button>
                                    </div>
                                    <div className={`col-6`}></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}