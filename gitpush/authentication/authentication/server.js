const express=require('express');
const bodyparser=require('body-parser');
const {user}=require('./user');
const {mongoose}=require('./connect');
const _=require('lodash');
const {authenticate}=require('./authenticate');

var app=express();
app.use(bodyparser.json());

app.post('/post',(req,res)=>{

        var body=_.pick(req.body,['email','password']);
        var user1=new user(body);

        user1.save().then((user1)=>{
            // res.send('ans'+user);
            return user1.generateAuthToken();
        }).then((token)=>{
            res.header('x-auth',token).send(user1);
        }).catch((e)=>{
            res.send('error'+e);
        })
});



app.get('/user/me',authenticate,(req,res)=>{
    res.send(req.user);
});

app.post('/user/login',(req,res)=>{

    var body=_.pick (req.body,['email','password']);
  //  console.log(body.email+' '+body.password);
    user.findByCredential(body.email,body.password).then((user)=>{
       user.generateAuthToken().then((token)=>{
           res.header('x-auth',token).send("login sucessful"+user);
       });
    }).catch((e)=>{
        res.status(400).send();
    })
});

app.delete('/user/me/token',authenticate,(req,res)=>{
    req.user.removeToken(req.token).then(()=>{
        res.status(200).send();
    },()=>{
        res.status(401).send();
    });
});


app.listen(3000,()=>{
    console.log('server started on port number 3000');
});