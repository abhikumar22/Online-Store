import React from 'react';
import { NavLink } from 'react-router-dom'


export default function Error404() {
    return (
        <div>
            <h1>Error 404 !! The page you are trying to find is Not Available</h1>
            <NavLink to="/">Go To HomePage</NavLink>
        </div>
    );
}
