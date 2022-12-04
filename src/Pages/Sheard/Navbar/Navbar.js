import React from 'react';
import { Link } from 'react-router-dom';
import {FaHome} from "react-icons/fa";
import './Navbar.css';
import logoImage from '../../../images/download.png';

const Navbar = () => {
    const menuItems = <React.Fragment>
        <li><Link>Home</Link></li>
        <li><Link>About Us</Link></li>
        <li><Link>Blog</Link></li>
        <li tabIndex={0}>
            <label tabIndex={0} className="m-1">Hover</label>
            <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><Link>Item 1</Link></li>
                <li><Link>Item 2</Link></li>
            </ul>
            </li>
        <li><Link>Login</Link></li>
        <li><Link>Item 3</Link></li>

    </React.Fragment>




    return (
        <div className="navbar bg-base-200">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {menuItems}
                    </ul>
                </div>
               
                    <div className='logo-nav-left rounded-full'> 
                        <h1>
                        <a href="/">
							<span className=""><img className='w-10 h-10 -mt-10' src={logoImage} alt=''/></span>
							<span className=" logo-title ">A2Z Home Services</span>
						</a>
							
                        </h1>
                    </div>
                
                    
                
            </div>
            <div className="navbar-end hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    {menuItems}
                </ul>
            </div>
            
        </div>
    );
};

export default Navbar;



					