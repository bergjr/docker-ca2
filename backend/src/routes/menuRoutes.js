const express = require('express');
const router = express.Router();
const { createMenu, getMenus, getMenuByName } = require('../controllers/menuController');

router.route('/')
  .get(getMenus)
  .post(createMenu);

router.route('/:name')
  .get(getMenuByName);

module.exports = router;