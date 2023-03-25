import React from 'react';
import './header.css';
import HeaderDesktop from './headerDesktop';
import HeaderMobile from './headerMobile';
function Header() {
    return ( <>
    <div className='mobile'>
        <HeaderMobile/>
    </div>
    <div className='desktop'>
        <HeaderDesktop/>
    </div>
    </> );
}

export default Header;