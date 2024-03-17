import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ContactBtn from '../ContactBtn';
import './Header.scss';
import '../ContactBtn/ContactBtn.scss';

const Header = () => {
  return (
    <div className="header">
      <div className="header__logo">
        <FontAwesomeIcon icon={faCode} size="2xl" className="flash-color" />
        <p className="header__logo__title">webDev.</p>
      </div>

      <nav>
        <ul className="header__nav">
          <li className="header__nav__link">
            <a href="#a-propos">A propos</a>
          </li>
          <li className="header__nav__link">
            <a href="#projects">Projets</a>
          </li>
        </ul>
      </nav>
      <ContactBtn className="contact-link" textContent="Contact" />
    </div>
  );
};

export default Header;
