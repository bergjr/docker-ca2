const Message = require('../models/Message')

// @desc   Create new message
// @route  POST /api/messages
// @access Public
const createMessage = async (req, res) => {
  try {
    const { name, email, telephone, message } = req.body

    if (!name || !email || !telephone || !message) {
      return res.status(400).json({
        success: false,
        message: 'All fields are required'
      })
    }

    const newMessage = await Message.create({
      name,
      email,
      telephone,
      message
    })

    res.status(201).json({
      success: true,
      data: newMessage
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

// @desc   Get all messages (for admin later)
// @route  GET /api/messages
const getMessages = async (req, res) => {
  try {
    const messages = await Message.find().sort({ createdAt: -1 })

    res.status(200).json({
      success: true,
      count: messages.length,
      data: messages
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message
    })
  }
}

module.exports = {
  createMessage,
  getMessages
}