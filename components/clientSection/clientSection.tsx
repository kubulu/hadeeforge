import React from 'react';
import styles from './clientSection.module.scss';
export default function ClientSection(client: any) {
    // console.log('Client==',client);
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 1,
            slidesToScroll: 1
        };
        return (
            <div className={`container-fluid`}>
                {/*<Slider {...settings}>*/}
                {/*    <div>*/}
                {/*        <h3>1</h3>*/}
                {/*        <div className={styles.img}><img src={`/images/image 2.png`}/></div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h3>2</h3>*/}
                {/*        <div className={styles.img}><img src={`/images/image 2.png`}/></div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h3>3</h3>*/}
                {/*        <div className={styles.img}><img src={`/images/image 2.png`}/></div>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h3>4</h3>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h3>5</h3>*/}
                {/*    </div>*/}
                {/*    <div>*/}
                {/*        <h3>6</h3>*/}
                {/*    </div>*/}
                {/*</Slider>*/}
                <div className={styles.imageScroll}>
                    {client.client.client.map((element: any, index: any)=>(
                        <div className={styles.img} key={index}>
                            <img src={element.img} alt="images" />
                        </div>
                    ))}
                </div>
            </div>
        );
}