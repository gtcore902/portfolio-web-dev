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
  const fetchDatas2 = async (url, callback) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: ` {
            posts(first: 100) {
              edges {
                node {
                  id
                  title
                  date
                  content
                  categories {
                    edges {
                      node {
                        id
                        name
                      }
                    }
                  }
                }
              }
            }
          }`,
        }),
      });
      let datas = await response.json();
      // console.log(datas.data.posts.edges);
      // console.log(typeof datas.data.posts.edges);
      // console.log(Array.from(datas.data.posts.edges));
      datas = Array.from(datas.data.posts.edges); // check for second call for projects
      // datas = datas.filter(
      //   (element) =>
      //     element.node.categories.edges[0].node.name === 'certificate'
      // );
      console.log(datas);
      callback(
        datas.filter(
          (element) =>
            element.node.categories.edges[0].node.name === 'certificate'
        )
      );
    } catch (error) {
      console.log(error);
    }
  };
  const updateAwardsLength = () => {
    setAwardsSortedLength(awardsSortedLength + 4);
    setAwardsSortded(awards.slice(0, awardsSorted.length + 4));
  };

  useEffect(() => {
    fetchDatas2('https://api.gaetantremois.fr/graphql', setAwards);
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
            key={award.node.id}
            index={index + 1}
            title={award.node.title}
            organization={
              award.node.content
                .split('<h2 class="wp-block-heading">')[1]
                .split('</h2>')[0]
            }
            date={`${award.node.date.split('-')[1]}/${
              award.node.date.split('-')[0]
            }`}
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
            title={project.title.rendered}
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
