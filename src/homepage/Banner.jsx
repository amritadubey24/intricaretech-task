import React from 'react';
import { Container, Col, Row, Button } from 'react-bootstrap';
import hubSpot from "../assets/images/icons/hubspot.svg";
import salesforce from "../assets/images/icons/salesforce.svg";
import pipedrive from "../assets/images/icons/pipedrive.svg";
import ratings from "../assets/images/rating-img.png";
import chromeIcon from "../assets/images/icons/chrome-icon.png";
import rocketIcon from "../assets/images/icons/rocket-icon.svg";

const Banner = () => {
    return (
        <section className='pwd_bannerBlock--wrapper'>
            <Container>
                <Row className="justify-content-center">

                    <Col lg="9">
                        <div className="pwd_bannerContent">
                            <span className='pwd_highlight'><img src={rocketIcon} alt="" /> Thousands of Professional using LeadCRM</span>
                            <h1 className='bannerTitle'>
                                LinkedIn CRM Integration
                                Capture, Sync and Enrich in <span>Both Ways</span>
                            </h1>
                            <p className='bannerSubtitle'>
                                Automatically sync LinkedIn prospects to your CRM and overlay existing CRM contacts on LinkedIn profiles. Complete bi-directional integration with HubSpot, Salesforce, and Pipedrive.
                            </p>
                            <ul className='workItem'>
                                <li>Works with</li>
                                <li>
                                    <div className="crm-items">
                                        <div className="crm-logo"><img src={hubSpot} alt="HubSpot" /></div>
                                        <div className="crm-logo"><img src={salesforce} alt="Salesforce" /></div>
                                        <div className="crm-logo"><img src={pipedrive} alt="Pipedrive" /></div>
                                    </div>

                                </li>
                            </ul>
                        </div>

                    </Col>


                    <Col lg="12">
                        <div className="ratingIcon">
                            <img src={ratings} alt="Customer Ratings" />
                        </div>
                    </Col>


                    <Col lg="12">
                        <ul className='availability'>
                            <li>
                                <div className="chAv">
                                    <div className="chCont">
                                        <h4>Available in</h4>
                                        <p>Chrome Web Store</p>
                                    </div>
                                    <div className="chIcon">
                                        <img src={chromeIcon} alt="Chrome Extension" />
                                    </div>
                                </div>
                            </li>
                            <li>
                                <Button className="secondary">Get a Free Trial Now!</Button>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </section>
    );
};

export default Banner;
