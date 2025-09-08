import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import feed from '../assets/images/icons/feed.svg'

import { Navigation, Autoplay } from "swiper/modules";


const TestimonialCards = ({ sectionTitle, sectionSubTitle, items = [], className = "" }) => {
    return (
        <section className={`pwd_cardWrapper ${className}`}>
            <Container>
                {sectionTitle && (
                    <Row className="align-items-center">
                        <Col lg={8}>
                            <div className="pwd_titleBlock left_title">
                                <h2>{sectionTitle}</h2>
                                <p>{sectionSubTitle}</p>
                            </div>
                        </Col>
                        <Col lg={4} className="text-lg-end text-center">
                            <div className="swiper-nav">
                                <button className="swiper-button-prev custom-prev"></button>
                                <button className="swiper-button-next custom-next"></button>
                            </div>
                        </Col>
                    </Row>
                )}

                <Swiper
                    modules={[Navigation, Autoplay]}
                    spaceBetween={30}
                    slidesPerView={3}
                    navigation={{
                        prevEl: ".custom-prev",
                        nextEl: ".custom-next",
                    }}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    breakpoints={{
                        0: { slidesPerView: 1 },
                        768: { slidesPerView: 2 },
                        992: { slidesPerView: 3 },
                    }}
                >

                    {items.map((card, index) => (
                        <SwiperSlide key={index}>
                            <div className="pwd_cardBlock testiCards">
                                <div className="pwd_cardBody">
                                    <p className="cardDes">{card.description}</p>
                                    <div className="ratingBlock">
                                        <img src={feed} alt="Client Rating" className='feedLogo' />
                                        <div className="rating">
                                            {Array.from({ length: 5 }).map((_, i) => (
                                                <span key={i} className="rateIcon"></span>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                                <div className="pwd_cardFoot">
                                    <img
                                        src={card.img}
                                        alt={card.alt || card.title}
                                    />
                                    <div className="clientInfo">
                                        <h3 className="cardTitle">{card.name}</h3>
                                        <h5 className='clientPosi'>{card.position}</h5>
                                    </div>
                                </div>

                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>

            </Container>
        </section>
    );
};

export default TestimonialCards;
