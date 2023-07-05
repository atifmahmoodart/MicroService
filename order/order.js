const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let Order = new Schema({
    name: String,
},
    { timestamps: true }
);

module.exports = mongoose.model("orders", Order);