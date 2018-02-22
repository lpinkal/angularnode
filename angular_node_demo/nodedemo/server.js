const express=require('express');
const cors = require('cors');
const {Userdata}=require('./userschema');
const {ImageData}=require('./userschema');
const bodyParser=require('body-parser');
const passport=require('passport');
const Strategy=require('passport-local').Strategy;
const session=require('express-session');
const ejs=require('ejs');
const fs=require('fs');

var multer  = require('multer');
const upload = multer({dest: '../angulardemo/src/assets/uploads/'});

var urlencodedParser = bodyParser.urlencoded({ extended: true });


const app=express();
app.use(bodyParser.json());
app.use(cors());
app.set('view engine', 'ejs');

app.use(session({secret:'secreat'}));
 app.use(express.static(__dirname+"/uploads/"));
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

app.post('/post',(req,res)=>{

    // let name=req.body.value.name;
    // let password=req.body.value.password;
    // let email=req.body.value.email;
    // console.log(name+' '+password+' '+email);

    var user1=new Userdata(req.body.value);
    console.log(req.body);
    user1.save().then((resolve)=>{
        console.log('sucess');
        res.json({message: 'sucess'});
    },(err)=>{
        console.log('err');
        res.json({message: 'err'});
    })
});

// app.post('/login',(req,res)=>{
//    console.log(req.body.value.password);
//     // Userdata.find({email:req.body.value.email}).then((user)=>{
//     //     console.log(user);
//     //     res.json({message: 'sucess'});
//     // },(err)=>{
//     //     res.json({message: 'err'});
//     // })
//     Userdata.findOne({email:req.body.value.username},(err,users)=>{
//         if(err){ console.log('err');res.json({message: 'err'});}
//         if(!users){console.log('!users');res.json({message: 'err'});}
//         console.log(users);
//         if(users.password!==req.body.value.password){console.log('password not match');res.json({message: 'err'});}
//         else{res.json({message: 'sucess'});}
//     }).catch(()=>{
//         console.log('err');
//     });
// });

app.get('/login',(req,res)=>{
   Userdata.find({},(err,users)=>{
       res.send(users);
   })
});
app.post('/upload',upload.array("uploads[]", 12),urlencodedParser,(req,res)=>{
    // for(let i=0;i<req.files.length;i++){
    //     console.log(req.files[i]);
    //     let img=new ImageData({file:JSON.stringify(req.files[i])})
    //     img.save();
    // }
    console.log(req.files[0].path);
        res.json(req.files)
});

app.get('/',(req,res)=>{
    fs.readdir('../angulardemo/src/assets/uploads/',(err,data)=>{
        console.log(data);
        res.json(data);
    });
});

// app.get('/image.jpeg',(req,res)=>{
// });

app.listen(3001,()=>{
    console.log('app started on port 3001')
});