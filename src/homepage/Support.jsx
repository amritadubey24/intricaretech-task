import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import support from '../assets/images/leadcrm-supported.png';
import { Link } from 'react-router-dom';

const Support = ({ sectionTitle, sectionSubTitle }) => {
    return (
        <section className="pwd_spportLeadCrm">
            <Container>
                <Row className="text-center">
                    <Col lg={12}>
                        <div className="pwd_titleBlock">
                            <h2>{sectionTitle}</h2>
                            <p>{sectionSubTitle}</p>
                        </div>
                    </Col>

                    <Col lg={12}>
                        <div className="support-img">
                            <img src={support} alt="LeadCRM supported CRM integrations" />
                        </div>
                    </Col>

                    <Col lg={12} className="mt-5">
                        <Link to="/integrations" className="btn btn-secondary mx-auto">
                            Let’s Integrate your CRM Now!
                        </Link>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Support;
