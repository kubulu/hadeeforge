import React from "react";
import styles from './contactSection.module.scss'
import Link from "next/link";

export default function ContactSection() {

    return (
        <div>

               <div className="container">
                   <div className={styles.contactHead}>
                       <div className={`row align-items-center`}>
                           <div className={`col-md-4`}>
                               <p>Call us</p>
                               <h1>+91 96201 43293</h1>
                           </div>
                           <div className={`col-md-6`}>
                               <p>Email Address</p>
                               <h1>sales@hadeeforge.in</h1>
                           </div>
                           <div className={`col-md-2`}>

                               <h1 className={`d-flex justify-content-between align-items-center`}><i className="bi bi-facebook"></i> <i className="bi bi-instagram"></i> <i
                                   className="bi bi-twitter-x"></i> <i className="bi bi-youtube"></i>

                               </h1>
                           </div>
                       </div>
                   </div>
                   <div className={styles.contactSection}>
                       <div className={`container`}>
                           <div className={`row`}>
                               <div className={`col-md-6`}>
                                   <div className={styles.addressCard}>
                                       <div className={styles.address}>
                                           <h2>Registered Office</h2>
                                           <p>HaDee forgings private limited. No 28, Balaji complex, Hosur main road Bangalore – 560086.</p>
                                       </div>
                                       <div className={styles.border}></div>
                                       <div className={styles.address}>
                                           <h2>Works</h2>
                                           <p>No. 47/48, Jakkasandra Village, Jakkasandra Ind Area, Malur Taluk, Kolar district, Karnataka – 563130.</p>
                                       </div>
                                   </div>
                               </div>
                               <div className={`col-md-6`}>
                                   <div className={styles.addressCard}>
                                       <div className={styles.address}>
                                           <h2>Write to us</h2>
                                           <div className={styles.form}>
                                               <div className="mb-3">
                                                   <label  className="form-label">Email
                                                       address</label>
                                                   <input type="email" className="form-control" placeholder="Full Name" />
                                               </div>
                                               <div className="mb-3">
                                                   <label className="form-label">Mobile Number</label>
                                                   <input type="email" className="form-control" placeholder="Mobile Number" />
                                               </div>
                                               <div className="mb-3">
                                                   <label className="form-label">Email
                                                       address</label>
                                                   <input type="email" className="form-control" placeholder="Email Address" />
                                               </div>
                                               <div className="mb-3">
                                                   <label  className="form-label">Message</label>
                                                   <textarea className="form-control" rows="1"></textarea>
                                               </div>
                                               <div className="mb-3">
                                                  <button className={`btn btn-primary`}>SEND A MESSAGE</button>
                                               </div>
                                           </div>
                                       </div>
                                   </div>
                               </div>
                           </div>
                       </div>
                   </div>
               </div>
        </div>
    )
}