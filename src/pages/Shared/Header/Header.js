import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";
import auth from '../../../firebase.init';

const Header = () => {
    const [ user ] = useAuthState( auth );

    const logout = () => {
        signOut( auth );
        localStorage.removeItem( 'accessToken' );
    };
    const navbarItems = <>
        <li><Link to="/">Home</Link> </li>
        <li><Link to="/services">Services</Link> </li>
        <li><Link to="/about">AboutUs</Link> </li>
        <li><Link to="/contact">ContactUs</Link> </li>
        {
            user && <li><Link to="/dashboard">MyProfile</Link></li>
        }
        {
            user ? <li><Link onClick={logout} to="/login">LogOut</Link></li> : <li><Link to="/login">Login</Link></li>
        }
    </>;
    return (
        <div class="navbar sticky top-0 z-10 bg-base-100">
            <div class="navbar-start">
                <div class="dropdown">
                    <label tabindex="0" class="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabindex="0" class="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        {navbarItems}
                    </ul>
                </div>
                <Link to="/" class="btn btn-ghost uppercase text-xl">Bicycle Accessories</Link>
            </div>
            <div class="navbar-end">
                <div class="hidden lg:flex">
                    <ul class="menu menu-horizontal p-0">
                        {navbarItems}
                    </ul>
                </div>
                <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                </label>
            </div>
        </div>
    );
};

export default Header;