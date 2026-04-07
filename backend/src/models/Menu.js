const mongoose = require('mongoose');

const menuSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please add a menu name'],
    unique: true,
    trim: true
  },
  // Relationship: Array of Product ObjectIds
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product'
    }
  ],
  active: {
    type: Boolean,
    default: true
  }
});

module.exports = mongoose.model('Menu', menuSchema);