import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCode } from '@fortawesome/free-solid-svg-icons';
import './SectionTitle.scss';

const SectionTitle = ({ title, subtitle, id }) => {
  return (
    <div id={id} className="title-section animatable">
      <FontAwesomeIcon className="flash-color" icon={faCode} size="2xl" />
      <h2 className="title-section__title">{title}</h2>
      <h3 className="title-section__subtitle">{subtitle}</h3>
    </div>
  );
};

export default SectionTitle;
