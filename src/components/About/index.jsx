import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import StatsTxt from '../StatsText';
import StatsFlash from '../StatsFlash';
import './About.scss';

const About = () => {
  return (
    <div id="a-propos" className="about">
      <div className="about__text">
        <div className="about__text__title">
          GAETAN
          <FontAwesomeIcon className="flash-color icon-margin" icon={faCode} />
          TREMOIS
          <h2>Développeur web Fullstack Javascript</h2>
        </div>
        <div className="about__text__content">
          <h3 className="about__text__content__title">
            Je suis développeur web passionné, cherchant une équipe passionnée!
          </h3>
          <p>
            Avec une expérience enrichissante en{' '}
            <strong>développement web</strong> et une expertise solide en{' '}
            <strong>gestion de la clientèle</strong>, j'ai occupé des postes de
            chargé d'affaires dans les secteurs des télécommunications et de
            l'industrie.
            <br />
            <br />
            Mon parcours a renforcé mes compétences en formation et gestion B2B.
            <br />
            Après quelques années en tant que{' '}
            <strong>développeur web freelance</strong>, je souhaite mettre ma{' '}
            <strong>polyvalence</strong>, mon engagement, et ma capacité à
            combiner des compétences, à contribution au sein d'une équipe, dans
            un environnement axé sur le <strong>développement web</strong> et la{' '}
            <strong>relation client</strong>, que ce soit en présentiel ou à
            distance.
          </p>
          <div className="about__text__content__tags">
            <StatsTxt address="Résidence" city="Rouen" />
            <StatsTxt address="Expérience" city="4+ Ans" />
            <StatsTxt address="diplôme" city="RNCP Dév. Web." />
          </div>
        </div>
      </div>
      <div className="about__stats">
        <StatsFlash stat="17+" title="années d'éxpérience prof." />
        <StatsFlash stat="4+" title="années d'éxpérience web" />
        <StatsFlash stat="10+" title="projets réalisés" />
      </div>
    </div>
  );
};

export default About;
