import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import About from '../Home/About/About';
import ContactInfo from '../Home/Home/ContactInfo/ContactInfo';
import Category from './Category';
import CategoryCard from './CategoryCard';

const Projects = () => {
const [categories, setCategories] = useState([])


useEffect( () =>{
    fetch('https://elete-security-home-services-server.vercel.app/categories')
    .then(res =>res.json())
    .then(data =>setCategories(data))
},[])
    return (
        <div>
            <About></About>
            <div>
                <h1 className='text-center text-5xl mb-10 text-blue-700'>Our Projects</h1>
            </div>
            <div className='flex justify-center gap-6'>
               
               
               {
                    categories.map(category =><Category key={category._id} category={category} >
                    </Category>)
                }
               
            </div>
            <div>
            </div>
            <ContactInfo></ContactInfo>
        </div>
    );
};

export default Projects;