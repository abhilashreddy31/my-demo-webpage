import React from "react";
import "./section10.css"
import frame1 from "../../../asserts/frame1.png"
import frame2 from "../../../asserts/frame2.png"
import frame3 from "../../../asserts/frame3.png"
import frame4 from "../../../asserts/frame4.png"
import frame5 from "../../../asserts/frame5.png"

const Section10 =() => {
    return(
        <div className="section10-container">
              <p className="p11">
                    | <samp>03</samp> Why Choose |
                </p>
              <h1 className="h111">Why Choose Our Properties Of Real Estate Industries</h1>

              <div className="row-101">
                 <img src={frame1}></img>
                 <img src={frame2}></img>
                 

              </div>
              <div className="row-102">
                 <img src={frame3}></img>
                 <img src={frame4}></img>
                 <img src={frame5}></img>

              </div>

        </div>
    )
}

export default Section10;