import React from "react";
import styles from './navigation.module.scss'

export default function Navigation(nav: any) {
// console.log('NAV=',nav);
    return (
       <div>
           <div className="container-fluid">
               <header
                   className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 fw-medium ">
                   <div className="col-md-3 mb-2 mb-md-0">
                       <a href={nav.nav.logo.link}  className="d-inline-flex link-body-emphasis text-decoration-none">
                            <img src={nav.nav.logo.logo_img} alt="logo"/>
                       </a>
                   </div>
                {nav.nav.nav_item.map((element: any, index: any)=>(
                   <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                       <li key={index}> <a href={element.list_item.link} className="nav-link px-4 link-secondary"> {element.list_item.name} </a></li>
                   </ul>
                 ))}
                   <div className="col-md-3 text-end">
                       <button type="button" className="btn btn-outline-primary me-2 fw-medium"> {nav.nav.button} </button>
                   </div>
               </header>
           </div>
       </div>
    )
}