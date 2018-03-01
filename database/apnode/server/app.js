const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const environment=require('./environment').module.environment;
const mongoose=require('mongoose');
const admin=mongoose.mongo.Admin;
mongoose.Promise=global.Promise;
var connection=mongoose.connect(environment.mongoURL);

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({'extended':'false'}));
app.use(express.static(path.join(__dirname, '../dist')));

// app.get('/',(req,res)=>{
//   res.send('sucess');
// });

app.get('/database',(req,res)=>{
  res.send({"msg":"sucess"});
});

app.listen(environment.port,()=>{
  console.log(environment.port);
});

// module.exports = app;
