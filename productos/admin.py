from django.contrib import admin
from .models import Producto, MovimientoInventario, Proveedor

admin.site.register(Producto)
admin.site.register(MovimientoInventario)
admin.site.register(Proveedor)
