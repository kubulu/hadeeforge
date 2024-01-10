import React from "react";
import styles from './productDetailsSection.module.scss'


export default function ProductDetailsSection() {
    return (
      <div className={styles.proDetails}>
          <div className={`container`}>
              <div className={`row`}>
                  <div className={`col-12`}>
                      <div className={styles.proHeadingText}>
                          <h3>The Inner Ball Joint (IBJ) Housing is a safety-critical component of the axial joint that transmits steering loads through the tie rod and the outer joint to the front wheels</h3>
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
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                          </div>
                          <div className={`row mt-5`}>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                              <div className={`col-md-2`}>
                                  <div className={styles.proImg}>
                                      <img src={`/images/tool-1.png`} />
                                  </div>
                              </div>
                          </div>


                      </div>
                      <div className="tab-pane fade" id="aerospace" role="tabpanel" aria-labelledby="aerospace-tab">

                          Aerospace....
                      </div>
                      <div className="tab-pane fade" id="locomotive" role="tabpanel" aria-labelledby="locomotive-tab">Locomotive...</div>
                      <div className="tab-pane fade" id="others" role="tabpanel" aria-labelledby="others-tab">Others...</div>
                  </div>

              </div>
          </div>
      </div>
    )
}