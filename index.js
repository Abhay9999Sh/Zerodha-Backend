require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

const bodyParser = require("body-parser");
const cors = require("cors");

const url = process.env.MONGO_URL;
const PORT = process.env.PORT || 8000;

const { HoldingsModel } = require("./model/HoldingsModel");
const { PositionsModel } = require("./model/PositionsModel");

const { WatchListModel } = require("./model/WatchListModel");
const { OrdersModel } = require("./model/OrdersModel");

app.use(cors());
app.use(bodyParser.json());


app.get("/allHoldings", async (req, res) => {
  let allHoldings = await HoldingsModel.find({});
  res.json(allHoldings);
});

app.get("/allPositions", async (req, res) => {
  let allPositions = await PositionsModel.find({});
  res.json(allPositions);
});

app.get("/allWatchList", async (req, res) => {
  let allWatchList = await WatchListModel.find({});
  res.json(allWatchList);
});

app.post("/newOrder", async (req, res) => {
  let newOrder = new OrdersModel({
    name: req.body.name,
    qty: req.body.qty,
    price: req.body.price,
    mode: req.body.mode,
  });

  newOrder.save();

  res.send("Order saved!");
});


app.get("/allOrders", async (req, res) => {
  try {
    const allOrders = await OrdersModel.find({});
    res.json(allOrders); 
  } catch (err) {
    res.status(500).json({ error: "Error fetching orders" });
  }
});


app.delete("/deleteOrder/:id", async (req, res) => {
  try {
    const orderId = req.params.id;
    await OrdersModel.findByIdAndDelete(orderId);
    res.json({ message: "Order deleted successfully" });
  } catch (err) {
    res.status(500).json({ error: "Error deleting order" });
  }
});


app.listen(PORT, () => {
  console.log(`app is listening at port ${PORT}`);
  mongoose.connect(url);
  console.log("DB is connected");
});
