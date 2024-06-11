# NestJS Environment Variables Setup

Este proyecto es un ejemplo de cómo manejar variables de entorno en un proyecto NestJS utilizando `@nestjs/config` en vez de dotenv. También demuestra cómo devolver información sobre estas variables en un formato HTML utilizando un endpoint específico.

## Instalación

1. Clona este repositorio en tu máquina local.
2. Navega hasta el directorio del proyecto.
3. Instala las dependencias con el comando `npm install`.

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto.
2. Define las variables de entorno requeridas en el archivo `.env`, por ejemplo:

DB_HOST=localhost
DB_USER=root
DB_PASS=123456
DB_NAME=database
DB_PORT=3306


## Uso

- Inicia el servidor de desarrollo con el comando `npm run start`.
- Abre tu navegador y navega a `http://localhost:3000` para ver la configuración de las variables de entorno en un formato HTML.

## Estructura del Proyecto

- `src/`: Contiene los archivos fuente del proyecto.
- `config/`: Contiene archivos relacionados con la configuración, como el esquema de validación.
- `.env`: Archivo para definir las variables de entorno.
- `package.json`: Archivo de configuración de npm con las dependencias y scripts del proyecto.

## Tecnologías Utilizadas

- [NestJS](https://nestjs.com/): Framework de Node.js para construir aplicaciones eficientes y escalables en el lado del servidor.
- [npm](https://www.npmjs.com/): Gestor de paquetes para Node.js.

## Licencia

Este proyecto está bajo la Licencia MIT.
