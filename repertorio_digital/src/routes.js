import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React from 'react';

import Home from './pages/Home';
import Repertorio from './pages/Repertorio';
import AddRepertorio from './pages/AddRepertorio';
import AddMusicas from './pages/AddMusicas';
import MusicaNoRepertorio from './pages/MusicaNoRepertorio';

function RoutesApp() {

    return (

        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/repertorio/:id' element={<Repertorio />} />
                <Route path='/add-repertorio' element={<AddRepertorio/>} />
                <Route path='/add-musica' element={<AddMusicas/>} />
                <Route path='/musica-no-repertorio' element={<MusicaNoRepertorio/>} />
            </Routes>
        </BrowserRouter>
    );
}

export default RoutesApp;