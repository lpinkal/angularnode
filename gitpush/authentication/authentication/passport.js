const passport=require('passport');
const express=require('express');
const app=express();

app.post('/login',
    passport.authenticate(),(req,res)=>{
    res.redirect('/user/'+req.user.username);
    });
passport.serializeUser((user,cb)=>{
    cb(null,user);
});
app.listen(3000,()=>{
    console.log('server started on 3000');
});