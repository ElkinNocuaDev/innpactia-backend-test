# ?? Innpactia Backend Test - Phone Repair API

Este proyecto es una **API RESTful** desarrollada con **Node.js + Express + Sequelize** que gestiona un taller de reparaci��n de celulares.  
Incluye m��dulos de **autenticaci��n**, **clientes**, **tel��fonos** y **reparaciones**, adem��s de pruebas unitarias con **Jest**.

---

## ?? Tecnolog��as utilizadas
- **Node.js**
- **Express.js**
- **Sequelize (ORM)**
- **PostgreSQL**
- **JWT (JSON Web Token)**
- **Jest** para pruebas unitarias
- **Swagger UI** para documentaci��n interactiva

---

## ?? Requisitos previos
Antes de ejecutar el proyecto, aseg��rate de tener instalado:
- [Node.js](https://nodejs.org/) (v16+ recomendado)  
- [PostgreSQL](https://www.postgresql.org/)  
- [Git](https://git-scm.com/)  

---

## ?? Instalaci��n

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


Ejecuci��n del servidor:

npm run dev


La API estar�� disponible en:

?? http://localhost:4000/api
?? Documentaci��n Swagger: http://localhost:4000/api-docs


?? Endpoints principales

?? Autenticaci��n

POST	/auth/register	Registrar un nuevo usuario
POST	/auth/login	    Iniciar sesi��n y obtener token JWT

?? Clientes

GET	    /clients	Obtener todos los clientes
POST	/clients	Crear un nuevo cliente

?? Tel��fonos

GET	    /phones/{clientId}	Obtener tel��fonos de un cliente
POST	/phones	            Crear un nuevo tel��fono

?? Reparaciones

GET	    /repairs	                Listar todas las reparaciones
GET	    /repairs/phone/{phoneId}	Reparaciones de un tel��fono espec��fico
POST	/repairs	                Crear una nueva reparaci��n

---

Este proyecto incluye pruebas unitarias con Jest.
Ejecuta las pruebas con:

npm test


Ejemplo de salida:

PASS src/tests/auth.test.js
  Auth Endpoints
    ? Debe loguear con usuario v��lido (151 ms)
    ? Debe rechazar login inv��lido (26 ms)

Test Suites: 1 passed, 1 total
Tests:       2 passed, 2 total

---

????? Autor

Elkin Nocua Dev





