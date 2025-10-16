// Importamos el modelo de artículos que contiene las funciones para interactuar con la base de datos
const articlesModel = require('../models/articlesModel');

// Controlador para obtener todos los artículos
async function getAllController(req, res) {
    try {
        // Llamamos al modelo para obtener los datos desde la base de datos
        const data = await articlesModel.getAllArticles();

        // Enviamos la respuesta con los datos en formato JSON
        res.json(data);
    } catch (err) {
        // Si ocurre un error, respondemos con un código 500 y el mensaje del error
        res.status(500).json({ error: err.message });
    }
}

// Para buscar un producto por su nombre o parte de él, si existe
async function searchController(req, res) {
    try {
        const { name_article } = req.query;
        console.log("🟢 name_article recibido:", name_article);

        const data = await articlesModel.searchArticle(name_article);

        res.json(data);
    } catch (err) {
        console.error('❌ Error en searchController:', err);
        res.status(500).json({ error: err.message });
    }
}

//para obtener un artículo por su id
async function getByIdController(req, res) {
    try {
        const { id } = req.params;

        const parsedId = parseInt(id, 10);

        if (isNaN(parsedId)) {
            return res.status(400).json({ error: "ID inválido. Debe ser un número entero." });
        }

        const data = await articlesModel.getArticleById(parsedId);

        res.json(data);
    } catch (err) {
        console.error("❌ Error en getByIdController:", err);
        res.status(500).json({ error: err.message });
    }
}


// Controlador para crear un nuevo artículo
async function createController(req, res) {
    try {
        // Obtenemos los datos enviados en el cuerpo de la solicitud
        const { name_article, price } = req.body;

        // ✅ Validación del nombre del artículo
        if (!name_article || typeof name_article !== 'string' || name_article.trim() === '') {
            return res.status(400).json({
                error: 'El nombre del artículo es obligatorio y debe ser un string.'
            });
        }

        // ✅ Validación del precio del artículo
        if (price === undefined || isNaN(price)) {
            return res.status(400).json({
                error: 'El precio del artículo es obligatorio y debe ser un número.'
            });
        }

        // ⚠️ Asegurarse de que el precio sea un número (por si viene como string)
        const numericPrice = parseFloat(price);

        // Llamamos al modelo para insertar el nuevo artículo en la base de datos
        await articlesModel.addArticle(name_article, numericPrice);

        // ✅ Respuesta de éxito si el artículo fue creado correctamente
        res.status(201).json({ message: 'Artículo creado correctamente.' });

    } catch (error) {
        // Si ocurre un error inesperado, respondemos con código 500 y el mensaje de error
        res.status(500).json({ error: error.message });
    }
}

//para actualizar un artículo
async function updateController(req, res) {
    try {
        const { id } = req.params

        const { name_article, price } = req.body

        await articlesModel.updateArticle(id, name_article, price)

        res.status(201).json({ message: 'Artículo actualizado correctamente.' });

    } catch (error) {

        res.status(500).json({ error: error.message });

    }
}

// Exportamos los controladores para que puedan ser utilizados en las rutas
module.exports = { getAllController, createController, updateController, 
    getByIdController, searchController
};
