const mongoose = require('mongoose');

const specificationSchema = new mongoose.Schema({
  key: String,
  value: String,
});

const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  description: String,
  category: String, // You had enum earlier; you can keep it if needed.
  material: String,
  inStock: Boolean,
  images: [String], // Array of image URLs
  rating: Number,
  reviews: Number, // Total review count; if you want detailed reviews, use an array instead
  features: [String], // array of feature strings
}, { timestamps: true });


module.exports = mongoose.model('Product', productSchema);
