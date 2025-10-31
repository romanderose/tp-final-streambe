const express = require('express');
const router = express.Router();
const path = require('path');
const multer = require('multer');

// Controlador
const articlesController = require('../controllers/articlesController');

// --- Configuración de Multer (para subida de imágenes) ---
const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // .jpg, .png, etc.
    const name = Date.now() + ext;               // ejemplo: 1697578234.jpg
    cb(null, name);
  }
});

const upload = multer({ storage, dest: "uploads/" });

// --- Rutas ---

// Obtener todos los artículos
router.get('/', articlesController.getAllController);

// Crear un nuevo artículo (con imagen)
router.post('/', upload.single("image"), articlesController.createController);

// Buscar artículos por nombre o parte de él
router.get('/search', articlesController.searchController);

// Obtener un artículo por ID
router.get('/:id', articlesController.getByIdController);

// Actualizar un artículo (opcionalmente con imagen)
router.put('/:id', upload.single("image"), articlesController.updateController);

// Eliminar un artículo por ID
router.delete('/:id', articlesController.deleteController);

module.exports = router;
