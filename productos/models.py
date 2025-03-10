from django.db import models

class Producto(models.Model):
    nombre = models.CharField(max_length=255)
    categoria = models.CharField(max_length=100)
    precio = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.PositiveIntegerField()
    sku = models.CharField(max_length=50, unique=True)

    def __str__(self):
        return self.nombre

class MovimientoInventario(models.Model):
    TIPO_CHOICES = [('ingreso', 'Ingreso'), ('salida', 'Salida')]

    producto = models.ForeignKey(Producto, on_delete=models.CASCADE)
    tipo = models.CharField(max_length=10, choices=TIPO_CHOICES)
    cantidad = models.PositiveIntegerField()
    fecha = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.tipo} - {self.producto.nombre} ({self.cantidad})"

class Proveedor(models.Model):
    nombre = models.CharField(max_length=255)
    contacto = models.EmailField()
    productos = models.ManyToManyField(Producto)

    def __str__(self):
        return self.nombre
