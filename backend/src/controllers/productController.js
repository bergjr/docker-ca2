const Product = require('../models/Product');

// @desc    Get all products
exports.getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json({ success: true, count: products.length, data: products });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// @desc    Create product(s) - Handles single or array
// @route   POST /api/v1/products
exports.createProduct = async (req, res) => {
  try {
    // If req.body is an array, it creates many. If it's an object, it creates one.
    const products = await Product.insertMany(
      Array.isArray(req.body) ? req.body : [req.body]
    );
    
    res.status(201).json({
      success: true,
      data: products
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// @desc    Get products by category
exports.getProductsByCategory = async (req, res) => {
  try {
    const products = await Product.find({ category: req.params.catName });
    res.status(200).json({ success: true, data: products });
  } catch (error) {
    res.status(404).json({ success: false, error: 'Category not found' });
  }
};