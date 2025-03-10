import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import ProductosList from './components/ProductosList';
import AgregarProducto from './components/AgregarProducto';

function App() {
    return (
        <Router>
            <Navbar />
            <Routes>
                <Route path="/" element={<ProductosList />} />
                <Route path="/productos" element={<ProductosList />} />
                <Route path="/agregar-producto" element={<AgregarProducto />} />
            </Routes>
        </Router>
    );
}

export default App;
