const mongoose=require('mongoose');
mongoose.Promise=global.Promise;
mongoose.connect('mongodb://localhost:27017/mongoosedata');

const schema=new mongoose.Schema({
    name:String,
    email : String
    // results:[{
    //     sem:{
    //         type:String
    //     },
    //     marks:[
    //
    //     ]
    // }]
});

const Student=mongoose.model('student',schema);

const mark1=new mongoose.Schema({
  email : String,
    angularjs:Number,
    nodejs:Number
});

const mark=mongoose.model('mark',mark1);
// //
// let s1=new Student({name:'abc',email:'abc@gmail.com'});
// s1.save();
// let s2=new Student({name:'xyz',email:'xyz@gmail.com'});
// s2.save();
//
// let m1=new mark({email:'xyz@gmail.com',angularjs:12,nodejs:30});
// m1.save();
//
// let m2=new mark({email:'abc@gmail.com',angularjs:22,nodejs:20});
// m2.save();


mark.aggregate([
    {
        $lookup:{
            from:'students',
            localField:'email',
            foreignField:'email',
            as:'result'
        }
    }
]).then((res)=>{

    for(let i = 0; i < res.length; i++){
    console.log(res[i]);
    }
});
