import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import StatsTxt from '../StatsText';
import StatsFlash from '../StatsFlash';
import './About.scss';

const About = () => {
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
          <h2>Développeur web Fullstack Javascript</h2>
        </div>
        <div className="about__text__content animatable">
          <h3 className="about__text__content__title">
            Je suis développeur web passionné, cherchant une équipe
            passionnée&nbsp;!
          </h3>
          {/* <p>
            Après avoir travaillé dans l'industrie, j'ai acquis une expérience
            significative dans le <strong>développement web</strong> et une
            solide expertise en <strong>gestion de clientèle</strong>. J'ai
            occupé des postes de chargé d'affaires dans les secteurs des
            télécommunications et de l'industrie.
            <br />
            <br />
            Ce parcours a renforcé mes compétences en formation et en gestion
            B2B.
            <br />
            <br />
            Après plusieurs années en tant que{' '}
            <strong>développeur web freelance</strong>, je souhaite mettre à
            profit ma <strong>polyvalence</strong>, mon engagement et ma
            capacité à combiner différentes compétences au sein d'une équipe
            axée sur le <strong>développement web</strong> et la{' '}
            <strong>relation client</strong>, que ce soit en présentiel ou à
            distance.
          </p> */}
          <p>
            J’aime allier mes compétences en <strong>développement web</strong>{' '}
            et en <strong>gestion de clientèle</strong>. Mes expériences de
            chargé d’affaires, d’encadrement d’équipe et de développeur web
            freelance me permettent de construire des{' '}
            <strong>solutions web de qualité</strong>, utilisables, et axées sur
            la <strong>satisfaction client</strong> et{' '}
            <strong>utilisateur</strong>.<br /> Le succès d’un projet repose sur
            des fondamentaux de qualité et de communication.
            <br /> Je souhaite continuer à <strong>développer</strong> ces
            compétences <strong>au sein d’une équipe</strong> axée sur le
            développement web et la relation client.
          </p>
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
