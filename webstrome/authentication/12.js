const express=require('express');
const jwt=require('jsonwebtoken');
const bodyparser=require('body-parser');

const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect("mongodb://localhost:27017/userdata");

var userTable=mongoose.model('userTable',{
    username:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
});

const app=express();

app.use(bodyparser.json());

app.post('/post',(req,res)=>{

    let x=new userTable({
        username:req.body.username,
        password:jwt.sign(req.body.password,'123')
    });

    x.save().then();
    res.send('saved');

});

app.post('/login',(req,res)=>{
    let username=req.body.username;
    userTable.findOne({username:username},(err,user)=>{
        if(err){console.log('err');}
        if(!user){console.log('!user');}
        let psw=jwt.verify(user.password,'123');
        if(psw!==req.body.password){console.log('psw not match'+psw);}
        console.log(user+psw);
        res.send('sucess');
    })
});

app.post('/remove',(req,res)=>{
    let username=req.body.username;
    userTable.remove({username:username},(err,user)=>{
        if(err){console.log('err');}
        res.send('sucess');
    });
});

app.post('/update',(req,res)=>{
    let username=req.body.username;
   userTable.update({username:username},{
       $set:{
           password:'12tfrhfrhbrt'
       }
   },(err,user)=>{
       console.log('err'+err);
       console.log('user'+user);
       if(err){console.log('err');}
       else {
           res.send('sucess');
       }
   })
});

app.listen('2000',()=>{
    console.log('port 2000');
});