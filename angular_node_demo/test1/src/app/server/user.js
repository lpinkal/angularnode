const mongoose=require('mongoose');
const environment=require('./port').module.environment;
mongoose.Promise=global.Promise;
mongoose.connect(environment.mongoURL);

let userschema=new mongoose.Schema({
  id:{
    type:String
  },
  name:{
    type:String
  },
  state:{
    type:String
  },
  city:{
    type:String
  }
});

let user=mongoose.model('user',userschema);

exports.module={user};
