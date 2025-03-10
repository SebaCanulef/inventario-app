from django.shortcuts import render
from .models import Producto

from rest_framework.response import Response
from rest_framework import status
from rest_framework.views import APIView
from .models import Producto, MovimientoInventario, Proveedor
from .serializers import ProductoSerializer, MovimientoInventarioSerializer, ProveedorSerializer


def lista_productos(request):
    productos = Producto.objects.all()
    return render(request, 'lista_productos.html', {'productos': productos})

class ProductoListCreateView(APIView):
    def get(self, request):
        productos = Producto.objects.all()
        serializer = ProductoSerializer(productos, many=True)
        return Response(serializer.data)

    def post(self, request):
        serializer = ProductoSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

class ProductoDetailView(APIView):
    def get(self, request, pk):
        try:
            producto = Producto.objects.get(pk=pk)
            serializer = ProductoSerializer(producto)
            return Response(serializer.data)
        except Producto.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)

    def put(self, request, pk):
        try:
            producto = Producto.objects.get(pk=pk)
            serializer = ProductoSerializer(producto, data=request.data)
            if serializer.is_valid():
                serializer.save()
                return Response(serializer.data)
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
        except Producto.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)

    def delete(self, request, pk):
        try:
            producto = Producto.objects.get(pk=pk)
            producto.delete()
            return Response({"message": "Producto eliminado"}, status=status.HTTP_204_NO_CONTENT)
        except Producto.DoesNotExist:
            return Response({"error": "Producto no encontrado"}, status=status.HTTP_404_NOT_FOUND)





from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .models import Proveedor
from .serializers import ProveedorSerializer

class ProveedorListCreateView(ListCreateAPIView):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer

class ProveedorDetailView(RetrieveUpdateDestroyAPIView):
    queryset = Proveedor.objects.all()
    serializer_class = ProveedorSerializer





from django.shortcuts import get_object_or_404
from rest_framework.generics import CreateAPIView, ListAPIView
from .models import MovimientoInventario, Producto
from .serializers import MovimientoInventarioSerializer
from rest_framework import serializers


class MovimientoInventarioListView(ListAPIView):
    queryset = MovimientoInventario.objects.all()
    serializer_class = MovimientoInventarioSerializer

class MovimientoInventarioCreateView(CreateAPIView):
    serializer_class = MovimientoInventarioSerializer

    def perform_create(self, serializer):
        producto = get_object_or_404(Producto, id=self.request.data.get('producto'))
        cantidad = int(self.request.data.get('cantidad'))
        tipo = self.request.data.get('tipo')

        if tipo == 'ingreso':
            producto.stock += cantidad
        elif tipo == 'salida' and producto.stock >= cantidad:
            producto.stock -= cantidad
        else:
            raise serializers.ValidationError("Stock insuficiente para la salida.")

        producto.save()
        serializer.save()







from rest_framework.generics import ListAPIView
from django.db.models import Q

class ProductosStockBajoView(ListAPIView):
    serializer_class = ProductoSerializer

    def get_queryset(self):
        return Producto.objects.filter(stock__lt=5)
