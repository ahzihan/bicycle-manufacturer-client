import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import useAdmin from '../../Hooks/useAdmin';

const Dashboard = () => {
    const [ user ] = useAuthState( auth );
    const [ admin ] = useAdmin( user );
    return (
        <div className="drawer drawer-mobile">
            <input id="dashboard-sidebar" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content">
                <h2 className='text-secondary font-bold text-3xl my-5'>Welcome To Dashboard</h2>
                <Outlet />

            </div>
            <div className="drawer-side">
                <label htmlFor="dashboard-sidebar" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 bg-base-100 text-base-content">
                    <li><Link to="/dashboard">My Profile</Link></li>
                    {
                        user && !admin && <>
                            <li><Link to="/dashboard/myOrders">My Orders</Link></li>
                            <li><Link to="/dashboard/myReview">My Reviews</Link></li>
                        </>
                    }
                    {admin && <>
                        <li><Link to="/dashboard/users">All Users</Link></li>
                        <li><Link to="/dashboard/addProduct">Add Product</Link></li>
                        <li><Link to="/dashboard/manageProducts">Manage Products</Link></li>
                        <li><Link to="/dashboard/manageOrders">Manage All Orders</Link></li>
                    </>}
                </ul>
            </div>
        </div>
    );
};

export default Dashboard;