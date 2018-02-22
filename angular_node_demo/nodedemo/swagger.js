const express=require('express');
const swagger=require('swagger-node-express');

var app=express();
app.use(express.json());
app.use(express.urlencoded());

swagger.setAppHandler(app);