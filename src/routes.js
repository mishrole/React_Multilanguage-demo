import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/homePage/HomePage';
import NotFoundPage from './pages/notFoundPage/NotFoundPage';
import AboutUsPage from './pages/aboutUsPage/AboutUsPage';
import ProductsPage from './pages/productsPage/ProductsPage';
import ServicesPage from './pages/servicesPage/ServicesPage';

const Root = () => {
    return (
        <Routes>
            <Route path ="/" element={<HomePage />}/>
            <Route path = "/about-us" element={<AboutUsPage />}/>
            <Route path = "/products" element={<ProductsPage />}/>
            <Route path = "/services" element={<ServicesPage/>}/>
            <Route path="*" element={<NotFoundPage />}/>
        </Routes>
    )
}

export default Root;