let mongClient=require('mongodb').MongoClient;
let url=`mongodb://localhost:27017/`;
mongClient.connect(url,(err,db)=> {
    if (err) throw err;
    var dbase = db.db('mongoosedata');

    // db.system.js()

});

