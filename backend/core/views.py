from django.http import JsonResponse
from rest_framework.decorators import api_view
from rest_framework.response import Response
def health(request):
    return JsonResponse({"status":"ok","service":"opspilot-backend"})
@api_view(["GET"])
def overview(request):
    return Response({"name":"OpsPilot","version":"0.1.0","message":"API is running."})
