import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import product from '../assets/images/product-image.png';
import { Link } from 'react-router-dom';

const Join = ({ sectionTitle }) => {
    return (
        <section className="pwd_spportLeadCrm bg_secondary">
            <Container>
                <Row className="text-center">
                    <Col lg={12}>
                        <div className="pwd_titleBlock left_title">
                            <h2>{sectionTitle}</h2>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="support-img">
                            <img src={product} alt="LeadCRM supported integrations" />
                        </div>
                    </Col>
                    <Col lg={12} className="mt-5">
                        <Link to="/integrations" className="btn btn-secondary mx-auto">
                            Get Started Today <span className='chevronIcon'></span>
                        </Link>
                    </Col>

                </Row>
            </Container>
        </section>
    );
};

export default Join;
