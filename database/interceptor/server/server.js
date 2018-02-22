const express=require('express');
const cors=require('cors');
const app=express();
app.use(cors());
app.get('/',(req,res)=>{
  console.log('get');
  res.send({'sucess':"true"})
});

app.listen(3001,()=>{
  console.log('3001');
});
