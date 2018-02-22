let mongClient=require('mongodb').MongoClient;
let url=`mongodb://localhost:27017/`;
mongClient.connect(url,(err,db)=>{
  if(err)throw err;
  var dbase=db.db('mydb');
   console.log('connected');
    var obj = [
        { _id: 15234, name: 'Chocolate Heaven'},
        { _id: 155588, name: 'Tasty Lemon'}
    ];
 dbase.collection('customers').insertMany(obj,(err,res)=>{
     if(err)throw err;
     console.log('add');
     db.close();
 });


});