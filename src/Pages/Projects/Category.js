import React from 'react';
import { Link } from 'react-router-dom';


const Category = ({category}) => {
   
const {name,_id,} = category
    

return (
        <div>
           <div className=''>
            <span className='btn btn-outline btn-accent'><Link to={`/categorycard/${_id}`}>{name}</Link></span>
            </div> 
            <div>

            </div>
        </div>
    );
};

export default Category;