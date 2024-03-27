import { Link } from 'react-router-dom';
import './Projects.scss';

const Projects = ({ title, projectUrl, imageUrl, description, className }) => {
  return (
    <Link className={`${className} animatable`} to={projectUrl}>
      <div className="project__image">
        <img src={imageUrl} alt={title} />
      </div>
      <div className="project__content">
        <div className="project__content__tag"></div>
        <h4>{title}</h4>
        <p>{description}</p>
        <p>Voir le projet</p>
      </div>
    </Link>
  );
};

export default Projects;
