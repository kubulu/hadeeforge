import React from "react";
import styles from './innerBannerSection.module.scss'
import Link from "next/link";

export default function InnerBannerSection() {

    return (
       <div className="container-fluid">
           <div className={styles.innerBanner}>
                <div className={`row px-0 align-content-center`}>
                    <div className={`col-8`}>
                        <div className={styles.bannerContent}>
                                <p>About Company</p>
                                <h2>Poviding “Chipless Solutions” to Automobile, Electrical & Domestic Appliance industries.</h2>
                        </div>
                    </div>
                </div>

           </div>
       </div>
    )
}