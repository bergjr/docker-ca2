require('dotenv').config();
const express = require('express');
const connectDB = require('./src/config/db');

const app = express();
const cors = require('cors');
app.use(cors());
// Connect to midnightoil database
connectDB();

// Middleware
app.use(express.json());
app.use('/api/v1/menus', require('./src/routes/menuRoutes'));
app.use('/api/v1/menus/:name', require('./src/routes/menuRoutes')); 
const productRoutes = require('./src/routes/productRoutes');
app.use('/api/v1/products', productRoutes);
const messageRoutes = require('./src/routes/messageRoutes');
app.use('/api/v1/messages', messageRoutes);


const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
