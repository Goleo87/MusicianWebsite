import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faYoutube, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function FooterHome() {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="https://github.com/Goleo87" target='_blank' rel='noopener noreferrer'>
          <FontAwesomeIcon icon={faGithub} />
        </a>
        <a href="https://www.youtube.com/channel/UCxu6mVIxWzKi2XFEmVJ7b4w" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faYoutube} />
        </a>
        <a href="https://www.instagram.com/stefhanob" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faInstagram} />
        </a>
        <a href="https://www.linkedin.com/in/stefanoborrelli" target="_blank" rel="noopener noreferrer">
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
      <h4>© 2024 Stefhano. All rights reserved.</h4>
    </footer>
  );
};

export default FooterHome;


