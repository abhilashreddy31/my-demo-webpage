import React, { useEffect, useState } from 'react';
import './home.css';
import homeicon from "../../../asserts/home.svg"
import home1 from "../../../asserts/home.png"
import rightarrow from "../../../asserts/right-arrow.svg"
import Navbar from '../../navbar/navbar';
import Section2 from '../Section2/section2';
import Section3 from '../Section3/section3';
import Section5 from '../Section5/section5';
import Section6 from '../Section6/section6';
import Section7 from '../Section7/section7';
import Section8 from '../Section8/setion8';
import Section9 from '../Section9/section9';

const Home = () => {
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleScroll = () => {
        const currentScrollPos = window.pageYOffset;
        setVisible(
            (prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 50) ||
            currentScrollPos < 10
        );
        setPrevScrollPos(currentScrollPos);
    };
    return (

        <div>
            <div className='home-page'>
         
                <div className={` ${visible ? 'visible' : 'hidden'}`}>
                <Navbar />
               
                </div>

                <div className="home-container">

                    <div className="left-column">
                        <div className="content">
                            <p className='para-1'>
                                <img src={homeicon} alt="Icon" width={20} height={20} className="icon" />
                                <h2>Real Estate Agency</h2>
                            </p>
                            <p className='para-2'>Find the perfect place to live with your family</p>
                            <p className='para-3'>
                                Distinctively re-engineer revolutionary meta-services and premium architectures.
                            </p>
                            <btn className="explore-btn">Explore Properties<img src={rightarrow} width={15} height={15}></img></btn>
                        </div>
                    </div>
                    <div className="right-column">
                        <img src={home1} className="image" />
                    </div>
                </div>
            </div>
            <Section2></Section2>
            <Section3></Section3>
            <Section5></Section5>
            <Section6></Section6>
            <Section7></Section7>
            <Section8></Section8>
            <Section9></Section9>
        </div>
    );
};

export default Home;
