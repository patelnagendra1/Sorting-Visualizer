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
 app.post("/",function(req,res){
   console.log(req.body);
   if(req.body.bubble === 'bubble')
   {
      res.send("Bubble Sort execeuted succesfiully");
   }
   else if (req.body.quick === 'quick') {
     res.send("Quick Sort execeuted succesfiully");
   }
   else if (req.body.merge === 'merge') {
      res.send("Merge Sort execeuted succesfiully");
   }
   else if (req.body.insertion === 'insertion') {
     res.send("Insertion Sort execeuted succesfiully");
   }

 })


app.listen(3000, function() {
  console.log("Live server is set up at port 3000");
});
