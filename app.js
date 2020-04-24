const express = require("express");
const bodyParser = require("body-parser");
const app = express();
app.set('view engine', 'ejs');
let flag1 = 0;
let flag2 = 0;
let flag3 = 0;
let flag4 = 0;
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static("public"));
let size;
let array = (Array.from({length: 200}, () => Math.floor(Math.random() * 200)))

app.get("/", function(req, res) {
    res.render("sort",{array:array,size:200,flag1:0,flag2:0,flag3:0,flag4:0});
});

app.post("/generate",function(req,res){
  size = req.body.vol;
  array = (Array.from({length: size}, () => Math.floor(Math.random() * size)))
  console.log(req.body);
  res.render("sort",{array:array,size:size,flag1:0,flag2:0,flag3:0,flag4:0})

})

 app.post("/",function(req,res){
   if(req.body.bubble === 'bubble')
   {
      console.log(array);
      res.render("sort",{array:array,size:size,flag1:1,flag2:0,flag3:0,flag4:0});
      flag1 = 0
    //  res.send("Bubble Sort execeuted succesfiully Time req was "+ (end-start) + " millisecond");
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
