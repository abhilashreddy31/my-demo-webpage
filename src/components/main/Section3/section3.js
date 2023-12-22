import React from "react";
import './section3.css';
import photo1 from "../../../asserts/Photo.png"
import photo2 from "../../../asserts/Photo (1).png"
import photo3 from "../../../asserts/Photo (3).png"
import photo4 from "../../../asserts/Photo (4).png"
import photo5 from "../../../asserts/Photo (5).png"
import photo6 from "../../../asserts/Photo (2).png"
import location from "../../../asserts/location.svg";
import bed from "../../../asserts/bed.svg"
import bath from "../../../asserts/bath.svg"
import car from "../../../asserts/car.svg"
import scale from "../../../asserts/scale.svg"
import pattern from "../../../asserts/Pattern.png"
import rightarrow1 from "../../../asserts/right-arrow.svg"


const Section3 = () => {
    const projects = [
        {
            title: "Comfortable Apartment",
            image: photo1,
            image2: location,
            icons: [bed, bath, car, scale]
        },
        {
            title: "Home in Downtown, Los Angeles",
            image: photo2,
            image2: location,
            icons: [bed, bath, car, scale]
        },
        {
            title: "Comfortable Apartment",
            image: photo3,
            image2: location,
            icons: [bed, bath, car, scale]
        },
        {
            title: "Home in Downtown, Los Angeles",
            image: photo4,
            image2: location,
            icons: [bed, bath, car, scale]
        },
        {
            title: "CricComfortable Appartmentorner",
            image: photo5,
            image2: location,
            icons: [bed, bath, car, scale]
        },
        {
            title: "Home in Downtown, Los Angeles",
            image: photo6,
            image2: location,
            icons: [bed, bath, car, scale]
        },




    ];

    return (
        <div className="section3-container">
            <div className="section3-box">
                <p className="p11">
                    | <samp>02</samp> Featured properties |
                </p>
                <h1 className="h11">Properties for sale in your favorite area</h1>

                <div className="card-container-100">
                    {projects.map((project, index) => (
                        <div key={index} className="card-100">
                            <div className="inner-card-100">
                                <img className="p-img" width={389} height={200} src={project.image} alt={project.title} />
                                <div className="card-box-100">
                                    <p>$3500/Mo</p>
                                    <btn>For Sale</btn>
                                </div>
                                <div className="card-box-101">
                                    <p className="card-p">{project.title}</p>
                                    <btn className="location"><img src={location} width={20} height={15}></img>709 West Drive Chicago, IL 60606</btn>
                                </div>
                                <div className="btn-box">
                                    <btn>
                                        <img src={bed}></img>
                                        <p>| 30 Beds</p>
                                    </btn>
                                    <btn>
                                        <img src={bath}></img>
                                        <p>| 30 Baths</p>
                                    </btn>
                                    <btn>
                                        <img src={car}></img>
                                        <p>| parking</p>
                                    </btn>
                                    <btn>
                                        <img src={scale}></img>
                                        <p>| 120sqft</p>
                                    </btn>

                                </div>

                            </div>
                        </div>
                    ))}
                </div>
                
               
            </div>
            <img className="pattern-img" src={pattern}></img>
            <btn className="contact-btn-1">Contact Us <img src={rightarrow1}></img></btn>
        </div>

    );
};

export default Section3;
