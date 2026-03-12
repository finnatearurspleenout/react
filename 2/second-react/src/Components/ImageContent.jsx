import React, { Component, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './swiper.css'


class ImageContent extends Component {
    render() {
        return (
            <div>
                <section className="popular-section">
                    <div className="main-container">
                        <Swiper
                            slidesPerView={3}
                            spaceBetween={30}
                            freeMode={true}
                            pagination={{
                            clickable: true,
                            }}
                            modules={[FreeMode, Pagination]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img src="/Rectangle 6.png" alt="Breaking Bad" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Rectangle 7.png" alt="The Rain" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Rectangle 8.png" alt="Life after Year" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Rectangle 9.png" alt="Money Heist" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Rectangle 11.png" alt="Squid Game" className="img-fluid" />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/TheWitcher.png" alt="TheWitcher" className="img-fluid" 
                                style={{border: '2px solid white'}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Queens Gambit.png" alt="Queens Gambit" className="img-fluid" 
                                style={{border: '2px solid white'}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Dark.png" alt="Dark" className="img-fluid" 
                                style={{border: '2px solid white'}}/>
                            </SwiperSlide>
                            <SwiperSlide>
                                <img src="/Sabrina.png" alt="Sabrina" className="img-fluid" style={{border: '2px solid white'}}/>
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </section>
            </div>
        );
    }
}

export default ImageContent;