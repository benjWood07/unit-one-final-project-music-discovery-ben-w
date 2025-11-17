import React from 'react';
import '../styles/Footer.css';

const Footer = () => {
    let thisYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <div>
                <h4>Contact Us</h4>
                <p>Link</p>
                <p>Link</p>
                </div>
                <div>
                <h4>Resources</h4>
                <p>Link</p>
                <p>Link</p>
                </div>
                <div>
                <h4>Community</h4>
                <p>Link</p>
                <p>Link</p>
                </div>
            </div>
            <div>
                <a href="#twitter">X</a>
                <a href="#instagram">Instagram</a>
                <a href="#youtube">YouTube</a>
                <a href="#linkedin">LinkedIn</a>
            </div>
            <div>&copy; {thisYear} SoundScout</div>
        </footer>
    );
};

export default Footer;
