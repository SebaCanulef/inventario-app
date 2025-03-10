import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

const AgregarProducto = () => {
    const [nombre, setNombre] = useState('');
    const [categoria, setCategoria] = useState('');
    const [precio, setPrecio] = useState('');
    const [stock, setStock] = useState('');
    const [sku, setSku] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        const nuevoProducto = { nombre, categoria, precio, stock, sku };

        axios.post('http://127.0.0.1:8000/productos/api/productos/', nuevoProducto)
            .then(() => {
                alert('Producto agregado correctamente');
                setNombre('');
                setCategoria('');
                setPrecio('');
                setStock('');
                setSku('');
            })
            .catch(() => alert('Error al agregar producto'));
    };

    return (
        <Container className="mt-4">
            <h2 className="text-center">Agregar Producto</h2>
            <Form onSubmit={handleSubmit} className="p-4 border rounded bg-light">
                <Form.Group>
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Categoría</Form.Label>
                    <Form.Control type="text" value={categoria} onChange={(e) => setCategoria(e.target.value)} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" value={precio} onChange={(e) => setPrecio(e.target.value)} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>Stock</Form.Label>
                    <Form.Control type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
                </Form.Group>

                <Form.Group>
                    <Form.Label>SKU</Form.Label>
                    <Form.Control type="text" value={sku} onChange={(e) => setSku(e.target.value)} required />
                </Form.Group>

                <Button variant="primary" type="submit" className="mt-3">Agregar Producto</Button>
            </Form>
        </Container>
    );
};

export default AgregarProducto;
