import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Works = ({ sectionTitle, sectionSubTitle, items = [], className = "" }) => {
    return (
        <section className={`pwd_cardWrapper ${className}`}>
            <Container>
                {sectionTitle && (
                    <Row>
                        <Col lg={12}>
                            <div className="pwd_titleBlock left_title">
                                <h2>{sectionTitle}</h2>
                                <p>{sectionSubTitle}</p>
                            </div>
                        </Col>
                    </Row>
                )}

                <Row>
                    {items.map((card, index) => (
                        <Col lg={3} md={6} key={index}>
                            <div className="pwd_cardBlock worksCards">

                                <div className="pwd_cardBody">
                                    <h2 className='count'>{index + 1}</h2>
                                    <h3 className='cardTitle'>{card.title}</h3>
                                    {card.description && <p className='cardDes'>{card.description}</p>}
                                </div>
                                {card.img && (
                                    <img
                                        src={card.img}
                                        alt={card.alt || card.title}
                                        className="card-img"
                                    />
                                )}
                            </div>
                        </Col>
                    ))}

                    <Col lg={12} className="mt-4">
                        <Link to="/integrations" className="btn btn-secondary mx-auto">
                            Try LeadCRM Now
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Works;
