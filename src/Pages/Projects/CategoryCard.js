import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CategoryCard = () => {
    const {name,imgUrl1,imgUrl2,imgUrl3,imgUrl4,imgUrl5,imgUrl6,imgUrl7,imgUrl8,imgUrl9,imgUrl10,imgUrl11,imgUrl12,imgUrl13} = useLoaderData()
    return (
        <div>
            <p>{name}</p>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
                <img src={imgUrl1} alt=''/>
                <img src={imgUrl2} alt=''/>
                <img src={imgUrl3} alt=''/>
                <img src={imgUrl4} alt=''/>
                <img src={imgUrl5} alt=''/>
                <img src={imgUrl6} alt=''/>
                <img src={imgUrl7} alt=''/>
                <img src={imgUrl8} alt=''/>
                <img src={imgUrl9} alt=''/>
                <img src={imgUrl10} alt=''/>
                <img src={imgUrl11} alt=''/>
                <img src={imgUrl12} alt=''/>
                
                
            </div>
        </div>
    );
};

export default CategoryCard;