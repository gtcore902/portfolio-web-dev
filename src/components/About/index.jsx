import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import StatsTxt from '../StatsText';
import StatsFlash from '../StatsFlash';
import './About.scss';

const About = () => {
  return (
    <div className="about">
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
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolores
            omnis, numquam nulla voluptates ipsam natus culpa sint. Aliquam,
            delectus laborum?
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
        <StatsFlash stat="10+" title="clients satisfaits" />
      </div>
    </div>
  );
};

export default About;
