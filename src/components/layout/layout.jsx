import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './header';
import Footer from './footer';


const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>

            <main style={{ padding: '1rem' }}>
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;