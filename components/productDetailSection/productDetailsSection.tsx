import React, { useEffect, useState } from "react";
import styles from './productDetailsSection.module.scss'
import { useRouter } from 'next/router'



export default function ProductDetailsSection(productsDetails: any) {
console.log('IND==',productsDetails);

    const router = useRouter()
    const [tab, setTab] = useState(router.query.t)
    const [aerospaceTab, setAerospaceTab] = useState('');
    const [automotiveTab, setAutomotiveTab] = useState('');
    const [industrialTab, setIndustrialTab] = useState('');
    const [othersTab, setOthersTab] = useState('');

    const [aerospaceContent, setAerospaceContent] = useState('');
    const [automotiveContent, setAutomotiveContent] = useState('');
    const [industrialContent, setIndustrialContent] = useState('');
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
        if(tab == 'industrial'){
            setIndustrialTab('active');
            setIndustrialContent('show active');
        }
        if(tab == 'others'){
            setOthersTab('active');
            setOthersContent('show active');
        }
    },[tab])

    const [selectedImage, setSelectedImage] = useState(null);

    const openModal = (imgSrc: any) => {
      setSelectedImage(imgSrc);
    };
  
    const closeModal = () => {
      setSelectedImage(null);
    };
    
    return (
      <div className={styles.proDetails}>
          <div className={`container`}>
              {/*<div className={`row`}>*/}
              {/*    <div className={`col-12`}>*/}
              {/*        <div className={styles.proHeadingText}>*/}
              {/*            <h3> {productsDetails.productsDetails.heading_text} </h3>*/}
              {/*        </div>*/}
              {/*    </div>*/}
              {/*</div>*/}
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
                          <button className={`nav-link ${industrialTab}`} id="industrial-tab" data-bs-toggle="tab" data-bs-target="#industrial"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Industrial Parts
                          </button>
                      </li>
                      <li className="nav-item" role="presentation">
                          <button className={`nav-link ${othersTab}`} id="others-tab" data-bs-toggle="tab" data-bs-target="#others"
                                  type="button" role="tab" aria-controls="contact" aria-selected="false">Others Parts
                          </button>
                      </li>
                  </ul>
                  <div className="tab-content" id="myTabContent">

                      <div className={`tab-pane fade ${automotiveContent}`} id="automotive" role="tabpanel" aria-labelledby="automotive-tab">
                        <div className={`row mt-5 align-items-center justify-content-center`}>
                            <div className={`w-100 text-center`}>
                                <p> {productsDetails.productsDetails.heading_text} </p>
                            </div>
                            <h4> Steel Parts</h4>
                                {productsDetails.productsDetails.automotive.steel.map((element: any, index: any)=>(
                                    <div className={`col-md-2`} key={index}>
                                        <div className={styles.proImg} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(element.img)}>
                                            <img  src={element.img} />
                                        </div>

                                    </div>

                                    ))}
                            <h4>Aluminum Parts</h4>
                            {productsDetails.productsDetails.automotive.aluminum.map((element: any, index: any)=>(
                                <div className={`col-md-2`} key={index}>
                                    <div className={styles.proImg} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(element.img)}>
                                        <img  src={element.img} />
                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>

                      <div className={`tab-pane fade ${aerospaceContent}`} id="aerospace" role="tabpanel" aria-labelledby="aerospace-tab">
                        <div className={`row mt-5 align-items-center justify-content-center`}>
                            <h4>Aluminum Parts</h4>
                                {productsDetails.productsDetails.aerospace.aluminum.map((element: any, index: any)=>(
                                    <div className={`col-md-2`} key={index}>
                                        <div className={styles.proImg} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(element.img)}>
                                            <img  src={element.img} />
                                        </div>

                                    </div>

                                    ))}
                            <h4>Stainless Steel Parts</h4>
                            {productsDetails.productsDetails.aerospace.steel.map((element: any, index: any)=>(
                                <div className={`col-md-2`} key={index}>
                                    <div className={styles.proImg} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(element.img)}>
                                        <img  src={element.img} />
                                    </div>

                                </div>

                            ))}
                        </div>
                    </div>

                      <div className={`tab-pane fade ${industrialContent}`} id="industrial" role="tabpanel" aria-labelledby="industrial-tab">
                        <div className={`row mt-5 align-items-center justify-content-center`}>
                                {productsDetails.productsDetails.industrial.map((element: any, index: any)=>(
                                    <div className={`col-md-2`} key={index}>
                                        <div className={styles.proImg} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(element.img)}>
                                            <img  src={element.img} />
                                        </div>

                                    </div>

                                    ))}
                        </div>
                    </div>
                      <div className={`tab-pane fade ${industrialContent}`} id="industrial" role="tabpanel" aria-labelledby="others-tab">
                          <div className={`row mt-5 align-items-center justify-content-center`}>
                              {productsDetails.productsDetails.industrial.map((element: any, index: any)=>(
                                  <div className={`col-md-2`} key={index}>
                                      <div className={styles.proImg} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(element.img)}>
                                          <img  src={element.img} />
                                      </div>

                                    </div>

                              ))}
                          </div>
                      </div>
                      <div className={`tab-pane fade ${othersContent}`} id="others" role="tabpanel" aria-labelledby="others-tab">
                          <div className={`row mt-5 align-items-center justify-content-center`}>
                              {productsDetails.productsDetails.others.map((element: any, index: any)=>(
                                  <div className={`col-md-2`} key={index}>
                                      <div className={styles.proImg} data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => openModal(element.img)}>
                                          <img  src={element.img} />
                                      </div>

                                    </div>

                              ))}
                          </div>
                      </div>
                    <div className="modal fade" id="exampleModal" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                          <div className="modal-body text-center">
                            {selectedImage && <img src={selectedImage} alt="Selected" className={styles.bigImg} />}
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