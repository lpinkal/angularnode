let express=require('express');
let bodyParser=require('body-parser');
let app=express();
var arr;
// var urlencodedParser = bodyParser.urlencoded({ extended: false })

app.use(bodyParser.json());
app.post('/',(req,res)=>{
    arr=req.body.name;
    console.log(typeof arr);
    res.send(arr);
});
app.get('/a:id',(req,res)=>{
    console.log(arr[req.params.id]);
    res.send(arr[req.params.id]+'')
});
app.get('/',(req,res)=>{
    console.log(arr[req.query.id1]);
    console.log(arr[req.query.id2]);
    res.send(arr.slice(req.query.id1,req.query.id2)+'')
});
app.put('/put',(req,res)=>{
    console.log(req.query.index);
    console.log(req.query.value);
    arr[req.query.index]=req.query.value
    res.send('index'+req.query.index + ' value'+req.query.value+' ans'+arr)
});
app.delete('/del',(req,res)=>{
    arr.splice(req.query.index,1);
    res.send('index'+req.query.index +'  ans'+arr)
});
app.get('/max',(req,res)=>{
    arr.sort();
    arr.reverse();
    let x=arr.join('');
    res.send(x);
})
app.get('/min',(req,res)=>{
    arr.sort();
    let x=arr.join('');
    res.send(x);
})
app.listen(3000,()=>{
    console.log(`server started on port number 3000`);
});