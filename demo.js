console.log("working");

var express = require("express");

var bodyParser = require("body-parser");

var app = express();
var flist=["govind","kushgra","sam","colt"];

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req,res){
    res.render("home");
 //   res.send("<h1>Root page</h1>");
});

app.get("/friends", function(req,res){

    
    res.render("friends",{friends:flist});
    //   res.send("<h1>Root page</h1>");
});

app.post("/addfriend", function(req,res){
    //console.log(req.body);
    flist.push(req.body.friendname);

    res.redirect("/friends");
    //   res.send("<h1>Root page</h1>");
});

app.get("/loves/:thing", function(req,res){
    var thing = req.params.thing;
    res.render("home",{varThing :thing});
 //   res.send("<h1>Root page</h1>");
});

app.get("/posts", function(req,res){
    var thing = [
        {title:"Dogs", author:"colt"},
        {title:"Cats", author: "sam"},
        {title:"Others",author:"andrew"}
    ]
    res.render("posts",{posts :thing});
 //   res.send("<h1>Root page</h1>");
});

app.get("*", function(req,res){
    res.send("<h1>page not found</h1>");
});


app.listen(2000,function(){

    console.log("Server Started");
});