import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import About from '../../components/About';
import SectionTitle from '../../components/SectionTitle';
import Awards from '../../components/Awards';

const Home = () => {
  const [awards, setAwards] = useState([]);

  const fetchDatas = async () => {
    try {
      const response = await fetch('../../datas/awards/awards.json');
      const datas = await response.json();
      console.log(response.status);
      if (response.status >= 400 && response.status < 500) {
        console.log(response.status, 'Not found!');
      }
      if (response.status >= 500) {
        console.log(response.status, 'Error server!');
      }
      setAwards(datas);
    } catch (error) {
      console.log('Error :', error);
    }
  };

  useEffect(() => {
    fetchDatas();
  }, []);

  return (
    <div>
      <Header />
      <Hero />
      <Banner />
      <About />
      <SectionTitle title="Certifications" subtitle="Certificats de réussite" />
      {awards.map((award) => (
        <Awards
          key={award.id}
          index={award.index}
          title={award.title}
          organization={award.organization}
          date={award.date}
        />
      ))}
      <SectionTitle title="Portfolio" subtitle="Projets réalisés" />
    </div>
  );
};

export default Home;
