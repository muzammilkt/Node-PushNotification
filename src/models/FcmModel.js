const mongoose = require("mongoose");

const FcmModel = mongoose.Schema({
    token: {
        type: String,
        required: [true, 'token is required']
    },
});

module.exports = mongoose.model("fcm", FcmModel);