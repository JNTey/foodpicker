const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const path = require('path');
const router = express.Router();
var json = require('./db/db.json');

const fetch = require("node-fetch");



app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

router.get('/',function(req,res){
  res.send(json);
});

router.get('/add',function(req,res){
  res.sendFile(path.join(__dirname+'/views/add_poi.html'));
});

router.get('/generate',function(req,res){
  // console.log(json);
  res.sendFile(path.join(__dirname+'/views/generate_poi.html'));
});

router.post('/',function(req,res){
  json["data"].push(req.body) 
  res.sendFile(path.join(__dirname+'/views/add_poi.html'));
});


app.use('/', router);

// set port, listen for requests
app.listen(3000, () => {
  console.log("Server is running on port 3000.");
});

