import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUpRightFromSquare } from '@fortawesome/free-solid-svg-icons';

import './Projects.scss';

const Projects = ({ title, projectUrl, imageUrl, description, className }) => {
  return (
    <div className={`${className} animatable`}>
      <div className="project__image">
        <Link to={projectUrl}>
          <img src={imageUrl} alt={title} />
        </Link>
      </div>
      <div className="project__content">
        <div className="project__content__tag"></div>
        <h4>{title}</h4>
        <p className="description">{description}</p>
        <Link to={projectUrl}>
          <p className="link">
            <span>Voir le projet</span>
            <FontAwesomeIcon
              style={{ marginLeft: '5px' }}
              icon={faArrowUpRightFromSquare}
              className="flash-color"
              size="sm"
            />
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
