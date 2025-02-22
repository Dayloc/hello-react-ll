import React from 'react'
import Home from './Home';
import Demo from './demo';
import { BrowserRouter,Routes,Route } from 'react-router';

 const Layout = () => {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route element={<Home />} path="/" />
                    <Route element={<Demo />} path="/demo" />                    
                    <Route element={<h1>Not found!</h1>} />
                </Routes>
            </BrowserRouter>
        </div>
    );
}
export default Layout;