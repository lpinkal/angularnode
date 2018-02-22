let express=require('express');
let bodyparser=require('body-parser');

let app=express();
app.use(bodyparser.json())

let {mongoose}=require('./connect');
let {Todo}=require('./todo');

app.post('/post',(req,res)=>{
   let newtodo=new Todo({
       text:req.body.text
   });
   newtodo.save().then((r)=>{
       res.send(r);
   },(e)=>{
       res.send(e);
   });
});

app.get('/get',(req,res)=>{
   Todo.find().then((todos)=>{
       res.send(todos);
   })
});

app.listen('3000',()=>{
    console.log('server started on port 3000');
});
module.exports={app};