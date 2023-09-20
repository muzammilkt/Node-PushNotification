const express = require('express');
const mongoose = require("mongoose");
const connectDB = require('./config/DBconnect');
// import router from "./src/routes/index";


const port = 8080;

connectDB();
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/product", require('./src/routes/productRoutes'));


app.listen(port, () => console.log(`Server is running at port ${port}`));
