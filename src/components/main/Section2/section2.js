import React from 'react';
import './section2.css';

const Section = () => {
    return (
        <div className='section-container'>
            <div className='box-1'>
                <div className='para-box'>
                    <p className='para-11'>| <samp>01</samp> PROPERLAND INTRO |</p>
                    <p className='para-12'>Buying & Selling Property In An Easy Way</p>
                    <p className='para-13'>
                        Distinctively re-engineer revolutionary meta-services and premium At zero co et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi.
                    </p>
                    <ul class="custom-list">
                        <li>Only pay when you publish</li>
                        <li>Unlimited features use</li>
                        <li>24/7 support</li>
                    </ul>


                </div>

            </div>
            <div className='box-2'>

                <div className='background-image-container'>

                    <svg xmlns="http://www.w3.org/2000/svg" width="153" height="153" viewBox="0 0 153 153" fill="none">
                        <circle cx="76.5" cy="76.5" r="76.5" fill="white" fill-opacity="0.08" />
                        <circle cx="76.5" cy="76.5" r="76.35" stroke="white" stroke-opacity="0.42" stroke-width="0.3" />
                        <circle cx="76.5" cy="76.5" r="61.35" fill="white" fill-opacity="0.17" stroke="white" stroke-width="0.3" />
                        <circle cx="76.5" cy="76.5" r="46.5" fill="white" />
                        <path d="M73.0188 84.7189L81.6304 77.4472C81.7691 77.33 81.8805 77.1846 81.9568 77.021C82.0332 76.8574 82.0727 76.6795 82.0727 76.4994C82.0727 76.3193 82.0332 76.1414 81.9568 75.9778C81.8805 75.8142 81.7691 75.6688 81.6304 75.5516L73.0188 68.2799C72.1968 67.5859 70.9272 68.1613 70.9272 69.2278V83.7731C70.9272 84.8396 72.1968 85.4149 73.0188 84.7189Z" fill="#3B3A5D" />
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default Section;
