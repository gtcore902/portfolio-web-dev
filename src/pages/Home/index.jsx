import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import About from '../../components/About';
import SectionTitle from '../../components/SectionTitle';
import Awards from '../../components/Awards';
import AddButton from '../../components/AddButton';
import Projects from '../../components/Projects';
import ContactForm from '../../components/ContactForm';
import Footer from '../../components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowUp } from '@fortawesome/free-solid-svg-icons';

import '../../awardsContainer.scss';
import '../../_shared.scss';

const Home = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
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
          excerpt
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

  // Top menu & up arrow handler
  window.document.addEventListener('scroll', () => handleScroll());
  const targetScroll = 500;
  const handleScroll = () => {
    if (window.scrollY > targetScroll) {
      setScrollPosition(window.scrollY);
    } else {
      setScrollPosition(0);
    }
    // console.log(window.innerWidth, window.innerHeight);
  };

  const fetchDatas = async (url) => {
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
      datas = Array.from(datas.data.posts.edges);
      setAwards(
        datas.filter(
          (element) =>
            element.node.categories.edges[0].node.name === 'certificate'
        )
      );
      setProjects(
        datas.filter(
          (element) => element.node.categories.edges[0].node.name === 'project'
        )
      );
      setIsCertificatesLoaded(true);
      setIsProjectsLoaded(true);
    } catch (error) {
      console.log(error);
    }
  };
  const updateAwardsLength = () => {
    setAwardsSortedLength(awardsSortedLength + 4);
    setAwardsSortded(awards.slice(0, awardsSorted.length + 4));
  };

  useEffect(() => {
    fetchDatas('https://api.gaetantremois.fr/graphql');
  }, []);

  useEffect(() => {
    setAwardsSortded(awards.slice(0, 4));
  }, [awards]);

  const scrollToElement = (e) => {
    e.preventDefault();
    let element = document.getElementById(e.target.href.split('#')[1]);
    element.scrollIntoView();
  };

  return (
    <div>
      <div className="main-hero">
        <Header
          scrollToElement={scrollToElement}
          scrollPosition={scrollPosition}
          classStyle="header"
        />
        {/* {scrollPosition < targetScroll && (
          <Header
            scrollToElement={scrollToElement}
            scrollPosition={scrollPosition}
            classStyle="header"
          />
        )} */}
        {scrollPosition > targetScroll && (
          <Header
            scrollToElement={scrollToElement}
            scrollPosition={scrollPosition}
            classStyle="header fixed-menu"
          />
        )}
        <Hero scrollToElement={scrollToElement} />
        <Banner />
      </div>
      <About />
      <SectionTitle
        title="Certifications"
        subtitle="Quelques certificats de réussite"
      />
      {isCertificatesLoaded ? (
        <div className="awards-container">
          {awardsSorted.map((award, index) => (
            <Awards
              key={award?.node?.id}
              index={index + 1}
              title={award?.node?.title}
              organization={
                award?.node?.content
                  ?.split('<h2 class="wp-block-heading">')?.[1]
                  ?.split('</h2>')?.[0] || ''
              }
              date={
                `${award?.node?.date?.split('-')?.[1]}/${
                  award?.node?.date?.split('-')?.[0]
                }` || ''
              }
            />
          ))}
          {awardsSortedLength < awards.length && (
            <AddButton updateAwardsLength={updateAwardsLength} />
          )}
        </div>
      ) : (
        <div className="loader"></div>
      )}
      <SectionTitle
        id="projects"
        title="Portfolio"
        subtitle="Projets réalisés"
      />
      {isProjectsLoaded ? (
        <div>
          {projects.map((project, index) => (
            <Projects
              className={
                index % 2 === 0 ? 'project' : 'project project--reversed'
              }
              key={project?.node?.id}
              title={project?.node?.title.replaceAll('&#8217;', "'")}
              projectUrl={
                project?.node?.excerpt?.split('<p>')?.[1].split('</p>')?.[0]
              }
              imageUrl={
                project?.node?.content?.split('src="')?.[1].split('" alt')?.[0]
              }
              description={String(
                project?.node?.content
                  ?.split('<h2 class="wp-block-heading">')?.[1]
                  ?.split('</h2>')?.[0]
                  .replaceAll('&#8217;', "'")
              )}
            />
          ))}
        </div>
      ) : (
        <div className="loader">Loading ...</div>
      )}
      <SectionTitle
        id="contact"
        title="Contact"
        subtitle={'Une collaboration, un projet ?'}
      />
      <ContactForm />
      <Footer />
      <FontAwesomeIcon
        className={
          scrollPosition > 500 ? 'up-arrow up-arrow--visible' : 'up-arrow'
        }
        icon={faCircleArrowUp}
        size="2xl"
        onClick={() => window.scrollTo(0, 0)}
      />
    </div>
  );
};

export default Home;
