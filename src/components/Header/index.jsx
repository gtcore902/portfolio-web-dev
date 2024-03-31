import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode, faMoon, faSun } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
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
        <FontAwesomeIcon icon={faCode} size="2xl" className="flash-color" />
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
          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              duration: 0.5,
              delay: 1.4,
            }}
            className="header__nav__link"
          >
            <a href="#a-propos" onClick={scrollToElement}>
              à propos
            </a>
          </motion.li>
          <motion.li
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 260,
              duration: 0.5,
              delay: 1.7,
            }}
            className="header__nav__link"
          >
            <a href="#projects" onClick={scrollToElement}>
              Projets
            </a>
          </motion.li>
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
