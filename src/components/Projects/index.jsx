import { Link } from 'react-router-dom';
import './Projects.scss';

const Projects = ({
  id,
  title,
  projectUrl,
  imageUrl,
  tag,
  description,
  className,
}) => {
  return (
    <Link className={className} to={projectUrl}>
      <div className="project__image">
        <img src={imageUrl} alt="" />
      </div>
      <div className="project__content">
        <p className="project__content__tag">{tag}</p>
        <h4>{title}</h4>
        <p>Voir le projet</p>
      </div>
    </Link>
  );
};

export default Projects;
