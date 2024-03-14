import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import About from '../../components/About';
import SectionTitle from '../../components/SectionTitle';
import Awards from '../../components/Awards';
import AddButton from '../../components/AddButton';

const Home = () => {
  const [awards, setAwards] = useState([]);
  // const [awardsLength, setAwardsLength] = useState(4);
  const [awardsSorted, setAwardsSortded] = useState([]);
  const [awardsSortedLength, setAwardsSortedLength] = useState(4);

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

  const updateAwardsLength = () => {
    setAwardsSortedLength(awardsSortedLength + 4);
    setAwardsSortded(awards.slice(0, awards.length + 4));
  };

  useEffect(() => {
    fetchDatas();
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
      {awardsSorted.map((award) => (
        <Awards
          key={award.id}
          index={award.index}
          title={award.title}
          organization={award.organization}
          date={award.date}
        />
      ))}
      {awardsSortedLength < awards.length && (
        // <button onClick={updateAwardsLength}>Ajouter</button>
        <AddButton updateAwardsLength={updateAwardsLength} />
      )}

      <SectionTitle title="Portfolio" subtitle="Projets réalisés" />
    </div>
  );
};

export default Home;
