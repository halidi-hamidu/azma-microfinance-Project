from django.contrib import admin
from django.urls import path, include, re_path

from rest_framework import permissions
from .views import (
    BranchListCreateAPIView,
    BranchRetrieveUpdateDestroyAPIView,
)

app_name = 'azmaAppsApi'

urlpatterns = [
  
   path('branches/', BranchListCreateAPIView.as_view(), name="branches"),
   path('branch/<uuid:pk>/', BranchRetrieveUpdateDestroyAPIView.as_view(), name="branches"),
   

]