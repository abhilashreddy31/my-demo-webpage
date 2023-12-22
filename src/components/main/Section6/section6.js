import React, { useState,useEffect } from "react";
import './section6.css';
import profile1 from "../../../asserts/profile1.jpg"
import profile2 from "../../../asserts/profile2.jpg"
import profile3 from "../../../asserts/profile3.jpg"
import profile4 from "../../../asserts/profile4.jpg"

import arrow1 from "../../../asserts/arrow1.svg"
import arrow2 from "../../../asserts/arrow2.svg"

const Section6 = () => {
    const cards = [
        {
            id: 1,
            image: profile1,
            name:"Victor Murphy",
            text: "Distinctively re-engineer revolutionary services and premium  At vero accusamus et iustoDignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores .",
        },
        {
            id: 2,
            image:profile2,
            name:"Nan Petty Calvin",
            text: "Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas.",
            text1: "Dynamically innovate resource-leveling customer service for state of the art customer service."
        },
        {
            id: 1,
            image: profile3,
            name:"Ne Peeter Walker",
            text: "Distinctively re-engineer revolutionary services and premium  At vero accusamus et iustoDignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores .",
        },
        {
            id: 2,
            image: profile4,
            name:"Nancy Mithi",
            text: "Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas.",
            text1: "Dynamically innovate resource-leveling customer service for state of the art customer service."
        },
        {
            id: 2,
            image: profile1,
            name:"Victor Murphy",
            text: "Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas.",
            text1: "Dynamically innovate resource-leveling customer service for state of the art customer service."
        },
        {
            id: 2,
            image: profile4,
            name:"Victor Murphy",
            text: "Completely synergize resource taxing relationships via premier. Professionally cultivate one-to-one customer service with robust ideas.",
            text1: "Dynamically innovate resource-leveling customer service for state of the art customer service."
        },
       
    ];

    const cardsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(0);
    const [cardHeights, setCardHeights] = useState([]);

    useEffect(() => {
        const updatedHeights = cards.map((card) => {
            const textLength = card.text.length + (card.text1 ? card.text1.length : 0);
           
            return Math.max(textLength , 100); 
        });
        setCardHeights(updatedHeights);
    }, [cards]);

    const totalPages = Math.ceil(cards.length / cardsPerPage);
    const startIndex = currentPage * cardsPerPage;
    const endIndex = startIndex + cardsPerPage;

    const visibleCards = cards.slice(startIndex, endIndex);

    const handleNextPage = () => {
        setCurrentPage((prevPage) => prevPage + 1);
    };

    const handlePrevPage = () => {
        setCurrentPage((prevPage) => prevPage - 1);
    };

    return (
        <div className="main-container">
            <div className="card-box-200">
            <p className="container-p">What our customers say about us</p>
            <div className="pagination">
                <btn className="arrow-btn" onClick={handlePrevPage} disabled={currentPage === 0}>
                 <img className="arrow-img"  src={arrow2}></img>
                </btn>
                <btn className="arrow-btn" onClick={handleNextPage} disabled={currentPage === totalPages - 1}>
                   <img className="arrow-img" src={arrow1}></img>
                </btn>
            </div>
            </div>
           
            <div className="container">
                <div className="card-group">
                    {visibleCards.map((card, index) => (
                        <div>
                        <div className="card-10" key={index} style={{ height: `${cardHeights[index]}px` }}>
                            <p className="card-p1">{card.text}</p>
                            <p className="card-p2">{card.text1}</p>
                        </div>
                        <div className="inner-card-200">
                           <img className="profile-img" src={card.image}></img>
                           <div>
                            <p className="name-p">{card.name}</p>
                            <p className="name-p1">Happy Customers</p>
                           </div>
                        </div>

                        </div>
                    ))}

                </div>
            </div>
           
        </div>
    );
};

export default Section6;