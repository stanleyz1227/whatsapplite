// Using Node.js `require()`
const mongoose = require('mongoose');
 
const Schema = mongoose.Schema;
 
var loginInfo = new Schema({
  name: String,
  password: String
});