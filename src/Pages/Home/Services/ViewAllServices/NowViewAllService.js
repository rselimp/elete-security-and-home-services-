import React from 'react';
import ContactInfo from '../../Home/ContactInfo/ContactInfo';
import HomeViewService from './HomeViewService';
import ViewAllServices from './ViewAllServices';

const NowViewAllService = () => {
    return (
        <div>
            <ViewAllServices></ViewAllServices>
            <HomeViewService></HomeViewService>
            <ContactInfo></ContactInfo>

        </div>
    );
};

export default NowViewAllService;