import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { BsMoonFill, BsFillSunFill, BsCheck } from "react-icons/bs";


import './Navbar.css';
import logoImage from '../../../images/download.png';
import { AuthContext } from '../../../contexts/AuthProvider/AuthProvider';
import Spinner from '../../Spinner/Spinner';

const Navbar = () => {
  const { user, loading, logOut } = useContext(AuthContext)
  const [theme, setTheme] = useState('light')



  const handleOnClick = () => {
    if (localStorage.getItem('theme') === 'light') {
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
    else {
      setTheme('light');
      localStorage.setItem('theme', 'light')
    }
  };

  useEffect(() => {
    const html = document.querySelector('html');
    if (localStorage.getItem('theme') === 'dark') {
      html.classList.add('dark');
      setTheme('dark')
    }
    else {
      html.classList.remove('dark');
      setTheme('light')
    }
  }, [theme])

  useEffect(() => {
    if (localStorage.getItem('theme') === null) {
      localStorage.setItem('theme', 'light')
    }
  }, [])


  const handleLogOut = () => {
    logOut()
      .then(() => { })
      .catch(error => { })

  }

  const menuItems = <React.Fragment>
    <li><button onClick={handleOnClick} className='p-2 bg-accent text-white rounded-full w-12 h-12 flex justify-center items-center dark:bg-gray-500'>
      {
        theme === 'light' ? <BsMoonFill></BsMoonFill> : <BsFillSunFill></BsFillSunFill>
      }
    </button></li>
    <li className='dark:text-white'><Link to='/'>Home</Link></li>


    {
      !user?.uid && !user?.email ?
      <>
      <li className='dark:text-white'><Link to='/aboutus'>About Us</Link></li>
      <li className='dark:text-white'><Link to='/blog'>Blog</Link></li>
    </>
  :
    <></>
    }


    <li className='dark:text-white'><Link to='/projects'>Projects</Link></li>
    <li className='dark:text-white'><Link to='/nowviewallservice'>Services</Link></li>
   


    {
      user?.uid && user?.email ?
        <>
          <li className='dark:text-white'><Link to='/orders'>Orders</Link></li>
          <li className='dark:text-white'> <button onClick={handleLogOut} className='btn-ghost'>Sign Out</button></li>
          <li className='dark:text-white'><Link to='/'>Welcome {user?.displayName}</Link></li>

        </>
        :
        <li className='dark:text-white'><Link to='/login'>Login</Link></li>

    }



  </React.Fragment>


  if (loading) {
    return <Spinner></Spinner>
  }

  return (
    <div className="navbar bg-sky-500 mx-auto sticky top-0 z-30 dark:bg-gray-600">
      <div className="navbar-start">

        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 dark:text-white dark:bg-gray-600">
            {menuItems}
          </ul>
        </div>

        <div>
          <div className='logo-nav-left rounded-full'>
            <h1>
              <a href="/">
                <span className=""><img className='w-10 h-10 -mt-10' src={logoImage} alt='' /></span>
                <span className=" logo-title dark:text-white ">A2Z Home Services</span>
              </a>

            </h1>

          </div>

        </div>


        
      </div>
      <div className="navbar-end hidden lg:flex">
        <ul className="menu menu-horizontal p-0 dark:text-white">
          {menuItems}
        </ul>
      </div>

    </div>
  );
};

export default Navbar;



