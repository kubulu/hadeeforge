import React from "react";
import styles from './innerProductSection.module.scss'
import Link from "next/link";

export default function InnerProductSection(products: any) {
   

    return (
       <div className="container-fluid">
           <div className={styles.innerBanner}>
                <div className={`row px-0 align-content-center`}>
                    <div className={`col-6`}>
                        <div className={styles.bannerContent}>
                               <div dangerouslySetInnerHTML={{ __html: products.products.text_field }} />
                        </div>
                    </div>
                    <div className={`col-6`}>
                        <img src={products.products.img} alt="images"/>
                    </div>
                </div>

               <div className={`row`}>
                {products.products.card.map((element: any, index: any)=>(
                   <div className={`col-md-3`} key={index}>
                       <div className={styles.serviceCard} >
                           <h2> {element.title} </h2>
                           <Link href={element.link}><img src={`/images/more.svg`} alt="arrow" /> </Link>
                       </div>
                   </div>
                   ))}
               </div>

           </div>
       </div>
    )
}