import React from 'react';
import { Outlet } from 'react-router';
import Login from '../pages/Login';

const AuthLayout = () => {
    return (
        <div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;