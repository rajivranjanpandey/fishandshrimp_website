import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/header/Header'
import Footer from '../components/footer/Footer'
import Box from '@mui/material/Box';

export default function MaiinWrapper() {
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
