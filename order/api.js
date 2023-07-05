const express = require("express");
const app = express();
const router = express.Router();
const orders = require('./order');
const bodyParser = require('body-parser');

const port = 5001;

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});

app.use(bodyParser.json());

app.use("/api", router);

router.get("/getOrders", async (req, res) => {
    try {
        const allData = await orders.find();
        res.send(allData);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post("/createOrder", async (req, res) => {
    try {
        const userData = req.body;
        const insertedUser = await orders.create(userData);
        res.send(insertedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});