const express = require("express");
const app = express();
const cors = require("cors");
const register = require("./routes/register");
const login = require("./routes/login");
const cardlist = require("./routes/cardlist");
const card = require("./routes/card");
require("dotenv").config();
const mongoose = require("mongoose");
const port = process.env.PORT || 3000

let loggerMiddleWare = (req,res,next) =>{
    console.log(`Method: ${req.method}, URL:${req.url}`);
    next();
}

app.use(loggerMiddleWare);

app.use(express.json());
app.use(cors());

app.use("/api/cardlists", cardlist);
app.use("/api/cards", card);
app.use("/api/register", register);
app.use("/api/login", login);

mongoose.connect(process.env.DB,{useNewUrlParser: true})
.then(() => console.log("mongo connected"))
.catch((error) => console.log(error));

app.listen(port,() => console.log(`server started at port ${port}`));