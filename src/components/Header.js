import React from 'react';
import { NavLink, Outlet } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <div>Header</div>
            <NavLink to='/products'>Our Products</NavLink>
            <NavLink to='/business-locations'>Business Locations</NavLink>
            <NavLink to='/our-vision'>Our Vision</NavLink>
            <NavLink to='/about-us'>About us</NavLink>
        </>
    )
}
