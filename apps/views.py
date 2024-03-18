from django.shortcuts import render
from .serializers import *
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .models import *
# Create your views here.
# start:branch
class BranchListCreateAPIView(generics.ListCreateAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        if serializer.is_valid():
            self.perfom_create(serializer)
            return Response({"message": "Data saved succefull"}, status = status.HTTP_201_CREATED)
        else:
            return Response({"message" : "Data not valid!"}, status = status.HTTP_400_BAD_REQUEST)



class BranchRetrieveUpdateDestroyAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Branch.objects.all()
    serializer_class = BranchSerializer

    def update(self, request, *args, **kwargs):
        instance = self.get_object()
        serializer = self.get_serializer(instance, data = request.data, partial= True)
        
        if serializer.is_valid():
            serializer.save()
            return Response({"message:Data updated"}, status = status.HTTP_200_OK)
        else:
            return Response({"message:Data not updated"}, status = status.HTTP_400_BAD_REQUEST)


    def destroy(self, request, *args, **kwargs):
        instance = self.get_object()
        self.perfome_destroy(instance)
        return Response({"message:Data deleted"}, status = status.HTTP_204_NO_CONTENT)


# end:branch


