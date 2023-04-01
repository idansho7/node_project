const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema({
    businessName:{
        required: true,
        type: String,
        unique: true,
        minlength: 3
    },
    businessDescription:{
        required: true,
        type: String,
        minlength: 5
    },
    businessAddress:{
        required: true,
        type: String,
        minlength: 9
    },
    businessPhone:{
        required: true,
        type: String,
        minlength: 9,
        maxlength: 10
    },
    businessImage:{
        required: true,
        type: String
    },
    cardColor:{
        type: String
    }

})

const Card = mongoose.model("cards", cardSchema);
module.exports = Card;