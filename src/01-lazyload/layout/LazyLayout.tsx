import { NavLink, Navigate, Route, Routes } from 'react-router-dom';
import { LazyPag1, LazyPag2, LazyPag3 } from '../pages';

export const LazyLayout = () => {
    return (
        <div>
            <h1>lazyLayout Page</h1>
            {/* Rutas Hijas */}
            <ul>
                <li>
                    <NavLink to="lazy1">Lazy1</NavLink>
                </li>
                <li>
                    <NavLink to="lazy2">Lazy2</NavLink>
                </li>
                <li>
                    <NavLink to="lazy3">Lazy3</NavLink>
                </li>
            </ul>
            <Routes>
                <Route path='lazy1' element={<LazyPag1 />} />
                <Route path='lazy2' element={<LazyPag2 />} />
                <Route path='lazy3' element={<LazyPag3 />} />

                <Route path='*' element={<Navigate replace to="lazy1" />} />
            </Routes>
        </div>
    )
}

export default LazyLayout;