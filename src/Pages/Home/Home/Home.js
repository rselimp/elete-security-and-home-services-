import React from 'react';
import ScrollCount from '../../ScrollCount/ScrollCount';
import About from '../About/About';
import Banners from '../Banners/Banners';
import Containers from '../Containers/Containers';
import Services from '../Services/Services';
import ContactInfo from './ContactInfo/ContactInfo';


const Home = () => {
    return (
        <div className='max-w-[1400px] mx-auto'>
      <Banners></Banners>
      <Containers></Containers>
      <About></About>
      <ScrollCount></ScrollCount>
      <Services></Services>
      <ContactInfo></ContactInfo>
        </div>
    );
};

export default Home;