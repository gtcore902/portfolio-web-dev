import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFlickr } from '@fortawesome/free-brands-svg-icons';

import './Footer.scss';

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer__information">
        <FontAwesomeIcon icon={faCode} size="2xl" />
        <p>Made by Gaëtan TREMOIS with MERN stack</p>
      </div>
      <div className="footer__links">
        <Link to="https://github.com/gtcore902">
          <FontAwesomeIcon icon={faGithub} size="xl" />
        </Link>
        <Link to="https://www.linkedin.com/in/ga%C3%ABtan-tremois-a956a91a3/">
          <FontAwesomeIcon icon={faLinkedin} size="xl" />
        </Link>
        <Link to="https://www.flickr.com/photos/186142483@N06/">
          <FontAwesomeIcon icon={faFlickr} size="xl" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
