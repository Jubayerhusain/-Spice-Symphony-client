import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'

function MainLayout() {
    return (
        <div className='md:w-11/12 mx-auto'>
            <Navbar></Navbar>
            <Outlet />
            <Footer></Footer>
        </div>
    )
}

export default MainLayout
