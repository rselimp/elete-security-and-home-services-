import React, { useEffect, useState } from 'react';
import HomeViewCardService from './HomeViewCardService';

const HomeViewService = () => {
    const[homeViews, setHomeView] = useState([])

    useEffect(()=>{
        fetch('homeServices.json')
        .then(res =>res.json())
        .then(data =>setHomeView(data))
    },[])
    return (
        <div>
            {
                homeViews.map(homeView =><HomeViewCardService key={homeView.id} homeView={homeView}></HomeViewCardService>)
            }
        </div>
    );
};

export default HomeViewService;