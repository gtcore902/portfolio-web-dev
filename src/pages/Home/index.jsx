import { useState, useEffect, Suspense } from 'react';
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
  const [isCertificatesLoaded, setIsCertificatesLoaded] = useState(false);
  const [isProjectsLoaded, setIsProjectsLoaded] = useState(false);
  const [awardsSortedLength, setAwardsSortedLength] = useState(4);
  const [projects, setProjects] = useState([]);
  const query = ` {
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
  }`;

  // const fetchDatas = async (url, callback) => {
  //   try {
  //     const response = await fetch(url);
  //     const datas = await response.json();
  //     console.log(response.status);
  //     if (response.status >= 400 && response.status < 500) {
  //       console.log(response.status, 'Not found!');
  //     }
  //     if (response.status >= 500) {
  //       console.log(response.status, 'Error server!');
  //     }
  //     callback(datas);
  //   } catch (error) {
  //     console.log('Error :', error);
  //   }
  // };
  const fetchDatas = async (url, callback, filter, updateState) => {
    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: query,
        }),
      });
      let datas = await response.json();
      // console.log(datas.data.posts.edges);
      // console.log(typeof datas.data.posts.edges);
      // console.log(Array.from(datas.data.posts.edges));
      datas = Array.from(datas.data.posts.edges); // check for second call for projects
      console.log(datas);
      callback(
        datas.filter(
          (element) => element.node.categories.edges[0].node.name === filter
        )
      );
      updateState(true);
    } catch (error) {
      console.log(error);
    }
  };
  const updateAwardsLength = () => {
    setAwardsSortedLength(awardsSortedLength + 4);
    setAwardsSortded(awards.slice(0, awardsSorted.length + 4));
  };

  useEffect(() => {
    fetchDatas(
      'https://api.gaetantremois.fr/graphql',
      setAwards,
      'certificate',
      setIsCertificatesLoaded
    );
    fetchDatas(
      'https://api.gaetantremois.fr/graphql',
      setProjects,
      'project',
      setIsProjectsLoaded
    );
  }, []);

  useEffect(() => {
    setAwardsSortded(awards.slice(0, 4));
  }, [awards]);

  return (
    <div>
      {/* <Suspense fallback={<div>Loading ...</div>}> */}
      <Header />
      <Hero />
      <Banner />
      <About />
      <SectionTitle title="Certifications" subtitle="Certificats de réussite" />
      {isCertificatesLoaded ? (
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
      ) : (
        <div className="loader">Loading ...</div>
      )}
      <SectionTitle title="Portfolio" subtitle="Projets réalisés" />
      {isProjectsLoaded ? (
        <div id="projects">
          {projects.map((project, index) => (
            <Projects
              className={
                index % 2 === 0 ? 'project' : 'project project--reversed'
              }
              key={project.node.id}
              title={
                project.node.title
                // .split('<h1 class="wp-block-heading">')[1]
                // .split('</h1>')[0]
              }
              projectUrl={project.projectUrl}
              imageUrl={
                project.node.content.split('src="')[1].split('" alt')[0]
              }
              tag={
                project.node.content
                  .split('<h2 class="wp-block-heading">')[1]
                  .split('</h2>')[0]
              }
            />
          ))}
        </div>
      ) : (
        <div className="loader">Loading ...</div>
      )}
      <SectionTitle title="Contact" subtitle={'Un besoin, un projet ?'} />
      <ContactForm />
      <Footer />
      {/* </Suspense> */}
    </div>
  );
};

export default Home;
