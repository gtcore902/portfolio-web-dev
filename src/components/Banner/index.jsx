import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import './Banner.scss';

const Banner = () => {
  return (
    <div id="a-propos" className="banner-container">
      <div className="banner-container__content">
        <div className="banner-container__content__techno">javascript</div>
        <FontAwesomeIcon className="flash-color" icon={faGear} />
        <div className="banner-container__content__techno">react</div>
        <FontAwesomeIcon className="flash-color" icon={faGear} />
        <div className="banner-container__content__techno">node</div>
        <FontAwesomeIcon className="flash-color" icon={faGear} />
        <div className="banner-container__content__techno">SASS</div>
        <FontAwesomeIcon className="flash-color" icon={faGear} />
        <div className="banner-container__content__techno">tailwind</div>
      </div>
    </div>
  );
};

export default Banner;
