const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let User = new Schema({
    name: String,
},
    { timestamps: true }
);

module.exports = mongoose.model("users", User);