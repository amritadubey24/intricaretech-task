import React from 'react';


const Items = ({ items = [] }) => {

    return (
        <section className="pwd_ItemsWrapper">
            <div className="pwd_itemsInner">
                <div className="marquee">
                    <ul className="marquee-content">
                        {items.concat(items).map((item, index) => (
                            <li key={index}>
                                <img src={item.logo} alt={`logo-${index}`} />
                                <p>{item.text}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default Items;
