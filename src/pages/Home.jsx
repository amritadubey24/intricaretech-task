import React from 'react';
import Banner from '../homepage/Banner';
import Items from '../homepage/Items';
import Support from '../homepage/Support';
import Join from '../homepage/Join';
import Cards from '../components/Cards';
import TestimonialCards from '../components/TestimonialCards';
import img2 from '../assets/images/with-lead-crm.png';
import img1 from '../assets/images/without-lead-crm.png';
import { Container } from 'react-bootstrap';
import TabCards from '../homepage/TabCards';
import Works from '../homepage/Works';
import { WorksData } from '../services/Works';
import { ClientData } from '../services/ClientFeed';
import { TabsData } from '../services/TabsData';
import { items } from '../services/logoitems';

const Home = () => {
    return (
        <>
            <Banner />
            <Items items={items} />
            <Container>
                <span className="grayLine"></span>
            </Container>

            {/* LinkedIn Prospector faces */}
            <Cards
                className="bg-white"
                sectionTitle="Every LinkedIn Prospector faces these daily challenges"
                items={[
                    {
                        image: img1,
                        title: "Without LeadCRM",
                        className: "red-card",
                        description: (
                            <ul>
                                <li>
                                    <span className='li_icon red-cross'></span>
                                    <div className='li_Content'>
                                        <h6>Manual Data Entry<span>3+ Hours wasted daily</span></h6>
                                        <p>Copying LinkedIn contacts to CRM manually plus losing conversation history</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='li_icon red-cross'></span>
                                    <div className='li_Content'>
                                        <h6>Incomplete Data<span>60% Data Incomplete</span></h6>
                                        <p>LinkedIn profiles missing Email and Phones from 700M+ Database</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='li_icon red-cross'></span>
                                    <div className='li_Content'>
                                        <h6>No CRM Visibility<span>Zero context available</span></h6>
                                        <p>Can’t see existing CRM contacts when browsing LinkedIn profiles</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='li_icon red-cross'></span>
                                    <div className='li_Content'>
                                        <h6>Limited Productivity<span>No smart assistance</span></h6>
                                        <p>Writing messages manually plus no AI assistant for reply, Invite or comments.</p>
                                    </div>
                                </li>
                            </ul>
                        )
                    },
                    {
                        image: img2,
                        title: "With LeadCRM",
                        className: "green-card",
                        description: (
                            <ul>
                                <li>
                                    <span className='li_icon bi-direct'></span>
                                    <div className='li_Content'>
                                        <h6>Complete Bi-Directional Sync</h6>
                                        <p>Automatically sync contacts, messages, and notes between LinkedIn and your CRM in real time.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='li_icon contracts'></span>
                                    <div className='li_Content'>
                                        <h6>700M+ Contacts + Enrichment</h6>
                                        <p>Get verified emails and phone numbers from a vast global database.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='li_icon crm-overlay'></span>
                                    <div className='li_Content'>
                                        <h6>CRM Overlay on LinkedIn</h6>
                                        <p>See full CRM insights directly on LinkedIn profiles without switching tabs.</p>
                                    </div>
                                </li>
                                <li>
                                    <span className='li_icon ai-response'></span>
                                    <div className='li_Content'>
                                        <h6>AI Response + Templates + Bulk Exports</h6>
                                        <p>Save time with AI-crafted replies, pre-built templates, and one-click data exports.</p>
                                    </div>
                                </li>
                            </ul>
                        )
                    }
                ]}
            />


            {/* How it Works */}


            <Works className='bg_secondary'
                sectionTitle="How it Works" sectionSubTitle="From setup to success in 4 simple steps" items={WorksData}></Works>


            {/* What people are saying about LeadCRM */}

            <TestimonialCards sectionTitle="What people are saying about LeadCRM" items={ClientData}></TestimonialCards>
            {/* Complete LinkedIn Sales Solutions */}

            <TabCards sectionTitle="Complete LinkedIn Sales Solutions" sectionSubTitle="Everything you need for professional LinkedIn prospecting" items={TabsData}></TabCards>

            <Support sectionTitle="Our Supported LeadCRM" sectionSubTitle=" LeadCRM provides Native Integrations with popular CRM tools to make the most
                                out of your LinkedIn prospecting. We don’t want you to miss any revenue
                                opportunity on the internet!" />
            <Join sectionTitle="Join Thousands of Professionals Using LeadCRM" />
        </>
    );
};

export default Home;
