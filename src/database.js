const mongoose = require("mongoose"),
      Schema = mongoose.Schema;

mongoose.createConnection("mongodb://localhost/userAccounts");

var user_Schema = new Schema({
    email : {type : String, required : true},
    password : {
                    type : String, 
                    required : true,
                    validate : {validator:function(p){
                                    return this.password_confirmation == p;
                                },
                                message:"Las contraseñas no coinciden"}, 
                    minlength : [8, "La contraseña debe tener mas de 8 caracteres"]
    }
});

user_Schema.virtual("password_confirmation").get(function(){
    return this.p_c;
}).set(function(userPassword){
    this.p_c = userPassword;
});

var userSchema = mongoose.model("Users", user_Schema);

module.exports.userCreate = userSchema;