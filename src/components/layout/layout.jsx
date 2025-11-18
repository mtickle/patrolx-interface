import { Outlet } from 'react-router-dom';
import Footer from './footer';
import Header from './header';


const Layout = () => {
    return (
        <>
            <header>
                <Header />
            </header>

            <main className="p-4">
                <Outlet />
            </main>

            <footer>
                <Footer />
            </footer>
        </>
    );
};

export default Layout;