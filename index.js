const express= require('express');
const mongoose= require('mongoose');
const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://evanward:PDCTXNyGEJF4GmE0@nodejssamplecluster.v8bspbp.mongodb.net/?retryWrites=true&w=majority";
require('dotenv').config()

const app=express();

const url = process.env.MONGODB_URL
console.log("URL: " + url)
mongoose.connect(url, {useNewUrlParser: true});
const con= mongoose.connection;
app.use(express.json());

try{
    con.on('open',() => {
        console.log('connected');
    })
}catch(error)
{
    console.log("Error: "+error);
}

const studentrouter= require("./Routes/routes");
app.use('/students', studentrouter)

const port=9000;
app.listen(port, () =>{
    console.log('Server started');
})

// app.get("/", () => {
//     console.log("GET received")
// })

// app.get("/students", () => {
//     console.log("GET students received")
// })

module.exports = app