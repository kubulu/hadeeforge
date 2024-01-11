import React, { useEffect, useState } from "react";
import styles from './productDetailsSection.module.scss'
import { useRouter } from 'next/router'



export default function ProductDetailsSection(productsDetails: any) {
    const router = useRouter()
    const [tab, setTab] = useState(router.query.t)
    const [aerospaceTab, setAerospaceTab] = useState('');
    const [automotiveTab, setAutomotiveTab] = useState('');
    const [locomotiveTab, setLocomotiveTab] = useState('');
    const [othersTab, setOthersTab] = useState('');

    const [aerospaceContent, setAerospaceContent] = useState('');
    const [automotiveContent, setAutomotiveContent] = useState('');
    const [locomotiveContent, setLocomotiveContent] = useState('');
    const [othersContent, setOthersContent] = useState('');
    useEffect(function(){
        if(tab == 'aerospace'){
            setAerospaceTab('active');
            setAerospaceContent('show active');
        }
        if(tab == 'automotive'){
            setAutomotiveTab('active');
            setAutomotiveContent('show active');
        }
        if(tab == 'locomotive'){
            setLocomotiveTab('active');
            setLocomotiveContent('show active');
        }
        if(tab == 'others'){
            setOthersTab('active');
            setOthersContent('show active');
        }
    },[tab])
    
    return (
      <div className={styles.proDetails}>
          <div className={`container`}>
              <div className={`row`}>
                  <div className={`col-12`}>
                      <div className={styles.proHeadingText}>
                          <h3> {productsDetails.productsDetails.heading_text} </h3>
                      </div>
                  </div>
              </div>
              <div className={`row`}>
                  <ul className="nav nav-tabs justify-content-center" id="myTab" role="tablist">
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${automotiveTab}`} id="automotive-tab" data-bs-toggle="tab" data-bs-target="#automotive"
                                  type="button" role="tab" aria-controls="home" aria-selected="true">Automotive Parts
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${aerospaceTab}`} id="aerospace-tab" data-bs-toggle="tab" data-bs-target="#aerospace"
                                  type="button" role="tab" aria-controls="profile" aria-selected="false">Aerospace Parts
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${locomotiveTab}`} id="locomotive-tab" data-bs-toggle="tab" data-bs-target="#locomotive"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Locomotive Parts
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${othersTab}`} id="others-tab" data-bs-toggle="tab" data-bs-target="#others"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Others
                          </button>
                      </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                      <div className={`tab-pane fade ${automotiveContent}`} id="automotive" role="tabpanel" aria-labelledby="automotive-tab">
                        
                          <div className={`row mt-5`}>
                          {productsDetails.productsDetails.automotive_parts.map((element: any, index: any)=>(
                              <div className={`col-md-2`} key={index}>
                                  <div className={styles.proImg}>
                                      <img src={element.img} />
                                  </div>
                                  
                              </div>
                              ))}
                          </div>
                      </div>
                      <div className={`tab-pane fade ${aerospaceContent}`} id="aerospace" role="tabpanel" aria-labelledby="aerospace-tab">
                        <div className={`row mt-5`}>
                            {productsDetails.productsDetails.aerospace_parts.map((element: any, index: any)=>(
                                <div className={`col-md-2`} key={index}>
                                    <div className={styles.proImg}>
                                        <img src={element.img} />
                                    </div>
                                    
                                </div>
                                ))}
                        </div>
                      </div>
                      <div className={`tab-pane fade ${locomotiveContent}`} id="locomotive" role="tabpanel" aria-labelledby="locomotive-tab">
                        <div className={`row mt-5`}>
                            {productsDetails.productsDetails.locomotive_parts.map((element: any, index: any)=>(
                                <div className={`col-md-2`} key={index}>
                                    <div className={styles.proImg}>
                                        <img src={element.img} />
                                    </div>
                                    
                                </div>
                                ))}
                        </div>
                      </div>
                      <div className={`tab-pane fade ${othersContent}`} id="others" role="tabpanel" aria-labelledby="others-tab">
                        <div className={`row mt-5`}>
                                {productsDetails.productsDetails.others.map((element: any, index: any)=>(
                                    <div className={`col-md-2`} key={index}>
                                        <div className={styles.proImg}>
                                            <img src={element.img} />
                                        </div>
                                        
                                    </div>
                                    ))}
                            </div>
                      </div>
                  </div>

              </div>
          </div>
      </div>
    )
}