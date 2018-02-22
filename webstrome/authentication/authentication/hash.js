const jwt=require('jsonwebtoken');
const bcrypt=require('bcryptjs');
var password='123abc';
//
// var data={
//     id:4
// }
// let a=jwt.sign(data,'abc1234');
// let b=jwt.verify(a,'abc1234');
//
// console.log(a);
// console.log(b)


bcrypt.genSalt(10,(err,salt)=>{
    bcrypt.hash(password,salt,(err,hash)=>{

        console.log(hash);
    });
});
var hashpsw=`$2a$10$oz8.whnbMHPhIL0w5xIVVePcrtS0QWvyp0sJZHG8v8O49.06H4gT2`;
bcrypt.compare(password,hashpsw,(err,res)=>{
    console.log(res);
});


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













//
// const {SHA256}=require('crypto-js');
// // let msg='javascript';
// //
// // let hash=SHA256(msg).toString();
// // console.log(msg);
// // console.log(hash);
//
// var data={
//    id:4
// };
//
// var token={
//     data,
//     hash: SHA256(JSON.stringify(data)+'something').toString()
// }
//
// // token.data.id=5;
// // token.hash=SHA256(JSON.stringify(token.data)).toString();
//
// var crypt=SHA256(JSON.stringify(token.data)+'something').toString();
//
// if(crypt===token.hash){
//     console.log('not changed');
// }else{
//     console.log('changed');
// }