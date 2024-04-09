import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import Toggle from 'react-toggle';
import 'react-toggle/style.css';
import ContactBtn from '../ContactBtn';
import './Header.scss';
import '../ContactBtn/ContactBtn.scss';

const Header = ({
  scrollToElement,
  classStyle,
  scrollPosition,
  targetScroll,
}) => {
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
  }, [isDark]);

  return (
    <div>
      <div className={classStyle}>
        <div className="header__logo">
          <div className="svg-container">
            <svg
              className="chevron svg-container__svg svg-container__svg--left"
              width="44px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g pathLength="1" id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                pathLength="1"
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g pathLength="1" id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#e94d35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
            <svg
              className="line svg-container__svg svg-container__svg--center"
              width="44px"
              height="35px"
              viewBox="0 0 24 24 "
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g pathLength="1" id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                pathLength="1"
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g pathLength="1" id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M16,2.5 L8,24"
                  stroke="#e94d35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
            <svg
              className="chevron svg-container__svg svg-container__svg--right"
              width="44px"
              height="35px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g pathLength="1" id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g
                pathLength="1"
                id="SVGRepo_tracerCarrier"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></g>
              <g pathLength="1" id="SVGRepo_iconCarrier">
                {' '}
                <path
                  d="M15 6L9 12L15 18"
                  stroke="#e94d35"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></path>{' '}
              </g>
            </svg>
          </div>
          <p className="header__logo__title">webDev.</p>
        </div>
        <Toggle
          id="dark-mode"
          className="dark-mode"
          checked={isDark}
          // defaultChecked={isDark}
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
    </div>
  );
};

export default Header;
