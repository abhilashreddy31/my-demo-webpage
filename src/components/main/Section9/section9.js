import React from "react";
import "./section9.css"
import icon from "../../../asserts/Icon.svg"
import insta from "../../../asserts/Insta.svg"
import fb from "../../../asserts/Fb.svg"
import twitter from "../../../asserts/Twiter.svg"
import linkdine from "../../../asserts/Iinkdine.svg"
import youtube from "../../../asserts/Youtube.svg"
import { Link } from "react-router-dom";
import location from "../../../asserts/location1.svg"
import phone from "../../../asserts/phone.svg"
import mail from "../../../asserts/mail.svg"

const Section9 = () => {
    return (
        <div className="section9-container">
            <div className="row-11">
                <div className="col-1">
                    <div className="icon-btn">
                        <img src={icon} alt="Icon" />
                        <p>ProperLand</p>
                    </div>
                    <div className="social">
                        <img src={insta} width={17} height={17}></img>
                        <img src={fb} width={17} height={17}></img>
                        <img src={twitter} width={17} height={17}></img>
                        <img src={linkdine} width={17} height={17}></img>
                        <img src={youtube} width={17} height={17}></img>
                    </div>

                </div>
                <div className="col-2">
                    <h6>Get a free estimate</h6>
                    <p>Leverage agile frameworks to provide a robust synopsis for high level overviews. approaches lverall value proposition. Organically grow the holistic world view of disruptive.</p>
                    <div className="box-21">
                        <input className="input-1" placeholder="your email address here"></input>
                        <btn className="sub-btn">Subscribe Now</btn>

                    </div>

                </div>

            </div>
            <div className="row-12">
                <div className="col-11">
                    <div class="header">
                        <h1>Company</h1>
                        <ul>
                            <li>About</li>
                            <li>Blog</li>
                            <li>Properties</li>
                            <li>Agents</li>
                            <li>Services</li>
                            <li>Contact us</li>
                        </ul>
                    </div>
                    <div class="header">
                        <h1>Services</h1>
                        <ul>
                            <li>Rend A Home</li>
                            <li>Sell A Home</li>
                            <li>Buy A Home</li>
                            <li>Property Insurance</li>
                            <li>SMember Support</li>
                            <li>Experience Agent</li>
                        </ul>
                    </div>
                    <div class="header">
                        <h1>Uitility pages</h1>
                        <ul>
                            <li>Style Guide</li>
                            <li>Licenses</li>
                            <li>Changelog</li>
                            <li>Password</li>
                            <li>Not found</li>
                            <li>More Template</li>
                        </ul>
                    </div>

                </div>
                <div className="col-12">
                    <div class="header-1">
                        <h1>Contact Us</h1>
                        <div class="contact-info">
                            <div>
                                <img src={location}></img>
                                <p>329 Queensberry Street, North Melbourne VIC 3051, Australia.</p>
                            </div>
                            <div>
                                <img src={phone}></img>
                                <p>123 456 7890</p>
                            </div>
                            <div>
                                <img src={mail}></img>
                                <p>support@example.com</p>
                            </div>
                        </div>
                    </div>


                </div>
            </div>
            <footer>
               
                <p class="attribution"> Copyright © Properland Designed by <strong >VictorFlow</strong>  - Powered by <strong >Webflow</strong></p>
            </footer>

        </div>
    )
}

export default Section9;