import React from 'react';
import { Container, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';


const Cards = ({ sectionTitle, sectionSubTitle, items = [], className = "" }) => {
    return (
        <section className={`pwd_cardWrapper ${className}`}>
            <Container>
                {sectionTitle && (
                    <Row>
                        <Col lg={12}>
                            <div className="pwd_titleBlock">
                                <h2>{sectionTitle}</h2>
                                <p>{sectionSubTitle}</p>
                            </div>
                        </Col>
                    </Row>
                )}

                <Row>
                    {items.map((card, index) => (
                        <Col lg={6} md={6} key={index} className='borderRight'>
                            <div className={`pwd_cardBlock ${card.className}`}>
                                {card.image && (
                                    <img
                                        src={card.image}
                                        alt={card.title}
                                        className="card-img"
                                    />
                                )}
                                <div className="pwd_cardBody">
                                    <h3>{card.title}</h3>
                                    {card.description && <p>{card.description}</p>}
                                </div>
                            </div>
                        </Col>

                    ))}
                    <Col lg={12} className="mt-4">
                        <Link to="/integrations" className="btn btn-secondary mx-auto">
                            Start Using LeadCRM Now
                        </Link >
                    </Col >
                </Row>
            </Container>
        </section>
    );
};

export default Cards;
