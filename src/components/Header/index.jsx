import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ContactBtn from '../ContactBtn';
import './Header.scss';

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
            <a href="#">Home</a>
          </li>
          <li className="header__nav__link">
            <a href="#">A propos</a>
          </li>
        </ul>
      </nav>
      <ContactBtn textContent="Contact" />
    </div>
  );
};

export default Header;
