# OpsPilot Docker Starter

## Prerequisites
- Docker Desktop installed and running
- Docker Compose v2 (`docker compose`)

No local Python, Node.js, PostgreSQL or Redis installation is required.

## Start
1. Copy `.env.example` to `.env`.
2. Change the local database password and Django secret.
3. Run from this directory:

   docker compose up --build -d
   docker compose exec backend python manage.py migrate
   docker compose exec backend python manage.py createsuperuser

## URLs
- Frontend: http://localhost:5173
- Django API overview: http://localhost:8000/api/v1/overview/
- Backend health: http://localhost:8000/api/v1/health/
- Django admin: http://localhost:8000/admin/
- Swagger API docs: http://localhost:8000/api/docs/
- Prometheus: http://localhost:9090

## Useful commands
- docker compose ps
- docker compose logs -f backend
- docker compose logs -f celery
- docker compose down
- docker compose down -v  (WARNING: deletes persistent volumes and database data)

This is a development scaffold, not a production deployment. Prometheus initially scrapes itself; infrastructure exporters are added in the monitoring phase. Keep `.env` private and never commit it.
