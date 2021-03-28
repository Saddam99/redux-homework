import React from 'react';
import FooterLogo from "./FooterLogo";
import FooterMenu from "./FooterMenu";
import Copyright from "./Copyright";

function Footer() {
    return (
        <div className='footer'>
            <div className="footer-cont">
              <FooterLogo />
              <FooterMenu />
            </div>
            <Copyright />
        </div>
    );
}

export default Footer;