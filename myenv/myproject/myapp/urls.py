from django.urls import path
from myapp.views import CustomLoginView, CustomLogoutView

urlpatterns = [
    
    path('accounts/login/', CustomLoginView.as_view(), name='account_login'),
    path('accounts/logout/', CustomLogoutView.as_view(), name='account_logout'),
    
]
