import React from 'react'
import Header from './Header'
import Footer from './Footer'
import Navbar from './Navbar'
import BrandBand from '@salesforce/design-system-react/components/brand-band';
import PageHeaderComponent from './PageHeader';
import Tabs from './Tabs';
import { Outlet } from "react-router-dom";

const Layout = () => (
    <>
        <Header />
        <Navbar />
        <section className='bg_banner'>
            <BrandBand style={{ padding: '10px' }}>
                <PageHeaderComponent />
                <Tabs />
                <Outlet />
            </BrandBand>
            <Footer />
        </section>
    </>
)

export default Layout