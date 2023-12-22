import React from "react";
import "./section8.css"
import photo12 from "../../../asserts/Photo12.png"
import photo11 from "../../../asserts/Photo11.png"
import brightarrow from "../../../asserts/brightarrow.svg"

const Section8 = () => {
    return(
        <div className="section8-container">
            <p className="p-77">| <samp>06</samp> Blog |</p>
            <p className="p-7">Discover The Neighborhoods</p>
            <img className="section8-img" src={photo11}></img>
            <p className="p-s-8">November 05, 2021     |     Architecture</p>
            <p className="p-s-9">Here’s how to decorate your new home from scratch</p>
            <img  className="section8-img" src={photo12}></img>
            <p className="p-s-8">December 14, 2021     |     Market Manager</p>
            <p className="p-s-9">Home buying basics: How many Kitchans and bedrooms?</p>
            <btn className="see-btn">See  All Articles <img src={brightarrow}></img></btn>


        </div>
    )
}

export default Section8;