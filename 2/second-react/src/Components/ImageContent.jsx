import React, { Component, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules'
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import './swiper.css'


class ImageContent extends Component {
    render() {
        const swiperImage = [
            {id: 1, src: "/Rectangle 6.png", alt: "Breaking Bad", hasBorder:false},
            {id: 2, src: "/Rectangle 7.png", alt: "The Rain", hasBorder:false},
            {id: 3, src: "/Rectangle 8.png", alt: "Life after Year", hasBorder:false},
            {id: 4, src: "/Rectangle 9.png", alt: "Money Heist", hasBorder:false},
            {id: 5, src: "/Rectangle 11.png", alt: "Squid Game", hasBorder:false},
            {id: 6, src: "/TheWitcher.png", alt: "The Witcher", hasBorder:true},
            {id: 7, src: "/Queens Gambit.png", alt: "Queens Gambit", hasBorder:true},
            {id: 8, src: "/Dark.png", alt: "Dark", hasBorder:true},
            {id: 9, src: "/Sabrina.png", alt: "Sabrina", hasBorder:true}
        ];
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
                            {swiperImage.map((movie) => (
                                <SwiperSlide key={movie.id}>
                                    <img src={movie.src} alt={movie.alt} 
                                    className={movie.hasBorder?"img-fluid with-border":"img-fluid"}/>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </section>
            </div>
        );
    }
}

export default ImageContent;