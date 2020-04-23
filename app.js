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

function bubble_Sort(arr){
    var len = arr.length,
        i, j, stop;

    for (i=0; i < len; i++){
        for (j=0, stop=len-i; j < stop; j++){
            if (arr[j] > arr[j+1]){
                let t = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = t;
            }
        }
    }
  }


 app.post("/",function(req,res){

  // console.log(req.body);
   let x = parseInt(req.body.size);
  // console.log(x);
   if(req.body.bubble === 'bubble')
   {

      let arr = (Array.from({length: x}, () => Math.floor(Math.random() * x)));
      //console.log(arr);
      var start = new Date().getTime();
      bubble_Sort(arr);
      var end = new Date().getTime();
      res.send("Bubble Sort execeuted succesfiully Time req was "+ (end-start) + " millisecond");
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
