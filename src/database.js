const mongoose = require("mongoose"),
      Schema = mongoose.Schema,
      db = mongoose.connection,
      uniqueValidator = require('mongoose-unique-validator');;

db.on('error', console.error.bind(console, ("Connection error")));
db.once('open', function(){
    console.log("Connected");
});

mongoose.connect("mongodb://localhost/vRacingArgentina", {useNewUrlParser: true});

var user_Schema = new Schema({
    email : {type : String, required : true, unique : true},
    name : {type : String, required : true, unique : true},
    password : {type : String, 
                required : true,
                validate : {validator:function(p){
                                return this.password_confirmation == p;
                            },
                message:"Las contraseñas no coinciden"}, 
                minlength : [8, "La contraseña debe tener mas de 8 caracteres"]}
});

user_Schema.plugin(uniqueValidator);

user_Schema.virtual("password_confirmation").get(function(){
    return this.p_c;
}).set(function(userPassword){
    this.p_c = userPassword;
});

var userSchema = mongoose.model("Users", user_Schema,"userAccounts");

module.exports.userCreate = userSchema;