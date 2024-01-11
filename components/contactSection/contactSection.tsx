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
                           <div className={`col-md-4 py-4`}>
                               <p>Call us</p>
                               <h1> {contact.contact.number} </h1>
                           </div>
                           <div className={`col-md-6  py-4`}>
                               <p>Email Address</p>
                               <h1> {contact.contact.mail_id} </h1>
                           </div>
                           <div className={`col-md-2  py-4`}>
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
                               <div className={`col-md-6 py-2`}>
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
                               <div className={`col-md-6 py-2`}>
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
            <div className={styles.map}>
                <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d1943.0793362113297!2d77.9697778!3d13.0891285!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3badfd265a98af53%3A0x364d8e4d240cfde8!2sHaDee%20Forgings%20Pvt.Ltd!5e0!3m2!1sen!2sin!4v1704974521739!5m2!1sen!2sin"
                    width="100%" height="450"  allowFullScreen="" loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    )
}