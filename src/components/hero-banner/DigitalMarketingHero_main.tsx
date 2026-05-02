"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from "../../../public/assets/img/cartaloop/project-1.png";
import project2 from "../../../public/assets/img/cartaloop/project-2.png";
import project3 from "../../../public/assets/img/cartaloop/project-3.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
export default function DigitalMarketingHero_main() {
    const projects = [
        { id: 1, image: project1 },
        { id: 2, image: project2 },
        { id: 3, image: project3 },
        { id: 4, image: project1 },
        { id: 5, image: project2 },
        { id: 6, image: project3 },
        { id: 7, image: project2 },
    ];
    return (
        <div className='dgmm-hero-content pt-150 pb-120'>
            <div className="container container-1430  pb-80">
                <div className='dgmm-hero-subcontent'>
                    <h4 className="dgm-hero-title tp_fade_anim" data-delay=".5">
                        Turn Your Etsy Store <br /> Into <span>Premium Brand</span>
                    </h4>
                    <p>We help jewelry sellers migrate from Etsy to Shopify, build a luxury brand, and increase direct sales without relying on marketplaces.
                    </p>
                    <div className="tp_fade_anim" data-delay=".7">
                        <Link className="tp-btn-black-square mr-15 theme-btn-color" href="/contact-me-light">
                            <span>
                                <span className="text-1">Book a Call</span>
                                <span className="text-2">Book a Call</span>
                            </span>
                        </Link>

                        <Link className="tp-btn-black-square theme-btn-color_border" href="/contact">
                            <span>
                                <span className="text-1">See Pricing</span>
                                <span className="text-2">See Pricing</span>
                            </span>
                        </Link>
                    </div>
                </div>
            </div>
            {/* <Swiper
                slidesPerView={3.5}
                loop={true}
                autoplay={true}
                spaceBetween={20}
                speed={1000}
                breakpoints={{
                    '1600': { slidesPerView: 3.5 },
                    '1400': { slidesPerView: 3.5 },
                    '1200': { slidesPerView: 3 },
                    '992': { slidesPerView: 3 },
                    '768': { slidesPerView: 2 },
                    '576': { slidesPerView: 2 },
                    '0': { slidesPerView: 1 },
                }}
                modules={[Autoplay]}
            >
                {projects.map((project) => (
                    <SwiperSlide key={project.id}>
                        <div className="dgmm-project-item">
                            <Image src={project.image} alt={`project-${project.id}`} />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper> */}

            <div className='app-testimonial-wrapper'>
                                        <div className="app-testimonial-slider d-flex">
                                            {projects.map((project) => (
                                                <div key={project.id} className="app-testimonial-item tp-product-testimonial-item">
                                                     <div className="dgmm-project-item">
                            <Image src={project.image} alt={`project-${project.id}`} />
                        </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
        </div>
    )
}
