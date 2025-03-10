

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import $ from 'jquery';
import 'datatables.net-bs5';
import 'datatables.net-responsive-bs5';
import 'datatables.net-buttons-bs5';
import 'datatables.net-buttons/js/buttons.html5';
import 'jszip';
import 'pdfmake';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { Table, Container } from 'react-bootstrap';


// Cargar fuentes para evitar el error
pdfMake.vfs = pdfFonts.pdfMake.vfs;

const ProductosList = () => {
    const [productos, setProductos] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/productos/api/productos/')
            .then(response => {
                setProductos(response.data);
                setTimeout(() => {
                    $('#productosTable').DataTable({
                        responsive: true,
                        paging: true,
                        searching: true,
                        ordering: true,
                        info: true,
                        destroy: true,
                        dom: 'Bfrtip', // Activa los botones
                        buttons: [
                            {
                                extend: 'excelHtml5',  // Solo botón de exportación a Excel
                                text: 'Exportar a Excel',
                                className: 'btn btn-success'
                            },
                            {
                                extend: 'pdfHtml5',  // Botón para exportación a PDF
                                text: 'Exportar a PDF',
                                className: 'btn btn-danger'
                            }
                        ],
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
                            },
                            "buttons": {
                                "excel": "Exportar a Excel",
                                "pdf": "Exportar a PDF"
                            }
                        }
                    });
                }, 100);
            })
            .catch(error => {
                console.error('Error al obtener productos', error);
            });

        return () => {
            if ($.fn.DataTable.isDataTable('#productosTable')) {
                $('#productosTable').DataTable().destroy();
            }
        };
    }, []);

    return (
        <Container className="mt-4">
            <h2 className="text-center mb-4">Lista de Productos</h2>
            <Table striped bordered hover id="productosTable" className="display">
                <thead className="bg-primary text-white">
                    <tr>
                        <th>ID</th>
                        <th>Nombre</th>
                        <th>Categoría</th>
                        <th>Precio</th>
                        <th>Stock</th>
                    </tr>
                </thead>
                <tbody>
                    {productos.map(producto => (
                        <tr key={producto.id}>
                            <td>{producto.id}</td>
                            <td>{producto.nombre}</td>
                            <td>{producto.categoria}</td>
                            <td>${producto.precio}</td>
                            <td>{producto.stock}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
};

export default ProductosList;
