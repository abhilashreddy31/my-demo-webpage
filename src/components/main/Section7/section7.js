import React from "react";
import "./section7.css"
import line from "../../../asserts/Link.svg"
import rightarrow1 from "../../../asserts/right-arrow.svg"
import one from "../../../asserts/1.png"
import two from "../../../asserts/2.png"
import three from "../../../asserts/3.png"
import four from "../../../asserts/4.png"
import five from "../../../asserts/5.png"
import six from "../../../asserts/6.png"
import seven from "../../../asserts/7.png"
import eight from "../../../asserts/8.png"
import ten from "../../../asserts/10.png"

const Section7 = () => {
    return (
        <div className="section7">
            <div className="section-box">
                <div>
                    <h1>56,180</h1>
                    <p>In property sales</p>
                </div>
                <div>
                    <h1>99%</h1>
                    <p>Customer satisfaction</p>
                </div>
                <div>
                    <h1>25K+</h1>
                    <p>Property Transaction</p>
                </div>
                <div>
                    <h1>2,918</h1>
                    <p>Price Reduce</p>
                </div>

            </div>
            <div className="section7-container">
                <p className="p-77">| <samp>06</samp> Neighborhoods |</p>
                <p className="p-7">Discover The Neighborhoods</p>
                <div className="image-box">
                    <div className="img-box" style={{ position: 'relative', }}>
                        <img src={line} width={30} height={30} className="line-img" alt="Line Image" style={{ position: 'absolute', top: 5, right: 5 }} />
                        <div style={{ position: 'absolute', left: 10, bottom: 10 }}>
                            <p className="pp11" style={{ margin: 0 }}>New York</p>
                            <p className="pp12" style={{ margin: 0 }}>250 Property</p>
                        </div>
                    </div>
                    <div className="img-box" style={{ position: 'relative', }}>
                        <img src={line} width={30} height={30} className="line-img" alt="Line Image" style={{ position: 'absolute', top: 5, right: 5 }} />
                        <div style={{ position: 'absolute', left: 10, bottom: 10, display: "flex", flexDirection: "column", justifyContent: "start", alignItems: "flex-start" }}>
                            <p className="pp11" style={{ margin: 0 }}>Atlanta</p>
                            <p className="pp12" style={{ margin: 0 }}>50 Property</p>
                        </div>
                    </div>
                    <div className="img-box" style={{ position: 'relative', }}>
                        <img src={line} width={30} height={30} className="line-img" alt="Line Image" style={{ position: 'absolute', top: 5, right: 5 }} />
                        <div style={{ position: 'absolute', left: 10, bottom: 10 }}>
                            <p className="pp11" style={{ margin: 0 }}>Singapore</p>
                            <p className="pp12" style={{ margin: 0 }}>25 Property</p>
                        </div>
                    </div>
                    <div className="img-box" style={{ position: 'relative', }}>
                        <img src={line} width={30} height={30} className="line-img" alt="Line Image" style={{ position: 'absolute', top: 5, right: 5 }} />
                        <div style={{ position: 'absolute', left: 10, bottom: 10 }}>
                            <p className="pp11" style={{ margin: 0 }}>Paris</p>
                            <p className="pp12" style={{ margin: 0 }}>20 Property</p>
                        </div>
                    </div>





                </div>
                <div class="image-cards">
                    <h1>More than 50+ Brands Trusted World Wide</h1>

                    <div class="row">
                        <div class="column">
                            <img className="img-1" src={one}></img>
                            
                        </div>
                        <div class="column">

                        <img className="img-2" src={two}></img>
                        <p>No1 city</p>
                            
                        </div>
                        <div class="column">
                        <img className="img-1" src={three}></img>
                            
                        </div>
                        <div class="column">
                        <img className="img-1" src={four}></img>
                           
                        </div>
                        <div class="column">
                        <img className="img-1" src={five}></img>
                            
                        </div>
                    </div>

                    <div class="roww">
                        <div class="column">
                        <img className="img-1" src={six}></img>
                            
                        </div>
                        <div class="column">

                        <img className="img-2" src={ten}></img>
                        <p>Target</p>
                            
                        </div>
                        <div class="column">
                        <img className="img-1" src={seven}></img>
                            
                        </div>
                        <div class="column">
                        <img className="img-1" src={eight}></img>
                            
                        </div>
                    </div>
                     <btn className="Explore-btn">Explore Now <img src={rightarrow1}></img></btn>
                </div>


            </div>
        </div>
    )
}

export default Section7;