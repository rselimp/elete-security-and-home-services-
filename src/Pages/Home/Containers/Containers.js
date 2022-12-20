
import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import OrderPlace from '../../OrderPlace/OrderPlace';
import LeftSideContainer from './LeftSideContainer/LeftSideContainer';
import RightSideContainer from './RightSideContainer/RightSideContainer';

const Containers = () => {
   
    return (
        <div className='grid grid cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div>
                
            <div className=''>
     
            <LeftSideContainer ></LeftSideContainer>
            </div>
            </div>
            <div className=''>
            <RightSideContainer></RightSideContainer>
            </div>
        </div>
    );
};

export default Containers;