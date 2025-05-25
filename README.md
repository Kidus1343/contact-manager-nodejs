# 📇 Contact API (Node.js)

A secure and scalable RESTful API for managing personal contacts, built with **Node.js**, **Express**, and **MongoDB**. Supports full CRUD operations, user authentication with JWT, and protected routes.

---

## 🚀 Features

- RESTful API design with Express
- Contact CRUD: Create, Read, Update, Delete
- User registration and login with JWT authentication
- Protected routes and user-based contact access
- MongoDB integration via Mongoose

---

## 🛠️ Tech Stack

- **Backend**: Node.js, Express.js
- **Database**: MongoDB (Mongoose ODM)
- **Auth**: JWT, bcrypt
- **Testing Tool**: Thunder Client / Postman

---

## 📂 Project Structure

📁 server/
├── controllers/
├── middleware/
├── models/
├── routes/
├── config/
├── utils/
└── server.js

---

## 🧪 API Endpoints

### 🔐 Auth
- `POST /api/users/register` – Register new user
- `POST /api/users/login` – Login user and return JWT
- `GET /api/users/current` – Get current logged-in user (Protected)

### 📇 Contacts (Protected)
- `GET /api/contacts` – Get all contacts for logged-in user
- `GET /api/contacts/:id` – Get single contact
- `POST /api/contacts` – Create a new contact
- `PUT /api/contacts/:id` – Update contact
- `DELETE /api/contacts/:id` – Delete contact

---

## ⚙️ Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/yourusername/contact-api-node.git
   cd contact-api-node
#Install dependencies
npm install
Create .env file
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
Run the server
npm run dev
