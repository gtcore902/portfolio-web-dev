import { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Hero from '../../components/Hero';
import Banner from '../../components/Banner';
import About from '../../components/About';
import SectionTitle from '../../components/SectionTitle';

const Home = () => {
  const [certificates, setCertificates] = useState([]);

  const fetchDatas = async () => {
    try {
      const datas = await fetch('../../datas/certificates/certificates.json');
      const response = await datas.json();
      if (datas.status === 200) {
        console.log(datas.status);
      }
      setCertificates(response);
      // set errors here
    } catch (error) {
      console.log(error);
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
      {certificates.map((certificate) => (
        <div key={certificate.id}>
          {certificate.title}
          {certificate.id}
        </div>
      ))}
    </div>
  );
};

export default Home;
