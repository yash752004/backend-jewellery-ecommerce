const express = require('express');
const router = express.Router();
const {
  getAllByCategory,
  getProductById,
  createProduct,
  getAllProducts,
} = require('../controllers/productController');
const upload = require('../middlewares/upload');

// GET /api/products 
router.get('/', getAllProducts);

// GET /api/products/category/Siblings bond
router.get('/category/:category', getAllByCategory);

// GET /api/products/:id
router.get('/:id', getProductById);

// POST /api/products
router.post('/', createProduct);

// Add this POST route to upload image(s)
router.post('/upload', upload.array('images', 3), (req, res) => {
  const imageUrls = req.files.map(file => file.path);
  res.json({ images: imageUrls });
});

module.exports = router;
