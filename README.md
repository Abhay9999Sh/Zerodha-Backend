# 🚀 Zerodha-Pro Backend

This is the **backend** for **Zerodha-Pro**, a full-stack trading platform built using **Node.js, Express, MongoDB, and Mongoose**. It provides APIs for handling **orders, watchlists, holdings, and positions**.

## 🛠 Tech Stack
- **Node.js** & **Express.js** – Backend framework
- **MongoDB & Mongoose** – Database & ODM
- **Firebase Authentication** – Secure user login/signup
- **Cors & Body-Parser** – Middleware for handling requests

## 📡 Deployment
- **Backend:** Hosted on render 
- **Check out live :** https://zerodha-backend-18pf.onrender.com
- **Database:** MongoDB Atlas
  

## 📂 Routes

### **Holdings**
- `GET /allHoldings` → Fetch all user holdings  

### **Positions**
- `GET /allPositions` → Fetch all open positions  

### **Watchlist**
- `GET /allWatchList` → Fetch all stocks in the watchlist  

### **Orders**
- `GET /allOrders` → Fetch all orders  
- `POST /newOrder` → Place a new order  
- `DELETE /deleteOrder/:id `→ Delete an order by ID

## 🔗 Frontend Repository
Check out the **frontend repository** for the client-side code:  
https://github.com/Abhay9999Sh/ZerodhaPro

  
