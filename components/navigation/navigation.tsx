"use client";
import React, {useState} from "react";
import styles from './navigation.module.scss'
import { NavDropdown } from 'react-bootstrap';

export default function Navigation(nav: any) {
console.log('NAV=',nav);

const [openDropdownIndex, setOpenDropdownIndex] = useState(-1);

const handleDropdownOpen = (index: number) => {
    setOpenDropdownIndex(index);
};

const handleDropdownClose = () => {
    setOpenDropdownIndex(-1);
};

    return (
       <div>

           <nav className="navbar navbar-expand-lg navbar-light">
               <div className="container-fluid">
                   <a href={nav.nav.logo.link}  className="d-inline-flex link-body-emphasis text-decoration-none">
                       <img src={nav.nav.logo.logo_img} alt="logo"/>
                   </a>
                   <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                           data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                           aria-expanded="false" aria-label="Toggle navigation">
                       <span className="navbar-toggler-icon"></span>
                   </button>



                   <div className="collapse navbar-collapse" id="navbarSupportedContent">
                       {nav.nav.nav_item?.map((element: any, index: any)=>(
                           <ul className="navbar-nav mx-auto mb-2 mb-lg-0" key={index} >
                           <li>
                               {/* <a href={element.list_item.link} className="nav-link px-4 link-secondary"> {element.list_item.name} </a> */}
                               {element.list_item.sub_menu ?

                                   <NavDropdown title={element.list_item.name} show={openDropdownIndex === index}
                                                onMouseEnter={() => handleDropdownOpen(index)}
                                                className="nav-link px-4 link-secondary"
                                                onMouseLeave={handleDropdownClose} >
                                       {element.list_item.sub_menu.map((ele: any, ind: any)=>(
                                           <NavDropdown.Item key={ind} href={ele.link}> {ele.name} </NavDropdown.Item>
                                       ))}

                                   </NavDropdown>
                                   :
                                   <a href={element.list_item.link} className="nav-link px-4 link-secondary"> {element.list_item.name} </a>

                               }
                           </li>
                        </ul>
                       ))}

                       <button type="button" className="d-block d-md-none btn btn-outline-primary me-2 fw-medium"> {nav.nav.button} </button>


                   </div>
                   <div className="d-none d-md-block col-md-2 text-end">
                       <button type="button" className="btn btn-outline-primary me-2 fw-medium"> {nav.nav.button} </button>
                       
                   </div>
               </div>
           </nav>
       </div>
    )
}