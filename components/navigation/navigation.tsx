import React, {useState} from "react";
import styles from './navigation.module.scss'
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';

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
           <div className="container-fluid">
               <header
                   className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 fw-medium ">
                   <div className="col-md-3 mb-2 mb-md-0">
                       <a href={nav.nav.logo.link}  className="d-inline-flex link-body-emphasis text-decoration-none">
                            <img src={nav.nav.logo.logo_img} alt="logo"/>
                       </a>
                   </div>
<<<<<<< HEAD
                {nav.nav.nav_item.map((element: any, index: any)=>(
                   <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
                       <li key={index}> <a href={element.list_item.link} className="nav-link px-4 link-secondary"> {element.list_item.name} </a></li>
=======
                {nav.nav.nav_item?.map((element: any, index: any)=>(
                   <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0" key={index}>
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
>>>>>>> 2a3ed02 (changes)
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