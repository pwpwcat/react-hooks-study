import { Routes, Route } from 'react-router'

import Home from '../pages/Home'
import About from '../pages/About'
import Study from '../pages/Study'

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/study" element={<Study />} />
        </Routes>
    )
}

export default AppRoutes
