const express = require("express");
const app = express();
const router = express.Router();
const users = require('./user');
const bodyParser = require('body-parser');

const port = 5000;

app.listen(port, function () {
    console.log("Server is running on Port: " + port);
});

app.use(bodyParser.json());

app.use("/api", router);

router.get("/getUsers", async (req, res) => {
    try {
        const allData = await users.find();
        res.send(allData);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});

router.post("/createUser", async (req, res) => {
    try {
        const userData = req.body;
        const insertedUser = await users.create(userData);
        res.send(insertedUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal Server Error');
    }
});