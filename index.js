//importing express
const express = require('express')

//importing mongoose
const mongoose = require('mongoose')
const Product = require('./models/product.model.js')
const productRoute = require('./routes/product.route.js')
const app = express()

//Allows to add product as json (middleware)
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//routes
app.use("/api/products", productRoute)

app.get('/', (req, res) =>{
    res.send("Hello from Node API Server");
})



//Db connection 
mongoose.connect('mongodb+srv://raphael:cSm6ErkKRtylgY2C@cluster0.qfgmy.mongodb.net/CRUD_Backend?retryWrites=true&w=majority&appName=Cluster0')
.then(() =>{
    console.log("Connected to database");
    app.listen(4000, () =>{
        console.log("Server is running on port 4000");
    })
})
.catch(() =>{
    console.log("Connection failed");
})
