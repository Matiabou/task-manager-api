# Task Manager API

API REST profesional para gestión de tareas desarrollada con Node.js, Express, Prisma y PostgreSQL. Incluye autenticación JWT, control de acceso por roles (RBAC), validación con Zod y documentación con Swagger.

---

# 🚀 Características

- Autenticación JWT
- CRUD de tareas
- Roles de usuario y administrador
- Soft Delete
- Paginación y filtros
- Validación de datos
- Manejo global de errores
- Documentación Swagger

---

# 🛠️ Tecnologías

- Node.js
- Express.js
- PostgreSQL
- Prisma ORM
- JWT
- Zod
- Swagger
- Supabase
- Render

---

# 📂 Arquitectura

El proyecto sigue una arquitectura por capas:

- Routes → Endpoints
- Controllers → Manejo de requests/responses
- Services → Lógica de negocio
- Repositories → Acceso a base de datos

---

# 📘 Endpoints principales

## Auth

| Método | Endpoint |
|---|---|
| POST | /auth/register |
| POST | /auth/login |
| GET | /auth/me |

---

## Tasks

| Método | Endpoint |
|---|---|
| GET | /tasks |
| POST | /tasks |
| PUT | /tasks/:id |
| DELETE | /tasks/:id |

---

## Users (Admin)

| Método | Endpoint |
|---|---|
| GET | /users |

---

# ⚙️ Variables de entorno

```env
DATABASE_URL=your_database_url
JWT_SECRET=your_secret
```

---

# 📄 Extras

- Documentación Swagger disponible en `/api-docs`
- Soporte para filtros y paginación
- Licencia MIT
