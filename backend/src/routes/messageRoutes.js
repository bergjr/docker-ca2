const express = require('express')
const router = express.Router()
const {
  createMessage,
  getMessages
} = require('../controllers/messageController')

// POST
router.post('/', createMessage)

// GET (admin use later)
router.get('/', getMessages)

module.exports = router