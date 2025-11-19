import React from 'react';
import '../styles/Footer.css';

function Footer() {
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
        <div className="social-links">
          <a href="#instagram">Instagram</a>
          <a href="#youtube">YouTube</a>
          <a href="#linkedin">LinkedIn</a>
        </div>
        <p className="copyright">© 2025 SoundScouter</p>
      </div>
    </footer>
  );
}

export default Footer;
