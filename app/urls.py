from django.urls import path
from . import views
urlpatterns = [
    path("", views.index, name="app-index"),
    path("datatables", views.datatables, name="app-datatables")
]
