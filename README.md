# 💎 Jewellery E-commerce Backend (Node.js + MongoDB + render )

This is a backend server built with **Node.js**, **Express**, and **MongoDB** for a jewellery e-commerce application. It supports product management, image uploads (via Cloudinary), and category-based filtering.

---

## 🛠️ Tech Stack

- **Backend:** Node.js, Express
- **Database:** MongoDB (local or Atlas)
- **Image Hosting:** Cloudinary
- **Deployment-ready:** Compatible with Render, Railway, AWS, etc.

---

## 📦 Features

- Product CRUD API
- Upload multiple product images to Cloudinary
- Category-wise product filtering
- Return detailed product info
- Clean and scalable structure

---

## 📁 Project Structure

jewellery-ecommerce/
├── config/
│ ├── db.js
│ └── cloudinary.js
├── controllers/
│ └── productController.js
├── middlewares/
│ └── upload.js
├── models/
│ └── Product.js
├── routes/
│ └── productRoutes.js
├── .env
├── server.js
├── package.json

yaml
Copy
Edit

---

## 🔧 Setup Instructions

### 1. Clone the Repo

```bash
git clone https://github.com/your-username/jewellery-ecommerce.git
cd jewellery-ecommerce
2. Install Dependencies
bash
Copy
Edit
npm install
3. Create .env File
env
Copy
Edit
PORT=5000
MONGO_URI=mongodb://localhost:27017/jewellery-ecommerce

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
4. Start the Server
bash
Copy
Edit
npm start
🔌 API Endpoints
✅ Product APIs
Method	Endpoint	Description
GET	/api/products/category/:category	Get all products in a specific category
GET	/api/products/:id	Get one product by ID
POST	/api/products	Add a new product (send JSON)
POST	/api/products/upload	Upload product images to Cloudinary

🌤️ Image Upload Flow
Use /api/products/upload with multipart/form-data

Send field name images with 1–3 files

API returns array of Cloudinary URLs

Send these URLs in pictures field of the /api/products POST request

🧪 Sample Product JSON
json
Copy
Edit
{
  "no": 1,
  "name": "Golden Heart Pendant",
  "prose": "Celebrate the bond with elegance.",
  "category": "Siblings bond",
  "price": 2999,
  "description": "A beautiful golden pendant to express your eternal bond.",
  "pictures": [
    "https://res.cloudinary.com/demo/image/upload/v1/image1.jpg",
    "https://res.cloudinary.com/demo/image/upload/v1/image2.jpg"
  ],
  "specifications": [
    { "key": "Material", "value": "Gold plated" },
    { "key": "Weight", "value": "5g" }
  ],
  "productDetails": "Traditional yet modern.",
  "benefits": "Lightweight, Hypoallergenic",
  "returnAndDelivery": "Returns within 7 days. Delivered in 3-5 days."
}
🚀 Deployment Guide (Render)
Push code to GitHub

Go to https://render.com

Click "New Web Service"

Connect your GitHub repo

Add environment variables from .env

Choose Node.js as runtime

Set build/start commands:

Build: npm install

Start: node server.js

Click Deploy

📚 Categories Used
Siblings bond

Wedding jewellery

Casual jewellery

🙋‍♂️ Author
Yash Patel
🌐 Portfolio
🔗 LinkedIn

📄 License
This project is licensed under the MIT License.

yaml
Copy
Edit
