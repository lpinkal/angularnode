const express=require('express');
const bodyparser=require('body-parser');
const cors=require('cors');
const environment=require('./port').module.environment;
const app=express();
app.use(bodyparser.json());
const user=require('./user').module.user;
app.use(cors());
app.get('/',(req,res)=>{
  console.log('res');
  res.send('sucess');
});
app.post('/register',(req,res)=>{
  console.log(req.body);
     let user1=new user(req.body);
        user1.save();
    res.json({'sucess':"true"});
});

app.get('/display',(req,res)=>{
  user.find({}).then((users)=>{
    console.log(users);
    res.json(users);
  })
});

app.post('/delete',(req,res)=>{
  user.findOneAndRemove({id:req.body.id}).then((ans)=>{
    res.json({'sucess':"true"})
  })
});

app.post('/update',(req,res)=>{
  user.findOneAndUpdate({id:req.body.id},{$set:{name:req.body.name}}).then((ans)=>{
    res.json({'sucess':"true"})
  });
});

app.listen(environment.port,()=>{
  console.log(`server started on port ${environment.port}`);
});
