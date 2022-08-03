import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Blog from './features/blog/components/Blog';
import RateBlog from './features/blog/components/RateBlog';


const AppRoutes = () => {
    return (
        <Routes>
            <Route path='/' element={<Blog />} />
            <Route path='/rate' element={<RateBlog />} />
        </Routes>
    );
};

export default AppRoutes;