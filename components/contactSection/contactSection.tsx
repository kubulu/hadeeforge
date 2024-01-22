import React, {useState} from "react";
import styles from './contactSection.module.scss';
// import axios from 'axios';
import Link from "next/link";

export default function ContactSection(contact: any) {
    // console.log('CONTACT=',contact);
    const [formData, setFormData] = useState({
        name: '',
        mobile: '',
        email: '',
        message: '',
      });

      const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
      };

      const handleSubmit = async (e: any) => {
        e.preventDefault();
    
        try {
        //   await axios.post('http://localhost:3001/sendEmail', formData);
         
          alert('Message sent successfully!');
        } catch (error) {
          console.error('Error sending message:', error);
         
          alert('Error sending message. Please try again later.');
        }
      };

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
                                                   <input type="email" className="form-control" placeholder="Full Name" name="name"  value={formData.name} onChange={handleChange} />
                                               </div>
                                               <div className="mb-3">
                                                   <label className="form-label">Mobile Number</label>
                                                   <input type="email" className="form-control" placeholder="Mobile Number" name="mobile" value={formData.mobile} onChange={handleChange} />
                                               </div>
                                               <div className="mb-3">
                                                   <label className="form-label">Email address</label>
                                                   <input type="email" className="form-control" placeholder="Email Address" name="email" value={formData.email} onChange={handleChange} />
                                               </div>
                                               <div className="mb-3">
                                                   <label  className="form-label">Message</label>
                                                   <textarea className="form-control" name="message" value={formData.message} onChange={handleChange} ></textarea>
                                               </div>
                                               <div className="mb-3">
                                                  <button className={`btn btn-primary`} onClick={handleSubmit} >SEND A MESSAGE</button>
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
                    src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3886.148389824601!2d77.96893798899082!3d13.08978051528994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMTPCsDA1JzIzLjIiTiA3N8KwNTgnMTMuMCJF!5e0!3m2!1sen!2sin!4v1705929919798!5m2!1sen!2sin"
                    width="100%" height="450"  loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>

    )
}