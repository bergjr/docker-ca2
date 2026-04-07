// 1. Import the service
const menuService = require('../services/menuService');

// 2. EXPORT the GET function 
exports.getMenus = async (req, res) => {
  try {
    const menus = await menuService.getAllMenus();
    res.status(200).json({ success: true, data: menus });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

// 3. EXPORT the POST function
exports.createMenu = async (req, res) => {
  try {
    const { name, products } = req.body; 
    const menu = await menuService.createMenuWithProducts({ name }, products);
    
    res.status(201).json({
      success: true,
      data: menu
    });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

exports.getMenuByName = async (req, res) => {
  try {
    const { name } = req.params; 
    const menu = await menuService.getMenuByName(name);
    if (!menu) {
      return res.status(404).json({ success: false, error: 'Menu not found' });
    }
    res.status(200).json({ success: true, data: menu });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};