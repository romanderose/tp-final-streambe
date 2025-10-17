const express = require('express');
const router = express.Router();
const articlesController = require('../controllers/articlesController');
const multer = require('multer');

const path = require('path');

const storage = multer.diskStorage({
  destination: 'uploads/',
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname); // .jpg, .png, etc.
    const name = Date.now() + ext;               // ejemplo: 1697578234.jpg
    cb(null, name);
  }
});

const upload = multer({ storage, dest: "uploads/" });


// Ruta GET para obtener todos los artículos
router.get('/', articlesController.getAllController);

// Ruta POST para crear un nuevo artículo
router.post('/', upload.single("image"), articlesController.createController);

//para obtener un producto por su nombre o parte de él (si existe)
router.get('/search', articlesController.searchController)

// Ruta GET para obtener un artículo por su ID
router.get('/:id', articlesController.getByIdController);

//para actualizar un articulo
router.put('/:id', articlesController.updateController)

// Ruta DELETE para eliminar un artículo por su ID
router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  try {
    await prisma.Articles.delete({
      where: { id: parseInt(id) }
    });
    res.json({ message: `Artículo ${id} eliminado` });
  } catch (error) {
    res.status(500).json({ error: 'No se pudo eliminar el artículo' });
  }
});


module.exports = router;
