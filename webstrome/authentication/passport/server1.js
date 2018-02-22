const express=require('express');
const passport=require('passport');
const strategy=require('passport-local').Strategy;
const session=require('express-session');
const bodyParser=require('body-parser');
const {user}=require('./../authentication/user');
const app=express();
app.use(bodyParser.json());
var urlencodedParser = bodyParser.urlencoded({ extended: true });

app.use(session({secret:'secreat'}));

app.use(passport.initialize());
app.use(passport.session());

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


app.get('/',(req,res)=>{
    res.sendFile(__dirname+"/form.html");
});

app.post('/login',urlencodedParser,passport.authenticate('local',{
    successRedirect:'/done',
    failureRedirect:'/err',
}));

app.get('/done',(req,res)=>{
    res.sendFile(__dirname+"/1.html");
});

app.get('/err',(req,res)=>{
    res.status(401).send('not sucess');
});


app.listen(3000,()=>{
    console.log('app started on port 3000')
});