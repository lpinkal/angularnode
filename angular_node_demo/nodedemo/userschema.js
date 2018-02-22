const mongoose=require('mongoose');
const validator=require('validator');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/angularuserdata');
var imageschema=new mongoose.Schema({
   file:{
       type:String,
       required:true
   }
});
var userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        trim:true,
        minlength:1,
        unique:true,
        validate:{
            validator:validator.isEmail,
            message:`{value} not valid`
        }
    },
    password:{
        type:String,
        minlength:3,
        required:true
    },
    gender:{
        type:String,
        required:true,
        trim:true
    }
});

var Userdata=mongoose.model('Userdata',userschema);
var ImageData=mongoose.model('ImageData',imageschema);
module.exports={Userdata,ImageData};