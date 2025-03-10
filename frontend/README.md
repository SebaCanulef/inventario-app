# Inventario App

Este es un sistema de gestión de inventario desarrollado con **Django (Backend)** y **React (Frontend)**. Permite agregar, listar y actualizar productos, además de gestionar el stock.

## Características
- CRUD de productos (Crear, Leer, Actualizar, Eliminar)
- Control de stock
- API REST con Django Rest Framework
- Interfaz de usuario con React y Bootstrap
- Tablas interactivas con DataTables

---

## Instalación y Ejecución

### 1. Clonar el repositorio
```bash
git clone https://github.com/SebaCanulef/inventario-app.git
cd inventario-app
```

### 2. Configurar y ejecutar el Backend (Django)
```bash
cd backend
python -m venv venv
source venv/bin/activate  # En Windows: venv\Scripts\activate
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver
```
El backend correrá en `http://127.0.0.1:8000/`

### 3. Configurar y ejecutar el Frontend (React)
```bash
cd ../frontend
npm install
npm start
```
El frontend correrá en `http://localhost:3000/`

---

## API Endpoints
| Método | Endpoint | Descripción |
|---------|----------|-------------|
| GET | /api/productos/ | Obtener lista de productos |
| POST | /api/productos/ | Agregar un nuevo producto |
| PUT | /api/productos/:id/ | Actualizar un producto |
| DELETE | /api/productos/:id/ | Eliminar un producto |

---

## Tecnologías Utilizadas
- **Backend**: Django, Django Rest Framework, SQLite/PostgreSQL
- **Frontend**: React, Bootstrap, DataTables
- **Otros**: Git, GitHub, REST API

---


## Contribuciones
Si quieres contribuir, sigue estos pasos:
1. Haz un Fork del repositorio
2. Crea una nueva rama: `git checkout -b feature-nueva`
3. Realiza tus cambios y haz un commit: `git commit -m "Descripción del cambio"`
4. Sube los cambios a tu repositorio: `git push origin feature-nueva`
5. Crea un Pull Request

---

## Autor
**Seba Canulef**  
[GitHub](https://github.com/SebaCanulef)  

---

## Licencia
Este proyecto está bajo la licencia MIT. Puedes usarlo y modificarlo libremente.

