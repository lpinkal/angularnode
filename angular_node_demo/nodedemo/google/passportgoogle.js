// const localstrategy=require('passport-local').Strategy;
 const googlestrategy=require('passport-google-oauth').OAuth2Strategy;
 const {Userdata}=require('../userschema');
// var configAuth = require('./auth');
 const passport=require('passport');
const express=require('express');
const cors = require('cors');
const app=express();

app.use(passport.initialize());
app.use(passport.session());
//app.use(cors());

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200
};

app.use(cors(corsOptions));
app.options('/products/:id', cors(corsOptions));
//
//  app.use((req, res, next)=> {
//     res.header('Access-Control-Allow-Origin', '*');
// res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
// res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
//
//     next();
// });
passport.serializeUser(function(user, done) {
    console.log('ser');
    done(null, user.id);
});

// used to deserialize the user
passport.deserializeUser(function(id, done) {
    Userdata.findById(id, function(err, user) {
        done(err, user);
    });
});

passport.use(new googlestrategy({
        //authorizationURL: 'http://localhost:4200',
    clientID:'195670735204-nnagr7nvh42rt3u7a1vcbndd6bppmmco.apps.googleusercontent.com',
    clientSecret:'kMLNgIMb-263QPvVumPUU_Fd',
    callbackURL:'http://localhost:4200/home'
},
    (token,refreshToken,profile,done)=>{
        debugger;
    process.nextTick(()=>{
        console.log('process');
        console.log('token',token);
        console.log('refreshtoken',refreshToken);
        console.log('profile',profile);
        console.log('done',done);
    //     Userdata.findOne({ 'google.id' : profile.id }, function(err, user) {
    //         console.log('123');
    //         if (err)
    //             console.log('err');
    //             return done(err);
    //
    //         if (user) {
    //             console.log('user');
    //             // if a user is found, log them in
    //             return done(null, user);
    //         }
    // })
        Userdata.findOne({email:profile.emails[0].value},(err,users)=>{
            if(err){ console.log('err');return done(null,false);}
            if(!users){console.log('!users');return done(null,false);}
           // if(users.password!==password){console.log('password not match');return cb(null,false);}
            else{console.log(users);return done(null,users);}

        }).catch(()=>{
            console.log('err');
        });
    })
}));


 app.get('/google', passport.authenticate('google', { scope : ['profile', 'email']}));


app.get('/google/callback',
    passport.authenticate('google', {
        successRedirect : '/profile',
        failureRedirect : '/'
    }));

app.get('/profile',(req,res)=>{
    console.log('sucess');
   res.send('sucess');
});

app.get('/',(req,res)=>{
    console.log('fail');
    res.send('fail');
});

app.listen(3001,
    ()=>{
        console.log('server started on port 3001');
        });