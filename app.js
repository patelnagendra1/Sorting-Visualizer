 function quick()
{
  var userInput = document.getElementById("userInput").value;
            document.write(userInput+"=> quick");
}

function bubble()
{
  var userInput = document.getElementById("userInput").value;
            document.write(userInput + "=> bubble");
}

function merge()
{
  var userInput = document.getElementById("userInput").value;
            document.write(userInput + "=> merge");
}

function insertion()
{
  var userInput = document.getElementById("userInput").value;
            document.write(userInput + " =>insertion");
}

function selection()
{
  var userInput = document.getElementById("userInput").value;
            document.write(userInput + " =>selection");
}
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');


app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
app.get("/", function(req, res) {
    res.render("sort");
});
// app.post("/",function(req,res){
//
// })

app.listen(3000, function() {
  console.log("Live server is set up at port 3000");
  
});

