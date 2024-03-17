import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import About from '../../components/About';
import SectionTitle from '../../components/SectionTitle';
import Awards from '../../components/Awards';
import AddButton from '../../components/AddButton';
import codeIcon from '../../assets/code.svg';
import Projects from '../../components/Projects';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import '../../awardsContainer.scss';

const Home = () => {
  const [awards, setAwards] = useState([]);
  const [awardsSorted, setAwardsSortded] = useState([]);
  const [awardsSortedLength, setAwardsSortedLength] = useState(4);
  const [projects, setProjects] = useState([]);

  const fetchDatas = async (url, callback) => {
    try {
      const response = await fetch(url);
      const datas = await response.json();
      console.log(response.status);
      if (response.status >= 400 && response.status < 500) {
        console.log(response.status, 'Not found!');
      }
      if (response.status >= 500) {
        console.log(response.status, 'Error server!');
      }
      callback(datas);
    } catch (error) {
      console.log('Error :', error);
    }
  };

  const updateAwardsLength = () => {
    setAwardsSortedLength(awardsSortedLength + 4);
    setAwardsSortded(awards.slice(0, awards.length + 4));
  };

  useEffect(() => {
    fetchDatas('../../datas/awards/awards.json', setAwards);
    fetchDatas('../../datas/projects/projects.json', setProjects);
  }, []);

  useEffect(() => {
    setAwardsSortded(awards.slice(0, 4));
  }, [awards]);

  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <About />
      <SectionTitle title="Certifications" subtitle="Certificats de réussite" />
      <div className="awards-container">
        {awardsSorted.map((award, index) => (
          <Awards
            key={award.id}
            index={index + 1}
            title={award.title}
            organization={award.organization}
            date={award.date}
          />
        ))}
        {awardsSortedLength < awards.length && (
          <AddButton updateAwardsLength={updateAwardsLength} />
        )}
        {/* <img className="awards-container__code-icon" src={codeIcon} alt="" /> */}
      </div>
      <SectionTitle title="Portfolio" subtitle="Projets réalisés" />
      <div id="projects">
        {projects.map((project, index) => (
          <Projects
            className={
              index % 2 === 0 ? 'project' : 'project project--reversed'
            }
            key={project.id}
            title={project.title}
            projectUrl={project.projectUrl}
            imageUrl={project.imageUrl}
            tag={project.tag}
          />
        ))}
      </div>
      <SectionTitle title="Contact" subtitle={'Un besoin, un projet ?'} />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
