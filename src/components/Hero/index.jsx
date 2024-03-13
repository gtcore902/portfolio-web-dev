import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import ContactBtn from '../ContactBtn';
import './Hero.scss';
// import '../ContactBtn/ContactBtn.scss';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero__informations">
        <h1>
          HI, I'M GAETAN. <br />
          DEVELOPPEUR
          <FontAwesomeIcon
            icon={faCode}
            size="2xs"
            className="flash-color icon-margin"
          />
          WEB
        </h1>
        <h2>
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
            className="contact-link contact-link--background-dark"
            textContent="Un projet ?"
          />
          <ContactBtn
            className="contact-link contact-link--background-light"
            textContent="Contact"
          />
        </div>
      </div>
      <div className="hero__image__container">
        <img
          className="hero__image__container__image__profil"
          src="https://i.pravatar.cc/400?img=68"
          alt="Gaëtan TREMOIS Développeur web"
        />
      </div>
    </div>
  );
};

export default Hero;
