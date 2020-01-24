const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
description:String,
price:Number
},{timestamp:true});

module.exports = mongoose.model("Products",ProductSchema);