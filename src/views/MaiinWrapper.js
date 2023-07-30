import React, { useEffect } from 'react'
import { Outlet, useLocation } from 'react-router'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Box from '@mui/material/Box';

export default function MaiinWrapper() {
    const location = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [location])
    return (
        <>

            <Header />
            <Box component="main" sx={{ p: 3 }}>
                <Outlet />
                <Footer />
            </Box>
        </>
    )
}
