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
      const response = await fetch(
        '../../datas/certificates/certificates.json'
      );
      const datas = await response.json();
      console.log(response.status);
      if (response.status >= 400 && response.status < 500) {
        console.log(response.status, 'Not found!');
      }
      if (response.status >= 500) {
        console.log(response.status, 'Error server!');
      }
      setCertificates(datas);
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
