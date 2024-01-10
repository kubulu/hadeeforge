import React from "react";
import styles from './contactSection.module.scss'
import Link from "next/link";

export default function ContactSection(contact: any) {
    // console.log('CONTACT=',contact);

    return (
        <div>

               <div className="container">
                   <div className={styles.contactHead}>
                       <div className={`row align-items-center`}>
                           <div className={`col-md-4`}>
                               <p>Call us</p>
                               <h1> {contact.contact.number} </h1>
                           </div>
                           <div className={`col-md-6`}>
                               <p>Email Address</p>
                               <h1> {contact.contact.mail_id} </h1>
                           </div>
                           <div className={`col-md-2`}>
                               <h1 className={`d-flex justify-content-between align-items-center`}>
                                    <Link href={contact.contact.social_media.fb_link} className="bi bi-facebook"></Link> 
                                    <Link href={contact.contact.social_media.instagram_link} className="bi bi-instagram"></Link>
                                    <Link href={contact.contact.social_media.twitter_link} className="bi bi-twitter-x"></Link>
                                    <Link href={contact.contact.social_media.youtube_link} className="bi bi-youtube"></Link>
                               </h1>
                           </div>
                       </div>
                   </div>
                   <div className={styles.contactSection}>
                       <div className={`container`}>
                           <div className={`row`}>
                               <div className={`col-md-6`}>
                                   <div className={styles.addressCard}>
                                    {contact.contact.address.map((element: any, index: any)=>(
                                       <div className={styles.address} key={index}>
                                           <h2> {element.title} </h2>
                                           <p> {element.address} </p>
                                           <div className={styles.border}></div>
                                       </div>
                                       ))}
                                   </div>
                               </div>
                               <div className={`col-md-6`}>
                                   <div className={styles.addressCard}>
                                       <div className={styles.address}>
                                           <h2>Write to us</h2>
                                           <div className={styles.form}>
                                               <div className="mb-3">
                                                   <label  className="form-label">Name</label>
                                                   <input type="email" className="form-control" placeholder="Full Name" />
                                               </div>
                                               <div className="mb-3">
                                                   <label className="form-label">Mobile Number</label>
                                                   <input type="email" className="form-control" placeholder="Mobile Number" />
                                               </div>
                                               <div className="mb-3">
                                                   <label className="form-label">Email address</label>
                                                   <input type="email" className="form-control" placeholder="Email Address" />
                                               </div>
                                               <div className="mb-3">
                                                   <label  className="form-label">Message</label>
                                                   <textarea className="form-control" ></textarea>
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