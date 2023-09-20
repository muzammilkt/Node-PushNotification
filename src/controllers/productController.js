const { createProduct, listAllProducts, deleteOne, updateOne } = require("../services/productService");

const getAllProducts = async (req, res) => {
    try {
        const resp = await listAllProducts();
        res.send(resp);
    } catch (err) {
        res.send("Error" + err).status(400);
    }
};

const createProducts = async (req, res) => {
    try {
        const data = {
            item: req.body.item,
            description: req.body.description,
            amount: req.body.amount,
        }
        const resp = await createProduct(data);
        res.json(resp);
    } catch (err) {
        res.send("Error" + err).status(400);
    }
};

const deleteProducts = async (req, res) => {
    try {
        const id = req.params.id;
        const deleteRes = await deleteOne(id);
        res.send(deleteRes);
    } catch (err) {
        res.send("Error" + err).status(400);
    }
};


const updateProduct = async (req, res) => {
    try {
        const id = req.params.id;
        const data = {
            item: req.body.item,
            description: req.body.description,
            amount: req.body.amount,
        }
        const udpateRes = await updateOne(id, data);
        res.send(udpateRes);
    } catch (error) {

    }
}


module.exports = {
    getAllProducts,
    createProducts,
    deleteProducts,
    updateProduct,
}