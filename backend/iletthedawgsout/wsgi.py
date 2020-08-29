"""
WSGI config for iletthedawgsout project.

It exposes the WSGI callable as a module-level variable named ``application``.

For more information on this file, see
https://docs.djangoproject.com/en/2.1/howto/deployment/wsgi/
"""

import os

from django.core.wsgi import get_wsgi_application

if os.environ.get('DJANGO_ENV') == 'production':
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'iletthedawgsout.production')
else:
    os.environ.setdefault('DJANGO_SETTINGS_MODULE', 'iletthedawgsout.settings')    

application = get_wsgi_application()
