const express = require("express");
const router = express.Router();
const joi = require("joi");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/user");

const logSchema = joi.object({
    email: joi.string().email().required().min(6),
    password: joi.string().min(8).required(),
});

router.post("/", async(req,res) =>{
    try {
        const {error} = logSchema.validate(req.body);
        if(error) return res.status(400).send("wrong input");

        let user = await User.findOne({email:req.body.email});
        if(!user) return res.status(404).send("wrong email or password");

        const checkRes = await bcrypt.compare(req.body.password, user.password);
        if(!checkRes) return res.status(404).send("wrong email or password");

        const token = jwt.sign({_id:user._id, isBusiness: user.isBusiness},process.env.JWTKEY);
        res.status(200).send(token);

        
    } catch (error) {
        res.status(400).send(error)
    }
})

module.exports = router;