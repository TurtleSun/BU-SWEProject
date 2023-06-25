from django.urls import path, include
from myapp.views import your_view

urlpatterns = [
    path('', your_view, name='home'),
    path('accounts/', include('allauth.urls')),
    path('weather/', your_view, name='weather'),
]
