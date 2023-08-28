// import React from 'react';
import Logo from '../assets/MoF__Logo.png';

const Header = () => {
    return (
        // <div className='fixed flex items-center justify-between w-full px-8 py-2 my-2 bg-[#0a192f] h-30 md:px-14 lg:px-24'>
        <div className="absolute w-full px-8 h-20 md:px-14 lg:px-24">
            <div className="">
                {/* logo */}
                <a href="profile" className="ml-2">
                    <img src={Logo} alt="Personal Brand-logo" style={{ width: '200px' }} />
                </a>
            </div>
        </div>

    )
}

export default Header