import React from "react";
import Slider from "react-slick";
import styles from './footerSection.module.scss';
import Link from "next/link";

export default function FooterSection() {

        return (
            <div>
                <div className={styles.footer}>
                    <div className={`container`}>
                        <div className={`row px-0`}>
                        <div className={`col-md-6`}>
                            <div className={styles.footerContent}>
                                <img src={`/images/logo.svg`} />
                                <p className={`w-50 mt-4`}>We are committed to supply our customers with products of highest quality, timely delivery and effective customer service.</p>
                            </div>

                        </div>
                        <div className={`col-md-3`}>
                            <div className={styles.footerMenu}>
                                <ul>
                                    <li>Company</li>
                                    <li>Products</li>
                                        <li>Facilities</li>
                                        <li>Careers</li>
                                        <li>Contact  </li>
                                </ul>
                            </div>
                        </div>
                        <div className={`col-md-3`}>
                            <div className={styles.address}>
                                <h3>Contact</h3>
                                <p>Registered Office HaDee forgings private limited. No 28, Balaji complex, Hosur main road Bangalore – 560086.</p>
                                <p>Email: sales@hadeeforge.in</p>
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