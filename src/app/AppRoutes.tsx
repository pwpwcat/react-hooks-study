import { Routes, Route } from 'react-router'

import Home from '../pages/Home'
import About from '../pages/About'
import Study from '../pages/Study'
import Blog from '../pages/Blog'
import BlogShow from '../pages/Blog/Show'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/study" element={<Study />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogShow />} />
        </Routes>
    )
}

export default AppRoutes
