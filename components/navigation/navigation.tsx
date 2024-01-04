import React from "react";
import styles from './navigation.module.scss'

export default function Navigation() {

    return (
       <div>
           <div className="container-fluid">
               <header
                   className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 fw-medium ">
                   <div className="col-md-3 mb-2 mb-md-0">
                       <a href="/" className="d-inline-flex link-body-emphasis text-decoration-none">
                            <img src={'/images/logo.svg'} />
                       </a>
                   </div>

                   <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                       <li>

                               <a className="nav-link px-4" href="#" role="button"
                                  data-bs-toggle="dropdown" aria-expanded="false">
                                   Company
                               </a>

                               <ul className="dropdown-menu">
                                   <li><a className="dropdown-item" href="#">Quality</a></li>
                                   <li><a className="dropdown-item" href="#">About Cold Forging</a></li>
                                   <li><a className="dropdown-item" href="#">Quality</a></li>
                               </ul>
                           </li>
                       <li><a href="#" className="nav-link px-4">Products</a></li>
                       <li><a href="#" className="nav-link px-4">Facilities</a></li>
                       <li><a href="#" className="nav-link px-4">Careers</a></li>
                       <li><a href="#" className="nav-link px-4">Contacts</a></li>
                   </ul>

                   <div className="col-md-3 text-end">
                       <button type="button" className="btn btn-outline-primary me-2 fw-medium">+91 96201 43293</button>
                   </div>
               </header>
           </div>
       </div>
    )
}