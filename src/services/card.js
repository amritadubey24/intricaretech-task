import React from 'react';
import Card from '../components/Cards';

import img1 from '../assets/images/section1.png';
import img2 from '../assets/images/section2.png';
import img3 from '../assets/images/section3.png';
import img4 from '../assets/images/section4.png';

const Cards = () => {
    const cardData = [
        {
            title: "Lead Management",
            description: "Easily capture, track, and manage leads with our CRM solution.",
            image: img1,
            link: "/lead-management"
        },
        {
            title: "Analytics & Reports",
            description: "Get detailed insights into your sales performance and campaigns.",
            image: img2,
            link: "/analytics"
        },
        {
            title: "Automation",
            description: "Automate repetitive tasks and save time with our smart tools.",
            image: img3,
            link: "/automation"
        },
        {
            title: "Integrations",
            description: "Seamlessly connect with your favorite apps and services.",
            image: img4,
            link: "/integrations"
        }
    ];

    return (
        <section className="cards-section">
            <div className="cards-grid">
                {cardData.map((card, index) => (
                    <Card
                        key={index}
                        title={card.title}
                        description={card.description}
                        image={card.image}
                        link={card.link}
                    />
                ))}
            </div>
        </section>
    );
};

export default Cards;
