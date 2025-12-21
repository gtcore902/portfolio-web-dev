import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import StatsTxt from '../StatsText';
import StatsFlash from '../StatsFlash';
import './About.scss';

const About = ({ degree, title, content }) => {
  let initialProfDate = new Date('01 Jan 2007 00:00:00 GMT');
  let initialWebDate = new Date('01 Jan 2020 00:00:00 GMT');
  let now = Date.now();
  let nowDate = new Date(now);
  const calculateYearsWorkXp = (initialDate) => {
    return nowDate.getFullYear() - initialDate.getFullYear();
  };
  return (
    <div className="about">
      <div className="about__text">
        <div className="about__text__title animatable">
          GAETAN
          <FontAwesomeIcon className="flash-color icon-margin" icon={faCode} />
          TREMOIS
          <h2>{degree}</h2>
        </div>
        <div className="about__text__content animatable">
          <h3 className="about__text__content__title">
            {title}
          </h3>
          <div>
            {content}
          </div>
          <div className="about__text__content__tags">
            <StatsTxt element="Résidence" firstDetail="Rouen" />
            <StatsTxt
              element="Expérience"
              firstDetail={`${calculateYearsWorkXp(initialWebDate)}+ Ans`}
            />
            <StatsTxt
              element="diplôme"
              firstDetail="RNCP Développeur Web."
              secondDetail="BTS Force de vente"
            />
          </div>
        </div>
      </div>
      <div className="about__stats animatable">
        <StatsFlash
          stat={`${calculateYearsWorkXp(initialProfDate)}+`}
          title="années d'expérience prof."
        />
        <StatsFlash
          stat={`${calculateYearsWorkXp(initialWebDate)}+`}
          title="années d'expérience web"
        />
        <StatsFlash stat="10+" title="projets réalisés" />
      </div>
    </div>
  );
};

export default About;
