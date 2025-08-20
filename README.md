# Innpactia Backend Test - Phone Repair API

Este proyecto es una **API RESTful** desarrollada con **Node.js + Express + Sequelize** que gestiona un taller de reparacion de celulares.  
Incluye modulos de **autenticacion**, **clientes**, **telefonos** y **reparaciones**, ademas de pruebas unitarias con **Jest**.

---

## Tecnologias utilizadas

- **Node.js**
- **Express.js**
- **Sequelize (ORM)**
- **PostgreSQL**
- **JWT (JSON Web Token)**
- **Jest** para pruebas unitarias
- **Swagger UI** para documentacion interactiva

---

## Requisitos previos

Antes de ejecutar el proyecto, asegurate de tener instalado:

- [Node.js](https://nodejs.org/) (v16+ recomendado)  
- [PostgreSQL](https://www.postgresql.org/)  
- [Git](https://git-scm.com/)  

---

## Instalacion

Clona el repositorio:
```bash
git clone https://github.com/ElkinNocuaDev/innpactia-backend-test.git
cd innpactia-backend-test

npm install


Configura el archivo .env con tus variables de entorno (ejemplo):

PORT=4000
DB_HOST=localhost
DB_USER=postgres
DB_PASS=tu_password
DB_NAME=phone_repair
JWT_SECRET=supersecreto


Ejecucion del servidor:

npm run dev


La API estara disponible en:

http://localhost:4000/api

Documentacion Swagger: http://localhost:4000/api-docs


Endpoints principales

Autenticacion

POST	/auth/register	Registrar un nuevo usuario
POST	/auth/login	    Iniciar sesion y obtener token JWT

Clientes

GET	    /clients	Obtener todos los clientes
POST	/clients	Crear un nuevo cliente

Telefonos

GET	    /phones/{clientId}	Obtener telefonos de un cliente
POST	/phones	            Crear un nuevo telefono

Reparaciones

GET	    /repairs	                Listar todas las reparaciones
GET	    /repairs/phone/{phoneId}	Reparaciones de un telefono especifico
POST	/repairs	                Crear una nueva reparacion

---

Este proyecto incluye pruebas unitarias con Jest.
Ejecuta las pruebas con:

npm test


Ejemplo de salida:

PASS src/tests/auth.test.js
  Auth Endpoints
    Debe loguear con usuario valido (151 ms)
    Debe rechazar login invalido (26 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total

---

Autor

Elkin Nocua Dev





