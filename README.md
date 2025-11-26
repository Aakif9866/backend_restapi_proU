# Employee & Task Management API

A simple RESTful Node.js backend that manages **Users**, **Employees**, and **Tasks**, built with Express and MongoDB (Mongoose).

Only:

- Users can create Employees
- Employees must exist to assign Tasks

This project includes **full CRUD** for all entities.

---

## 🚀 Features

- User authentication (Signup + Login)
- Create, Read, Update, Delete Employees
- Create, Read, Update, Delete Tasks
- Data validation and error handling
- MongoDB Atlas connection
- Production-ready folder structure
- Easy deployment on Render

---

## 🧱 Tech Stack

**Backend**

- Node.js
- Express.js
- Mongoose (MongoDB ODM)

**Security**

- bcryptjs (password hashing)
- jsonwebtoken (JWT auth)

**Environment**

- dotenv
- nodemon (dev only)

---

## 📁 Project Structure

api/
│── index.js
│── package.json
│── .env (not uploaded to GitHub)
│
├── routes/
│ ├── auth.js
│ ├── employee.js
│ └── task.js
│
├── controllers/
│ ├── auth.controller.js
│ ├── employee.controller.js
│ └── task.controller.js
│
├── models/
│ ├── user.model.js
│ ├── employee.model.js
│ └── task.model.js
│
└── utils/
└── error.js

yaml
Copy code

---

## 🛠️ Installation & Setup (Local)

### 1. Clone the repo

```bash
git clone https://github.com/your-username/prou.git
cd prou
2. Install dependencies
bash
Copy code
npm install
3. Create .env file
Create a .env file in the root folder:

ini
Copy code
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_key
⚠️ Do NOT commit .env to GitHub.

4. Start development server
bash
Copy code
npm run dev
5. App will run at:
arduino
Copy code
http://localhost:4000
```
