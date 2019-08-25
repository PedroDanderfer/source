const express = require("express"),
      app = express(),
      path = require("path"),
      bodyParser = require("body-parser")
      ;

//SETTINGS
app.set("port", process.env.port || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(express.static(path.join(__dirname + '/public')));


//ROUTES
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname,"/public/html/index.html"));
});

//register

app.get("/register", function(req,res){
    res.sendFile(path.join(__dirname,"/public/html/register.html"));
});

app.post("/register", function(req,res){
    console.log(req.body.userEmail, req.body.userPassword);
});

//login

app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname,"/public/html/login.html"));
});



//LISTEN
app.listen(app.get("port"), "0.0.0.0", function(req,res){
    console.log("Connected on port: ",app.get("port"));
});