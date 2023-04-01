const express = require("express");
const router = express.Router();
const auth = require("../middlewares/auth");
const Card = require("../models/card");
const CardList = require("../models/cardlists");
const joi = require("joi");


// const cardSchema = joi.object({
//     businessName: joi.string().min(2).required(),
//     businessDescription: joi.string().min(6).required(),
//     businessPhone: joi.string().required(),
//     businessImage: joi.string().required(),
//     cardColor: joi.string().required(),
//     _id: joi.string(),
//     __v: joi.number()
// });

const cardSchema = joi.object({
    businessName: joi.string().min(3).required(),
    businessDescription: joi.string().min(5).required(),
    businessAddress: joi.string().required().min(9),
    businessPhone: joi.string().required().min(9).max(10),
    businessImage: joi.string().required(),
    cardColor: joi.string().allow(null,''),
    _id: joi.string(),
    __v: joi.number()
});

router.get("/",auth,async(req,res) =>{
    try {
        let cards = await Card.find();
        res.status(200).send(cards);
    } catch (error) {
        res.status(400).send(error)
    }
})

router.delete("/:cardId", auth, async(req,res) =>{
    try {

        if(!req.payload.isBusiness) return res.status(400).send("access denied,no admin");

        let cardDel = await Card.findByIdAndRemove(req.params.cardId);
        if(!cardDel) return res.status(404).send("no such card");

        let list = await CardList.findOne({userId: req.payload._id});
        let index = list.cards.findIndex((card) => card._id == req.params.cardId);
        list.cards.splice(index,1);
        list.quantity --;
        await list.save();

        res.status(200).send("card removed!");

    } catch (error) {
        res.status(400).send(error);
    }
})

router.put("/:cardId", auth, async(req,res) =>{
    try {
        console.log(req.body);
        if(!req.payload.isBusiness) return res.status(400).send("access denied,no admin");

        const{error} = cardSchema.validate(req.body);
        if(error) return res.status(400).send("wrong input");

        let cardUp = await Card.findOneAndUpdate({_id: req.params.cardId},req.body,{new: true});
        if(!cardUp) return res.status(404).send("no such card");

        let list = await CardList.findOne({userId: req.payload._id});

        let index = list.cards.findIndex((card) => card._id == req.params.cardId);
        list.cards[index] = req.body;
        await list.save();


        res.status(200).send("card updated!");
        
    } catch (error) {
        res.status(400).send(error);
    }
})

module.exports = router;