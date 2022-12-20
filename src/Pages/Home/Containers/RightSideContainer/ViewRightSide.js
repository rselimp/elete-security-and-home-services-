import React from 'react';

const ViewRightSide = ({ viewData }) => {
    const { name, img, description } = viewData;
    return (
        <div>
            <div className="card text-neutral-content mr-5 dark:bg-gray-500  bg-blue-800" >
                <div className="card-body items-center text-center">
                    <h2 className="card-title text-4xl text-orange-300 dark:text-white">{name}</h2>
                    <p>{description}</p>
                    
                </div>
            </div>
        </div>
        
    );
};

export default ViewRightSide;