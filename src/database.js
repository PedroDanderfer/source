const mongoose = require("mongoose");

mongoose.createConnection("mongodb://localhost/userAccounts");

var user_Schema = {
    email : String,
    password : String
}

var userSchema = new Schema(user_Schema);