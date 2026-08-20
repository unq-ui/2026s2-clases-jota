# express-init

API sencilla creada con [Express.js](https://expressjs.com/) para mostrar cómo levantar un servidor, definir rutas, recibir parámetros y validar cuerpos JSON.

## Requisitos

- Node.js 18 o superior
- npm

## Instalación

Desde la carpeta del proyecto, instala las dependencias:

```bash
npm install
```

## Ejecutar el proyecto

Inicia el servidor en modo desarrollo:

```bash
npm run dev
```

También puedes usar:

```bash
npm start
```

La API queda disponible en `http://localhost:3000`.

## Endpoints

### Obtener un usuario fijo

```http
GET /harcodedUser
```

Ejemplo:

```bash
curl http://localhost:3000/harcodedUser
```

Devuelve los datos del primer usuario del modelo, limitado a `id`, `name` e `image`.

### Obtener un usuario por índice

```http
GET /users/:userIndex
```

Ejemplo:

```bash
curl http://localhost:3000/users/1
```

El valor de `userIndex` se utiliza para buscar un usuario dentro de la lista provista por el modelo.

### Crear una categoría

```http
POST /category
Content-Type: application/json
```

Ejemplo:

```bash
curl -X POST http://localhost:3000/category \
	-H "Content-Type: application/json" \
	-d '{"name":"Electrónica"}'
```

El cuerpo debe incluir un campo `name` con un texto no vacío:

```json
{
  "id": "algunIdValido",
	"name": "Electrónica"
}
```

Si la validación es correcta, la API responde con estado `201` y la categoría creada. Si el cuerpo no es válido, responde con estado `400`:

```json
{
	"message": "Category name invalid"
}
```

## Estructura principal

- `index.js`: configura Express, registra el middleware JSON, define las rutas y levanta el servidor.
- `Schemas.js`: contiene el esquema de validación del cuerpo de creación de categorías usando Zod.
- `package.json`: define las dependencias y los comandos para ejecutar la API.

## Conceptos de Express utilizados

- `express()`: crea la aplicación.
- `app.use(express.json())`: permite leer cuerpos de solicitudes en formato JSON.
- `app.get(...)`: define endpoints para solicitudes `GET`.
- `app.post(...)`: define endpoints para solicitudes `POST`.
- `req.params`: permite acceder a parámetros de la URL.
- `req.body`: permite acceder al cuerpo JSON de una solicitud.
- `res.json(...)` y `res.status(...)`: construyen la respuesta HTTP.
- `app.listen(...)`: inicia el servidor en un puerto determinado.
