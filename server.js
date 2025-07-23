const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const productRoutes = require('./routes/productRoutes');
const cors = require('cors');
const seedProducts = require('./seed');

dotenv.config({ debug: true }); // Load .env variables with debug mode

connectDB();

seedProducts();


const app = express();
app.use(cors());
app.use(express.json());

app.use(express.static('public'));

app.use('/products', productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

