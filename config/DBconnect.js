const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        const conn = await mongoose.connect("mongodb+srv://<user_name>:<pass>@fcmtest.ldzi5y8.mongodb.net/?retryWrites=true&w=majority")
        console.log("Connected to Mongo Db Successfully....");
    } catch (error) {

        console.log("error from mongodb===", error);
    }
};

module.exports = connectDB;
