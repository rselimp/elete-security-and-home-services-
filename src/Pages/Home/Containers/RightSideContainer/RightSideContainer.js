import React from 'react';
import mainImage1 from '../../../../images/settings.png';
import mainImage2 from '../../../../images/repair.png';
import mainImage3 from '../../../../images/tik.png';
import mainImage4 from '../../../../images/impro.png';
import ViewRightSide from './ViewRightSide';
import img1 from '../../../../images/bundle-services-1.png'



const RightSideContainer = () => {
    
    const viewsData =[
        {
            id:1,
            view_id:1,  
            name:'Maintenance',
            img:mainImage1,
            description: 'Maintenance workers, also known as repair workers, fix and maintain mechanical equipment, buildings, and machines'
        },
        {
            id:2,
            view_id:2,
            name:'Repair',
            img:mainImage2,
            description:'Maintenance workers, also known as repair workers, fix and maintain mechanical equipment, buildings, and machines'
        },
        {
            id:3,
            view_id:3,
            name:'Cleaning',
            img:mainImage3,
            description:'Maintenance workers, also known as repair workers, fix and maintain mechanical equipment, buildings, and machines'

        },
        {
            id:4,
            view_id:4,
            name:'Improvement',
            img:mainImage4,
            description:'Maintenance workers, also known as repair workers, fix and maintain mechanical equipment, buildings, and machines'

        }
       
    ]
   

    return (
       <div className='-mt-20 dark:bg-gray-600'>
        <div className='grid gap-4 grid-cols-1 lg:grid-cols-2'>
        {
            viewsData.map(viewData =><ViewRightSide key={viewData.id} viewData={viewData}></ViewRightSide>)
        }
        </div>
        <div className='mt-5 dark:bg-gray-800'>
        <img className='dark:bg-gray-600' src={img1} alt=''style={{height:'230px', width:'680px'}} />
        </div>
       </div>
    );
};

export default RightSideContainer;