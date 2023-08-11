const express = require('express')

const app = express()
const PORT = 3000
require('dotenv').config()
const mongoose = require('mongoose');
const Fruit = require("./models/fruit.js");
const fruits = require('./models/fruits')
const Veggi = require("./models/veggi.js");
const veggies = require('./models/veggies.js')

// middleware
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.urlencoded({extended:false}));
// app.use(express.json())

app.use((req, res, next) => {
    console.log("I run for all routes");
    next();
  });
  

mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useCreateIndex: true
  });
  mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
mongoose.connection.once('open', ()=> {
    console.log('connected to mongo');
});
mongoose.connection.once("open", () => {
    console.log("connected to mongo");
  });
//   ​
// routes
app.get('/',(req,res)=>{
    res.send("<h1> fruits list =  http://localhost:3000/fruits/</h1><h1>vegetable list = http://localhost:3000/veggies/ ")
})
//  get fruits
app.get("/fruits", async (req, res) => {
    let someFruits = await  Fruit.find({})
     await res.render("Index", {
        fruits: someFruits,
      });
    
  });
// get veggies
app.get("/veggies", async (req, res) => {
    let someVeggies = await  Veggi.find({})
     await res.render("Vndex", {
        veggies: someVeggies,
      });
    
  });

app.post("/fruits", async (req, res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    const newFruit = await Fruit.create(req.body)
    // await res.send(newFruit);
    console.log(fruits);
    res.redirect("/fruits");
  });
//   redirect fruits / veggies
app.post("/veggies", async (req, res) => {
    if (req.body.readyToEat === "on") {
      req.body.readyToEat = true;
    } else {
      req.body.readyToEat = false;
    }
    const newVeggi = await Veggi.create(req.body)
    // await res.send(newFruit);
    console.log(veggies);
    res.redirect("/veggies");
  });
// --------post
app.get('/fruits/new',(req ,res) =>{
    res.render("New")
})
app.get('/veggies/new',(req ,res) =>{
    res.render("Vnew")
})

// enter fruit / veggi
app.get("/fruits/:id", async (req, res) => {
    const eachFruit = await Fruit.findById(req.params.id)
    await res.render("Show",{
      fruit: eachFruit
    })
  });
app.get("/veggies/:id", async (req, res) => {
    const eachVeggie = await Veggi.findById(req.params.id)
    await res.render("vShow",{
      veggi: eachVeggie
    })
  });

// shows each fruit
app.listen(PORT,(req,res)=>{
   console.log('on port 3K')
})