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



## 🛠️ Installation & Setup (Local)

### 1. Clone the repo

```
git clone https://github.com/your-username/prou.git
cd prou
```
2. Install dependencies
```
npm install
```
3. Create .env file
Create a .env file in the root folder:

```
MONGO_URI=your_mongo_connection_string
JWT_SECRET=your_secret_keY.

```
4. Start development server
```
npm run dev
```
5. App will run at:
```
http://localhost:4000
```


# ScreenShots


![](https://github.com/Aakif9866/backend_restapi_proU/blob/main/backend/Picture1.png?raw=true)

![](https://github.com/Aakif9866/backend_restapi_proU/blob/main/backend/Picture2.png?raw=true)


![](https://github.com/Aakif9866/backend_restapi_proU/blob/main/backend/Picture3.png?raw=true)


![](https://github.com/Aakif9866/backend_restapi_proU/blob/main/backend/Picture4.png?raw=true)

