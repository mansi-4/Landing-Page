from django.shortcuts import render
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from rest_framework.exceptions import AuthenticationFailed
from base.models import Users
from django.contrib.auth.hashers import make_password, check_password
import jwt, datetime
from django.core.mail import send_mail
from django.conf import settings
# Create your views here.

@api_view(['POST'])
def createContact(request):
    data=request.data
    print(data)
    name=data["name"]
    email=data["email"]
    message=data["message"]
    try:
        send_mail(
            subject='Thank you for getting in touch! ',
            message=f'''
                Hi {name}, \n
                We appreciate you contacting us. \n
                One of our colleagues will get back in touch with you soon!\n
                Have a great day!\n
                Thanks & Regards, 
                Offline2Online Team.

            ''',
            from_email=settings.EMAIL_HOST_USER,
            recipient_list=[email],
            fail_silently=False
        )
        send_mail(
            subject='Contact Enquiry! ',
            message=f'''
                Name - {name} \n
                Email - {email} \n
                Message - {message} \n
                Please reach out to this lead!
            ''',
            from_email=email,
            recipient_list=[settings.EMAIL_HOST_USER],
            fail_silently=False
        )
        return Response("Email Sent Successfully")
    except:
        return Response("Failed to send Email")
    
    
    
