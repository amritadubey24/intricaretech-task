import React from 'react'
import { Container, Tab, Nav, Row, Col } from 'react-bootstrap';
import crmdata from '../assets/images/crm-data.png'
import crmdata2 from '../assets/images/crm-data-2.webp'
import { Link } from 'react-router-dom';

const TabCards = ({ sectionTitle, sectionSubTitle }) => {
    return (
        <>

            <section className="py-5">
                <Container>
                    <Row>
                        <Col lg={12}>
                            <div className="pwd_titleBlock left_title">
                                <h2>{sectionTitle}</h2>
                                <p>{sectionSubTitle}</p>
                            </div>
                        </Col>
                    </Row>
                    <Tab.Container defaultActiveKey="tab1">
                        <Row>
                            <Col lg={12}>
                                <Nav variant="pills" className="pwdTabs">
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab1"><span className='tabIcon crm'></span> CRM Data Enrichment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab2"><span className='tabIcon data'></span> CRM Data Sync</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab3"><span className='tabIcon bulk'></span> Bulk Export & Enrichment</Nav.Link>
                                    </Nav.Item>
                                    <Nav.Item>
                                        <Nav.Link eventKey="tab4"><span className='tabIcon product'></span> AI Productivity</Nav.Link>
                                    </Nav.Item>
                                </Nav>
                            </Col>
                            <Col lg={12}>
                                <Tab.Content>
                                    <Tab.Pane eventKey="tab1">
                                        <Row>
                                            <Col lg="12">
                                                <p className='tabTitle'>It’s hard to find the accurate contact data for every prospects by <span>Incomplete Data</span></p>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>Here is how LeadCRM tackles that situation.</h5>
                                                    <Link>Try LeadCRM Data Enrichment</Link>
                                                    <img src={crmdata} alt="" />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>If it does not works for you ! try our</h5>
                                                    <Link> Advanced Waterfall Enrichment</Link>
                                                    <img src={crmdata2} alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab2">
                                        <Row>
                                            <Col lg="12">
                                                <p className='tabTitle'>40+ hours lost to copy-paste. Every. Single. Month..<span>Lost Lead Context</span></p>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>The Solution? LeadCRM's Instant Data Sync. <span className='redirect-arrow'></span></h5>
                                                    <Link>
                                                        Try LeadCRM Data Sync</Link>
                                                    <img src={crmdata} alt="" />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>Unlock instant CRM insights on every profile you visit.</h5>
                                                    <Link>
                                                        Try LeadCRM Data Overlay <span className='redirect-arrow'></span></Link>
                                                    <img src={crmdata2} alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab3">
                                        <Row>
                                            <Col lg="12">
                                                <p className='tabTitle'>Your Sales Navigator Workflow is Broken. <span>Lost Productivity</span></p>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>Enrich & Export 250 Profiles in Just 60 Seconds.</h5>
                                                    <Link>
                                                        Try LeadCRM Bulk Export <span className='redirect-arrow'></span></Link>
                                                    <img src={crmdata} alt="" />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>Export & enrich profiles to the CRM or G-Sheet</h5>
                                                    <Link>
                                                        Try LeadCRM Bulk Export  <span className='redirect-arrow'></span></Link>
                                                    <img src={crmdata2} alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                    <Tab.Pane eventKey="tab4">
                                        <Row>
                                            <Col lg="12">
                                                <p className='tabTitle'>Your Most Valuable LinkedIn Activity is Also Your Biggest Time Sink.<span>No Smart Assistance</span></p>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>Get the same high-impact engagement in 80% less time.</h5>
                                                    <Link>
                                                        Try LeadCRM AI Response <span className='redirect-arrow'></span></Link>
                                                    <img src={crmdata} alt="" />
                                                </div>
                                            </Col>
                                            <Col lg="6">
                                                <div className='tabCard'>
                                                    <h5>Use Shortcuts to reply faster.</h5>
                                                    <Link>
                                                        Try LeadCRM Templates<span className='redirect-arrow'></span></Link>
                                                    <img src={crmdata2} alt="" />
                                                </div>
                                            </Col>
                                        </Row>
                                    </Tab.Pane>
                                </Tab.Content>
                            </Col>
                        </Row>
                    </Tab.Container>
                </Container>
            </section>
        </>
    )
}

export default TabCards
