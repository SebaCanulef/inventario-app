import React, { useEffect, useState } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-bs5/css/dataTables.bootstrap5.min.css';
import 'datatables.net-responsive-bs5/css/responsive.bootstrap5.min.css';
import { Table, Container } from 'react-bootstrap';

const ProductosList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/productos/api/productos/')
            .then(response => {
                console.log("Datos recibidos:", response.data);
                setProductos(response.data);

                setTimeout(() => {
                    if (!$.fn.DataTable.isDataTable('#productosTable')) {
                        $('#productosTable').DataTable({
                            responsive: true,
                            paging: true,
                            searching: true,
                            ordering: true,
                            info: true,
                            destroy: true,
                            language: {
                                "lengthMenu": "Mostrar _MENU_ registros por página",
                                "zeroRecords": "No se encontraron resultados",
                                "info": "Mostrando _START_ a _END_ de _TOTAL_ registros",
                                "infoEmpty": "Mostrando 0 a 0 de 0 registros",
                                "infoFiltered": "(filtrado de _MAX_ registros totales)",
                                "search": "Buscar:",
                                "paginate": {
                                    "first": "Primero",
                                    "last": "Último",
                                    "next": "Siguiente",
                                    "previous": "Anterior"
                                }
                            }
                        });
                    }
                }, 100);
            })
            .catch(error => {
                console.error("Error al obtener productos:", error);
            });

        return () => {
            if ($.fn.DataTable.isDataTable('#productosTable')) {
                $('#productosTable').DataTable().destroy();
            }
        };
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="mb-4">Lista de Productos</h2>
            <Table striped bordered hover id="productosTable" className="display">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.length > 0 ? (
                        productos.map(producto => (
                            <tr key={producto.id}>
                                <td>{producto.id}</td>
                                <td>{producto.nombre}</td>
                                <td>{producto.categoria}</td>
                                <td>${producto.precio}</td>
                                <td>{producto.stock}</td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No hay productos disponibles</td>
                        </tr>
                    )}
                </tbody>
            </Table>
        </Container>
    );
};

export default ProductosList;
