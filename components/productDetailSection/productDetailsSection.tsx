import React from "react";
import styles from './productDetailsSection.module.scss'


export default function ProductDetailsSection(productsDetails: any) {
    console.log('pd==',productsDetails);
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
                          <button className="nav-link active" id="automotive-tab" data-bs-toggle="tab" data-bs-target="#automotive"
                                  type="button" role="tab" aria-controls="home" aria-selected="true">Automotive Parts
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="aerospace-tab" data-bs-toggle="tab" data-bs-target="#aerospace"
                                  type="button" role="tab" aria-controls="profile" aria-selected="false">Aerospace Parts
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="locomotive-tab" data-bs-toggle="tab" data-bs-target="#locomotive"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Locomotive Parts
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className="nav-link" id="others-tab" data-bs-toggle="tab" data-bs-target="#others"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Others
                          </button>
                      </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">
                      <div className="tab-pane fade show active" id="automotive" role="tabpanel" aria-labelledby="automotive-tab">
                        
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
                      <div className="tab-pane fade" id="aerospace" role="tabpanel" aria-labelledby="aerospace-tab">
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
                      <div className="tab-pane fade" id="locomotive" role="tabpanel" aria-labelledby="locomotive-tab">
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
                      <div className="tab-pane fade" id="others" role="tabpanel" aria-labelledby="others-tab">
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