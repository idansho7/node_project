const express = require("express");
const joi = require("joi");
const router = express.Router();
const jwt = require("jsonwebtoken");
const User = require("../models/user");
const CardList = require("../models/cardlists");
const bcrypt = require("bcrypt");


const userSchema = joi.object({
    name: joi.string().min(2),
    email: joi.string().email().required().min(6),
    password: joi.string().min(8).required(),
    isBusiness: joi.boolean().required()
});

router.post("/",async(req,res) =>{
    try {

        const{error} = userSchema.validate(req.body);
        if(error) return res.status(400).send("wrong input");

        let user = await User.findOne({email: req.body.email});
        if(user) return res.status(400).send("already exist");

        user = new User(req.body);
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(req.body.password, salt);
        await user.save();

        if(user.isBusiness){
            let cardList = new CardList ({userId: user._id,cards:[],quantity: 0});
            await cardList.save();
        }
        return res.status(201).send("success");

    } catch (error) {
         res.status(400).send(error);
    }
})

module.exports = router;
