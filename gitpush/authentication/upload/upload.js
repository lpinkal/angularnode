const express=require('express');
const upload=require('express-fileupload');
const path=require('path');
const bodyParser=require('body-parser');
var urlencodedParser = bodyParser.urlencoded({ extended: true });
let app=express();

app.use(upload());
app.set('view engine','ejs');
app.get('/',(req,res)=>{
    res.sendFile(__dirname+'/upload.html');
});

app.post('/upload',urlencodedParser,(req,res)=> {
    console.log(req);
    if (req.files.file === undefined) {
        res.status(401).send('no file found');
    }
    console.log(req.body);
    let file = req.files.file;

    file.mv(path.join(__dirname +"/"+ file.name), (err) => {

        if (err) {
            return res.status(401).send(err);
        }
        return res.render('1.ejs',{
            abc:'success'
        });
    });
});

app.listen('3000',()=>{
    console.log('server started on port 3000');
});