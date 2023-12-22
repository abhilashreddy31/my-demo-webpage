import React from 'react';
import "./section5.css"
import brightarrow from "../../../asserts/brightarrow.svg"
import photo10 from "../../../asserts/Photo10.png"

const Section5 = () => {

  return (
   <div className='section5-container'>

       <div className='left-box'>
         
          <p className='p-21'>| <samp>04</samp> About Us  |</p>
          <h1>42+ years of helping you find the right Propertys</h1>
          <p className='p-22'>Distinctively re-engineer revolutionary meta-services and premium  At vero eos et accusamus et iusto</p>
          <p className='p-23'>Dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
          <btn>Learn More<img src={brightarrow} ></img></btn>

       </div>

       <div className='right-box'>
        <img src={photo10}  alt=""/>
       </div>


   </div>
  );
};

export default Section5;
