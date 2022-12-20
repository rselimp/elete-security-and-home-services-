import React from 'react';

const HomeViewCardService = ({ homeView }) => {
    const { title, img } = homeView
    return (
        <div className="hero bg-sky-300 dark:bg-gray-700">
            <div className="hero-content flex-col lg:flex-row">
                <img src={img} className="rounded-lg shadow-2xl" alt='' />
                <div className='p-10 ml-10'>
                    {
                        title.map(tiles =><h1 className='text-4xl font-bold p-3 border bg-base-200 mb-2 shadow-xl dark:text-white dark:bg-gray-600  '  key={tiles.id} tiles={tiles} >{tiles.name}
                        
                        <p className='text-xl'>{tiles.details}</p>
                        </h1>)
                    }
                    
                 
                </div>
            </div>
        </div>
    );
};

export default HomeViewCardService;