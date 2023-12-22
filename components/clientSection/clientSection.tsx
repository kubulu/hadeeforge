import React from 'react';
import Slider from 'react-slick';
import styles from './clientSection.module.scss';
export default function ClientSection() {
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
                    <div className={styles.img}><img src={`/images/image 2.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 3.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 4.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 5.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 6.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 11.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 12.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 4.png`}/></div>
                    <div className={styles.img}><img src={`/images/image 5.png`}/></div>

                </div>
            </div>
        );
}