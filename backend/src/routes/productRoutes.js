const express = require('express');
const router = express.Router();

// Import the controller functions we made
const { 
  getProducts, 
  createProduct, 
  getProductsByCategory 
} = require('../controllers/productController');

// Route: /api/v1/products
router.route('/')
  .get(getProducts)      // Fetch all items
  .post(createProduct);  // Add new items (your DUMMY_ITEMS)

// Route: /api/v1/products/category/:catName
router.route('/category/:catName')
  .get(getProductsByCategory);

module.exports = router;