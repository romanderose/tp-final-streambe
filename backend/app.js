// Importa el framework Express para crear el servidor web
const express = require('express')

//para conectarse a la bd
const { Connection } = require('./src/db/connection');

// Importa el módulo CORS para permitir solicitudes desde otros dominios (Cross-Origin Resource Sharing)
const cors = require('cors')

// Importa el módulo nativo 'path' para manejar rutas de archivos
const path = require('path');

// Importa el enrutador personalizado para manejar las rutas relacionadas con "articles"
const articlesRouter = require('./src/routes/articlesRouter')

// Crea una instancia de la aplicación Express
const app = express()

// Llamar a Connection() para establecer la conexión al iniciar el servidor
Connection().catch(err => console.error('Error al conectar al inicio:', err));

// Middleware que habilita CORS para todas las rutas y orígenes
app.use(cors())

// Middleware que permite a la app entender cuerpos de solicitudes en formato JSON
app.use(express.json())

// Servir la carpeta "uploads" de forma pública
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Usa el enrutador 'articlesRouter' para manejar todas las rutas que comienzan con '/articles'
app.use('/articles', articlesRouter);

// Inicia el servidor en el puerto 3000 y muestra un mensaje en la consola cuando esté listo
app.listen(3000, ()=>{
    console.log("✅ Servidor corriendo en 'http://localhost:3000/' ")
})
