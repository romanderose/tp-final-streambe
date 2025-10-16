const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');

// Ruta GET para obtener todos los artículos
router.get('/', articlesController.getAllController);

// Ruta POST para crear un nuevo artículo
router.post('/', articlesController.createController);

//para obtener un producto por su nombre o parte de él (si existe)
router.get('/search', articlesController.searchController)

// Ruta GET para obtener un artículo por su ID
router.get('/:id', articlesController.getByIdController);

//para actualizar un articulo
router.put('/:id', articlesController.updateController)

// Ruta DELETE para eliminar un artículo por su ID
router.delete('/:id', (req, res) => {
    const { id } = req.params;
    res.json({
        mensaje: `Artículo ${id} eliminado`,
    });
});

module.exports = router;
