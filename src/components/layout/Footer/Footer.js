import React from 'react';
import playStore from "../../../images/playstore.png";
import appStore from "../../../images/Appstore.png";
import "./Footer.css";
import FacebookRoundedIcon from '@mui/icons-material/FacebookRounded';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';


const Footer = () => {
    return (
        <footer id="footer">
            <div className="leftFooter">
                <h4>Download Our App</h4>
                <p>Download App for Android and IOS mobile phones</p>
                <img src={playStore} alt="playstoreImage" />
                <img src={appStore} alt="appstoreImage" />
            </div>

            <div className="midFooter">
                <h4>Ecommerce</h4>
                <p>High Quality is our first priority</p>

                <p>Copyright 2021 &copy; Ecommerce</p>
            </div>

            <div className="rightFooter">
                <h4>Keep in touch</h4>
                <a href="https://www.instagram.com"><InstagramIcon /></a>
                <a href="https://www.facebook.com"><FacebookRoundedIcon /></a>
                <a href="https://www.linkedin.com"><LinkedInIcon /></a>
            </div>
        </footer>
    )
}

export default Footer
