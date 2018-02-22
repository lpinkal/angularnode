let mongoose=require('mongoose');
let Todo=mongoose.model('Todo',{
    text:{
        type:String
    },
    completed:{
        type:Boolean
    }
});

module.exports={Todo};