from django.db import models
import uuid
from djrichtextfield.models import RichTextField
# Create your models here.
class Branch(models.Model):
    id = models.UUIDField(
        primary_key=True, default=uuid.uuid4, editable=False, unique=True)
    
    branch_name = models.CharField(max_length = 100)
    created_at = models.DateTimeField(auto_now_add=True)
    # always change when object is updated
    updated_at = models.DateTimeField(auto_now=True)

    class Meta:
        verbose_name_plural = 'List of branches'

    def __str__(self):
        return str(self.branch_name)
