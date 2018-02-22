const express=require('express');
const passport=require('passport');
const strategy=require('passport-local').Strategy;
const session=require('express-session');
const bodyParser=require('body-parser');
const {mongoose}=require('./../authentication/connect');
const db=require('./db/users');
const {user}=require('./../authentication/user');
const app=express();
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(session({secret:'secreat'}));

app.use(passport.initialize());
app.use(passport.session());

app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/form.html");
});



passport.use(new strategy(
    (username,password,cb)=> {
        console.log('scd');
        console.log(username);
        console.log(password);
        // db.findByUserName(username,(err,user)=>{
        //     if(err){console.log('err');return cb(err);}
        //     if(!user){console.log('!user');return cb(null,false);}
        //     if(user.password!==password){console.log('psw not match');return cb(null,false)}
        //     return cb(null,user);
        // })
        user.findOne({email:username},(err,user)=>{
            if(err){console.log('err');return cb(err);}
            if(!user){console.log('!user');return cb(null,false);}
            if(user.password!==password){console.log('psw not match');return cb(null,false)}
            //console.log(user);
            return cb(null,user);
        })
    }
));

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

// app.post('/login1',urlencodedParser,(req,res)=>{
//     let a=req.body.username;
//     let b=req.body.password;
//     console.log(a+' '+b);
//     //console.log(res);
//     res.send(a+' '+b);
// });

app.get('/done',(req,res)=>{
   res.sendFile(__dirname+"/1.html");
});

app.get('/err',(req,res)=>{
    res.status(401).send('not sucess');
});

app.post('/logout',(req,res)=>{
    console.log(req.session.passport.user);
   req.logout();
   console.log('logout');
   res.sendFile(__dirname+'/form.html');
});

app.post('/profile',(req,res)=>{
    console.log(req.session.passport.user);
    console.log(req.user.email);
    res.send(req.user.email);
    user.findOne({})
});

app.listen(4000,()=>{
    console.log('server started on port number 4000');
});