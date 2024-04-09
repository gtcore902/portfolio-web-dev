import './Skills.scss';
import Card from '../Card';

const Skills = () => {
  const hardSkills = [
    'HTML',
    'CSS',
    'SASS',
    'Tailwind CSS',
    'Javascript',
    'React JS',
    'Node JS',
    'Firebase',
  ];
  const softSkills = ['Prise de décision', 'Sens client', 'Autonomie'];
  const projectSkills = ['Git', 'GitHub', 'Méthode agile', 'Relation client'];
  const cmsSkills = [
    'NoSQL MongoDB',
    'API REST',
    'GraphQL',
    'WordPress',
    'Linux',
    'Base Python',
  ];
  return (
    <div className="skills">
      <Card title="Hard Skills" list={hardSkills} />
      <Card title="Soft Skills" list={softSkills} />
      <Card title="Gestion de projets" list={projectSkills} />
      <Card title="CMS & Autres" list={cmsSkills} />
    </div>
  );
};

export default Skills;
