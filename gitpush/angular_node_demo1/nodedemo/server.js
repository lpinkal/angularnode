const express=require('express');
const cors = require('cors');
const bodyparser=require('body-parser');
const {Userdata}=require('./userschema');


const app=express();
app.use(cors());
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({'extended': 'false'}));



app.post('/post',(req,res)=>{

    // let name=req.body.value.name;
    // let password=req.body.value.password;
    // let email=req.body.value.email;
    // console.log(name+' '+password+' '+email);

    var user1=new Userdata(req.body.value);
    user1.save().then((resolve)=>{
        console.log('sucess');
        res.json({message: 'sucess'});
    },(err)=>{
        console.log('err');
        res.json({message: 'err'});
    })
});

app.post('/login',(req,res)=>{
   console.log(req.body.value.password);
    // Userdata.find({email:req.body.value.email}).then((user)=>{
    //     console.log(user);
    //     res.json({message: 'sucess'});
    // },(err)=>{
    //     res.json({message: 'err'});
    // })
    Userdata.findOne({email:req.body.value.email},(err,users)=>{
        if(err){ console.log('err');res.json({message: 'err'});}
        if(!users){console.log('!users');res.json({message: 'err'});}
        console.log(users);
        if(users.password!==req.body.value.password){console.log('password not match');res.json({message: 'err'});}
        else{res.json({message: 'sucess'});}
    }).catch(()=>{
        console.log('err');
    });
});



app.listen(3000,()=>{
    console.log('app started on port 3000')
});