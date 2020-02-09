//include express and mongoose
var express = require('express')
var mongoose = require("mongoose");
var app = express();


app.listen(3000);

//routes
app.post("/login", function(req, res){
    console.log(req.body);
});

const port = 3050; 
const io = require("socket.io")(port);
const Message = require("./Message");



console.log("Server running on port " + port);

io.on("connection", function(socket) {

    console.log("User connected");

     socket.on("message", function(data){
         const username = data.username;
         const message = data.message; 
         console.log("Message received from " + data.username);
         io.emit("message", Message.format(message, username));
     })
 })

 mongoose.connect('mongodb://localhost:27017/whatsapplite', { useNewUrlParser: true });
 const conn = mongoose.connection;
 const Schema = mongoose.Schema;
 
 const schema = new Schema({
   name: String
 });
 
 const Test = mongoose.model('test', schema);
 
 const test = new Test({ name: 'one' });
 
 async function run() {
   console.log('Mongoose: ${mongoose.version}');
   await conn.dropDatabase();
   await test.save();
   let found = await Test.findOne();
   console.log(found);
   return conn.close();
 }
 
 run();