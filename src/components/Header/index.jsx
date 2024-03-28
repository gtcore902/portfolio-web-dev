import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import ContactBtn from '../ContactBtn';
import './Header.scss';
import '../ContactBtn/ContactBtn.scss';

const Header = ({ scrollToElement }) => {
  const [isDark, setIsDark] = useState(true);
  const setDarkMode = () => {
    isDark
      ? document.querySelector('body').setAttribute('data-theme', 'light')
      : document.querySelector('body').setAttribute('data-theme', 'dark');
  };
  useEffect(() => {
    setDarkMode();
  }, [isDark]);

  return (
    <div className="header">
      <div className="header__logo">
        <FontAwesomeIcon icon={faCode} size="2xl" className="flash-color" />
        <p className="header__logo__title">webDev.</p>
        <Toggle
          id="dark-mode"
          className="dark-mode"
          defaultChecked={isDark ? false : true}
          icons={{
            checked: <FontAwesomeIcon icon={faMoon} size="xs" />,
            unchecked: <FontAwesomeIcon icon={faSun} size="xs" />,
          }}
          onChange={() => setIsDark(!isDark ? true : false)}
        />
        <label htmlFor="dark-mode"></label>
      </div>

      <nav>
        <ul className="header__nav">
          <li className="header__nav__link">
            <a href="#a-propos" onClick={scrollToElement}>
              à propos
            </a>
          </li>
          <li className="header__nav__link">
            <a href="#projects" onClick={scrollToElement}>
              Projets
            </a>
          </li>
        </ul>
      </nav>
      <ContactBtn
        href="#contact"
        className="contact-link contact-link--animation hoverAnimation"
        textContent="Contact"
        scrollHandler={scrollToElement}
      />
    </div>
  );
};

export default Header;
