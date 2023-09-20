const ProductModel = require("../models/ProductModel");

const createProduct = async (data) => {
    try {
        const res = await ProductModel.create(data);
        return res;
    } catch (error) {
        throw new Error(error)
    }
}

const listAllProducts = async (data) => {
    try {
        const res = await ProductModel.find();
        return res;
    } catch (error) {
        throw new Error(error)
    }
}

const deleteOne = async (id) => {
    try {
        const res = await ProductModel.deleteOne({ _id: id });
        return res
    } catch (error) {
        throw new Error(error)
    }
}

const updateOne = async (id, data) => {
    try {
        const res = await ProductModel.findOneAndUpdate({ _id: id }, data);
        return res;
    } catch (error) {
        throw new Error(error)
    }
}


module.exports = { createProduct, listAllProducts, deleteOne, updateOne }