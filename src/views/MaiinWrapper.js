import React from 'react'
import { Outlet } from 'react-router'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function MaiinWrapper() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />
        </>
    )
}
