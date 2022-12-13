import React from 'react';
import Navbar from '../src/app/navbar/Navbar'
import { Routes, Route } from "react-router-dom"
import './App.css';

import Dashboard from '../src/features/dashBoard'
import Heroes from '../src/features/heroes'
import HeroDetail from './features/heroDetail'

const App = () => {
    return (
        <>
            <Navbar />
            <Routes>
                <Route path='/dashboard' element={<Dashboard/>} />
                <Route path='/heroes' element={<Heroes/>} />
                <Route path='/hero_detail' element={<HeroDetail/>} />
            </Routes>
        </>
    )
}

export default App;
