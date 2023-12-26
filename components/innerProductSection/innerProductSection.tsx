import React from "react";
import styles from './innerProductSection.module.scss'
import Link from "next/link";

export default function InnerProductSection() {

    return (
       <div className="container-fluid">
           <div className={styles.innerBanner}>
                <div className={`row px-0 align-content-center`}>
                    <div className={`col-6`}>
                        <div className={styles.bannerContent}>
                                <p>Products</p>
                                <h2>Sales by Industry Segments</h2>
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <img src={`/images/sales-cart.png`} />
                    </div>
                </div>

               <div className={`row`}>
                   <div className={`col-md-3`}>
                       <div className={styles.serviceCard}>
                           <h2>Automobile Parts</h2>
                           <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                       </div>
                   </div>
                   <div className={`col-md-3`}>
                       <div className={styles.serviceCard}>
                           <h2>Aerospace Parts</h2>
                           <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                       </div>
                   </div>
                   <div className={`col-md-3`}>
                       <div className={styles.serviceCard}>
                           <h2>Locomotive Parts</h2>
                           <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                       </div>
                   </div>
                   <div className={`col-md-3`}>
                       <div className={styles.serviceCard}>
                           <h2>Others Parts</h2>
                           <Link href={`/`}><img src={`/images/more.svg`} /> </Link>
                       </div>
                   </div>
               </div>

           </div>
       </div>
    )
}