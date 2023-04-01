const mongoose = require("mongoose");

const cardListSchema = new mongoose.Schema({
    userId:{
        type:String,
        required:true,
        unique: true

    },
    cards:{
        type: Array,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    }
})

const CardList = mongoose.model("cardlists", cardListSchema);
module.exports = CardList;