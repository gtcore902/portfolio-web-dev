import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import ContactBtn from '../ContactBtn';
import './Header.scss';
import '../ContactBtn/ContactBtn.scss';

const Header = ({ scrollToElement }) => {
  const [isDark, setIsDark] = useState(false);

  // Check if dark mode is set in local storage
  const getTheme = () => {
    if (localStorage.getItem('isDark') === 'true') {
      setIsDark(true);
      document.querySelector('body').setAttribute('data-theme', 'dark');
    } else {
      setIsDark(false);
      document.querySelector('body').setAttribute('data-theme', 'light');
    }
  };

  const setDarkMode = () => {
    if (isDark) {
      document.querySelector('body').setAttribute('data-theme', 'light');
      localStorage.setItem('isDark', 'false');
      setIsDark(false);
    } else {
      document.querySelector('body').setAttribute('data-theme', 'dark');
      localStorage.setItem('isDark', 'true');
      setIsDark(true);
    }
  };

  useEffect(() => {
    getTheme();
  }, []);

  return (
    <div className="header">
      <div className="header__logo">
        {/* <FontAwesomeIcon icon={faCode} size="2xl" className="flash-color" /> */}
        <svg
          class="filled"
          width="44px"
          height="35px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          stroke="#e94d35"
        >
          <g pathLength="1" id="SVGRepo_bgCarrier" stroke-width="0" />

          <g
            pathLength="1"
            id="SVGRepo_tracerCarrier"
            stroke-linecap="round"
            stroke-linejoin="round"
          />

          <g pathLength="1" id="SVGRepo_iconCarrier">
            <path
              d="M7 8L3 11.6923L7 16M17 8L21 11.6923L17 16M14 4L10 20"
              stroke="#e94d35"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </g>
        </svg>
        <p className="header__logo__title">webDev.</p>
      </div>
      <Toggle
        id="dark-mode"
        className="dark-mode"
        defaultChecked={
          localStorage.getItem('isDark') === 'true' ? true : false
        }
        aria-labelledby="dark-mode"
        aria-label="dark-mode"
        icons={{
          checked: <FontAwesomeIcon icon={faMoon} size="2xs" />,
          unchecked: <FontAwesomeIcon icon={faSun} size="2xs" />,
        }}
        onChange={setDarkMode}
      />

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
