const mongoose = require("mongoose");

const ProductModel = mongoose.Schema({
    item: {
        type: String,
        required: [true, 'product is required']
    },
    description: {
        type: String,
        required: [true, 'description is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
});

module.exports = mongoose.model("products", ProductModel);