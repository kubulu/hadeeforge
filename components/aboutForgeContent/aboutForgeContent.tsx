import React from "react";
import styles from './aboutForgeContent.module.scss'
import Link from "next/link";

export default function AboutForgeContent(aboutForge: any) {

    return (
       <div className="container-fluid">
           <div className={styles.aboutContent}>
                <div className={`row px-0 justify-content-center`}>
                    <div className={`col-md-8 text-center pt-5 pb-5`}>
                    <div dangerouslySetInnerHTML={{ __html: aboutForge.aboutForge.text }} />
                    </div>
                </div>
               <div className={`row pb-5`}>
                    {aboutForge.aboutForge.card.map((element: any, index: any)=>(
                    <div className={`col-md-6`} key={index}>
                        <div className={styles.aboutCard}>
                            <div dangerouslySetInnerHTML={{ __html: element.content }}/>
                        </div>
                    </div>
                    ))}
               </div>
               <div className={`row`}>
                   <div className={`col-md-12 mb-5`}>
                       <table className={``} border="1" width="100%">
                           <thead>
                           <tr className={`text-center`}>
                               <th colSpan="2">STEEL</th>
                               <th colSpan="2">ALUMINIUM</th>
                               <th colSpan="2">STAINLESS STEEL</th>
                           </tr>
                           </thead>
                           <tbody>
                           <tr>
                               <td>Grade</td>
                               <td>Dia</td>
                               <td>Grade</td>
                               <td>Dia</td>
                               <td>Grade</td>
                               <td>Dia</td>
                           </tr>
                           <tr>
                               <td>35C8</td>
                               <td>30-50</td>
                               <td>6061</td>
                               <td>16-58</td>
                               <td>316L</td>
                               <td>16-58</td>
                           </tr>
                           <tr>
                               <td>20C8</td>
                               <td>32-38</td>
                               <td>6005</td>
                               <td>14</td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr>
                               <td>16MnCr5</td>
                               <td>15-50</td>
                               <td>6082</td>
                               <td>32</td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr>
                               <td>41Cr4</td>
                               <td>18-26</td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr>
                               <td>C45</td>
                               <td>42-45</td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr>
                               <td>En8</td>
                               <td>40-75</td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr>
                               <td>En8D</td>
                               <td>32</td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                           </tr>
                           <tr>
                               <td>SCM420H</td>
                               <td>32</td>
                               <td></td>
                               <td></td>
                               <td></td>
                               <td></td>
                           </tr>
                           </tbody>
                       </table>
                   </div>
               </div>
           </div>
       </div>
    )
}