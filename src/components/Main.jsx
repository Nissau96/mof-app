/* eslint-disable no-unused-vars */
import React from 'react';
import HeroImage from '../assets/First-day-2.jpg';
const Main = () => {
    return (
        <div>
            <img className="w-full h-screen object-cover object-left" src={HeroImage} alt="background image" />
            <div className="w-full h-screen absolute top-0 left-0 bg-[#0a192f]/40"></div>
        </div>
    )
}

export default Main