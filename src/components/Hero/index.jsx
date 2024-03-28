import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import profilImg from '../../assets/profil_gaetan_tremois.webp';
import ContactBtn from '../ContactBtn';
import './Hero.scss';

const Hero = ({ scrollToElement }) => {
  return (
    <div className="hero" data-theme="dark">
      <div className="hero__informations opacityAnimation">
        <h1>
          Bonjour, je suis Gaëtan. <br />
          Développeur
          <FontAwesomeIcon
            icon={faCode}
            size="2xs"
            className="flash-color icon-margin"
          />
          web
        </h1>
        <h2 className="hero__informations__h2title">
          React JS
          <FontAwesomeIcon
            icon={faGear}
            size="2xs"
            className="flash-color icon-margin"
          />
          Node JS
        </h2>
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
        <img
          className="hero__image__container__image__profil opacityAnimation"
          src={profilImg}
          alt="Gaëtan TREMOIS Développeur web"
        />
      </div>
    </div>
  );
};

export default Hero;
