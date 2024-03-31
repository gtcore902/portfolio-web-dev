import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import { motion } from 'framer-motion';
import profilImg from '../../assets/profil_gaetan_tremois.webp';
import ContactBtn from '../ContactBtn';
import './Hero.scss';

const Hero = ({ scrollToElement }) => {
  return (
    <div className="hero" data-theme="dark">
      <div className="hero__informations opacityAnimation">
        <motion.h1
          initial={{ opacity: 0, y: -15, x: 0 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
        >
          GAETAN
          <FontAwesomeIcon
            icon={faCode}
            size="2xs"
            className="flash-color icon-margin"
          />
          <br />
          Développeur web
        </motion.h1>
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.3,
            delay: 0.6,
          }}
          className="hero__informations__h2title"
        >
          React JS
          <FontAwesomeIcon
            icon={faGear}
            size="2xs"
            className="flash-color icon-margin"
          />
          Node JS
        </motion.h2>
        <div className="hero__informations__btn">
          <ContactBtn
            href="#contact"
            className="contact-link contact-link--background-dark"
            textContent="Un projet ?"
            scrollHandler={scrollToElement}
          />
          <ContactBtn
            href="#contact"
            className="contact-link contact-link--background-light"
            textContent="Contact"
            scrollHandler={scrollToElement}
          />
        </div>
      </div>
      <div className="hero__image__container">
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            // type: 'spring',
            // stiffness: 260,
            duration: 0.5,
            delay: 0.9,
          }}
          className="hero__image__container__image__profil opacityAnimation"
          src={profilImg}
          alt="Gaëtan TREMOIS Développeur web"
        />
      </div>
    </div>
  );
};

export default Hero;
