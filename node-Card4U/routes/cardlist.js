const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const CardList = require("../models/cardlists");
const Card = require("../models/card");
const joi = require("joi");


const cardSchema = joi.object({
    businessName: joi.string().min(3).required(),
    businessDescription: joi.string().min(5).required(),
    businessAddress: joi.string().required().min(9),
    businessPhone: joi.string().required().min(9).max(10),
    businessImage: joi.string().required(),
    cardColor: joi.string().allow(null,'')
});


router.post("/", auth,async (req,res) =>{

    try {
        console.log(req.body);
        const{error} = cardSchema.validate(req.body);
        if(error) return res.status(400).send("wrong input");

        let card = await Card.findOne({businessName: req.body.businessName});
        if(card) return res.status(400).send("Bussiness already exist");

        let list = await CardList.findOne({userId: req.payload._id})
        if(!list) return res.status(404).send("no cards for this user");

        card = new Card(req.body);
        await card.save();

        list.cards.push(card);
        list.quantity ++;
        await list.save();

        res.status(200).send("added succesfully");
        
    } catch (error) {
        res.status(400).send(error);
    }

})

router.get("/",auth, async(req,res) =>{
    try {
        let list = await CardList.findOne({userId: req.payload._id});
        if(!list) return res.status(404).send("no cards for this user");
        res.status(200).send(list);
    } catch (error) {
        res.status(400).send(error);
    }
})



module.exports = router;