import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Main from '../../Layout/Main/Main';
import AboutUs from '../../Pages/AboutUs/AboutUs';
import Blog from '../../Pages/Blog/Blog';
import DisplayError from '../../Pages/DisplayError/DisplayError';
import Containers from '../../Pages/Home/Containers/Containers';
import LeftSideContainer from '../../Pages/Home/Containers/LeftSideContainer/LeftSideContainer';

import Home from '../../Pages/Home/Home/Home';
import NowViewAllService from '../../Pages/Home/Services/ViewAllServices/NowViewAllService';
import ViewAllServices from '../../Pages/Home/Services/ViewAllServices/ViewAllServices';
import ViewCardAllServices from '../../Pages/Home/Services/ViewAllServices/ViewCardAllServices';
import Login from '../../Pages/Login/Login';
import OrderPlace from '../../Pages/OrderPlace/OrderPlace';
import Orders from '../../Pages/OrderPlace/Orders/Orders';
import Payment from '../../Pages/Payment/Payment';
import Category from '../../Pages/Projects/Category';
import CategoryCard from '../../Pages/Projects/CategoryCard';

import Projects from '../../Pages/Projects/Projects';
import SignUp from '../../SignUp/SignUp';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

export const router = createBrowserRouter([

    {
        path:'/',
        element:<Main></Main>,
        errorElement:<DisplayError></DisplayError>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
            {
                path:'/nowviewallservice',
                element:<NowViewAllService></NowViewAllService>
            },
            {
                path:'/orderplace/:id',
                element:<PrivateRoute><OrderPlace></OrderPlace></PrivateRoute>,
                loader: ({params}) => fetch(`https://elete-security-home-services-server.vercel.app/services/${params.id}`)

            },
            
          {
                path:'/orders',
                element:<Orders></Orders>
            },
            {
                path:'/projects',
                element:<Projects></Projects>

            },
            {
                path:'/category/:id',
                element:<Category></Category>,   
            },
            {
                path:'/categorycard/:id',
                element:<CategoryCard></CategoryCard>,
                loader: ({params}) =>fetch(`https://elete-security-home-services-server.vercel.app/categories/${params.id}`)
            },
            {
                path:'/payment/:id',
                element:<Payment></Payment>,
                loader: ({params}) =>fetch(`https://elete-security-home-services-server.vercel.app/orders/${params.id}`)
            },
            {
               path:'/aboutus',
               element:<AboutUs></AboutUs>
            },
            {
                path:'blog',
                element:<Blog></Blog>
            },
            

        ]
    }
])

export default router;