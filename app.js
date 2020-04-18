const express = require("express");
const bodyParser = require("body-parser");
const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));

app.get("/", function(req, res) {
    res.render("sort")
});
app.post("/",function(req,res){

})

app.listen(3000, function() {
  console.log("Live server is set up at port 3000");
});
