import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import profilImg from '../../assets/profil_gaetan_tremois.jpg';
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
          />
          <ContactBtn
            href="#contact"
            className="contact-link contact-link--background-light"
            textContent="Contact"
          />
        </div>
      </div>
      <div className="hero__image__container">
        <img
          className="hero__image__container__image__profil"
          // src="https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          src={profilImg}
          alt="Gaëtan TREMOIS Développeur web"
        />
      </div>
    </div>
  );
};

export default Hero;
