var mongooose=require('mongoose');
var validator=require('validator');
var jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
var userschema=new mongooose.Schema({
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
        minlength:6,
        required:true
    },
    tokens:[{
       access:{
           type:String,
           required:true
       },
token:{
           type:String,
    required:true
}
    }]
});

userschema.methods.generateAuthToken=function () {
    var user=this;
    var access='auth';

    try{
        var token=jwt.sign({_id:user._id.toHexString(),access},'abc123').toString();
    }catch (e){
        console.log('abc '+e)
    }



    user.tokens.push({access,token});

    return user.save().then(()=>{
        return token;
    });
};

userschema.statics.findByToken=function (token) {
    var user=this;
    var decoded;
    try{
        decoded=jwt.verify(token,'abc123');
    }catch(e){
        return Promise.reject();
        }
    return user.findOne({
        '_id':decoded._id,
        'tokens.token':token,
        'tokens.access':'auth'
    });
};

userschema.pre('save',function (next) {
    var user=this;
    if(user.isModified('password')){
        var password=user.password;
        bcrypt.genSalt(10,(err,salt)=>{
            bcrypt.hash(password,salt,(err,hash)=>{
                user.password=hash;
                next();
            })
        })
    }else {
        next();
    }
});

userschema.statics.findByCredential=function (email,password) {
    var user=this;
    return user.findOne({email}).then((user)=>{
        if(!user){
            return Promise.reject();
        }

        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,user.password,(req,res)=>{
                if(res){
                    resolve(user);
                }
                else {
                    reject();
                }
            })
        })
    })
};

userschema.methods.removeToken=function (token) {
    var user=this;
    return user.update({
    $pull:{
        tokens:{token}
    }
    });
};


// if(user.isModified('password')){
//     var password=user.password;
//     bcrypt.genSalt(10,(err,salt)=>{
//         bcrypt.hash(password,salt,(err,hash)=>{
//             user.password=hash;
//             console.log(hash);
//             next();
//         });
//     });
//
//
// }else {
//     next();
// }

var user=mongooose.model('users',userschema);




module.exports={user};