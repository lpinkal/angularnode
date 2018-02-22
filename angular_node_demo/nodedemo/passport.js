const express=require('express');
const app=express();
const session=require('express-session');
const cors = require('cors');
const passport=require('passport');
const Strategy=require('passport-local').Strategy;
const {Userdata}=require('./userschema');
const bodyParser=require('body-parser');
app.use(bodyParser.json());
app.use(cors());
var urlencodedParser = bodyParser.urlencoded({ extended: true });
app.use(session({secret:'secreat'}));

app.use(passport.initialize());
app.use(passport.session());

passport.use(new Strategy((username,password,cb)=>{
console.log("name"+username);
    Userdata.findOne({email:username},(err,users)=>{
        if(err){ console.log('err');return cb(null,false);}
        if(!users){console.log('!users');return cb(null,false);}
        console.log(users);
        if(users.password!==password){console.log('password not match');return cb(null,false);}
        else{return cb(null,users);}
    }).catch(()=>{
        console.log('err');
    });
}));



passport.serializeUser((user,cb)=>{
    console.log('ser');
    cb(null,user);
});

passport.deserializeUser((user,cb)=>{
    console.log('deser');
    cb(null,user);
});

app.post('/login',urlencodedParser,passport.authenticate('local',{
    successRedirect:'/done',
    failureRedirect:'/err',
}));

app.get('/done',(req,res)=>{
   console.log('sucess');
   res.json('sucess');
});

app.get('/err',(req,res)=>{
    console.log('err');
    res.json('err');
});
app.listen(3000,()=>{
    console.log('server started on port number 3000');
});