from django.urls import path
from .views import lista_productos
from django.urls import path
from .views import ProductoListCreateView, ProductoDetailView
from .views import ProveedorListCreateView, ProveedorDetailView
from .views import MovimientoInventarioListView, MovimientoInventarioCreateView
from .views import ProductosStockBajoView

urlpatterns = [
    path('', lista_productos, name='lista_productos.html'),
    path('api/productos/', ProductoListCreateView.as_view(), name='productos_api'),
    path('api/productos/<int:pk>/', ProductoDetailView.as_view(), name='producto_detalle_api'),
    path('api/proveedores/', ProveedorListCreateView.as_view(), name='proveedores_api'),
    path('api/proveedores/<int:pk>/', ProveedorDetailView.as_view(), name='proveedor_detalle_api'),
    
    path('api/movimientos/', MovimientoInventarioListView.as_view(), name='movimientos_api'),
    path('api/movimientos/nuevo/', MovimientoInventarioCreateView.as_view(), name='movimiento_crear_api'),
    path('api/productos/stock_bajo/', ProductosStockBajoView.as_view(), name='productos_stock_bajo_api'),
]
