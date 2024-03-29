import React from "react";
import styles from './innerBannerSection.module.scss'
import Link from "next/link";

export default function InnerBannerSection(banner: any) {

    return (
       <div className="container-fluid">
           <div className={styles.innerBanner} style={{backgroundImage: `url(${banner.banner.img})`}}>
                <div className={`row px-0 align-content-center`}>
                    <div className={`col-md-12`}>
                        <div className={styles.bannerContent}>
                               <div dangerouslySetInnerHTML={{ __html: banner.banner.text }}/>
                        </div>
                    </div>
                </div>

           </div>
       </div>
    )
}