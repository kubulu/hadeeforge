import React from "react";
import styles from './footerSection.module.scss';
import Link from "next/link";

export default function FooterSection(footer: any) {
    // console.log('Footer=',footer);

        return (
            <div>
                <div className={styles.footer}>
                    <div className={`container`}>
                        <div className={`row px-0`}>
                        <div className={`col-md-3`}>
                            <div className={styles.footerContent}>
                                <img src={footer.footer.content.logo} alt="logo"/>
                                <p className={`mt-4`}> {footer.footer.content.text} </p>
                            </div>

                        </div>
                            <div className={`col-md-3`}>
                            </div>
                        <div className={`col-md-3`}>
                            <div className={styles.footerMenu}>
                                <ul>
                                    {footer.footer.menu.map((element: any, index: any)=>(
                                       <li key={index}> <a href={element.link}> {element.name} </a> </li> 
                                    ))} 
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={styles.address}>
                            <div dangerouslySetInnerHTML={{ __html: footer.footer.address }} />
                            </div>
                        </div>
                    </div>
                        <div className={`border-top row`}>
                            <div className={`col-12 text-center pt-2`}>
                                <div className={styles.footerBottom}>
                                    <p>© 2023 Hadee Forgings | All Rights Reserved | Powered by Netiapps</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }