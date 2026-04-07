const Menu = require('../models/Menu');

exports.createMenuWithProducts = async (menuData, productIds) => {
 
  const newMenu = await Menu.create({
    name: menuData.name,
    products: productIds 
  });
  return newMenu;
};

exports.createManyMenusWithProducts = async (menus) => {
  if (!Array.isArray(menus) || menus.length === 0) {
    throw new Error('menus must be a non-empty array');
  }

  const documents = menus.map(({ menuData, productIds }) => ({
    name: menuData?.name,
    products: Array.isArray(productIds) ? productIds : []
  }));

  return await Menu.insertMany(documents);
};

exports.getAllMenus = async () => {
  return await Menu.find().populate('products');
};

exports.getMenuByName = async (name) => {
  return await Menu.findOne({ name }).populate('products');
};