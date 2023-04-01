const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        minlength: 2
    },
    email:{
        type: String,
        minlength: 6,
        required: true,
        unique: true
    },
    password:{
        type: String,
        required: true,
        minlength: 8
    },
    isBusiness:{
        type: Boolean
    }
});

const User = mongoose.model("users",userSchema);
module.exports = User;