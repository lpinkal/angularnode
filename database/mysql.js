const express=require('express');
const app=express();
const bodyparser=require('body-parser');
const mysql=require('mysql');
const  connection=mysql.createConnection({
   host:'localhost',
    user:'root',
    password:'',
    database:'my_db'
});

app.use(bodyparser.json());

connection.connect((err)=>{
    if(err){
        console.log('err');
    }else{
        console.log('connected');
    }
});

// let sql=`CREATE TABLE customers(id INT PRIMARY KEY,name VARCHAR(25),address VARCHAR(50))`;
// connection.query(sql,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

//
// let sql1=`INSERT INTO customer VALUES (7,'abc3','wertyuy3')`;
// connection.query(sql1,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });
//
// let  x='abc';
// let sql2=`SELECT * FROM customer LIMIT 2,4`;
// connection.query(sql2,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

//
// let  x='abc';
// let sql2=`DELETE FROM customer WHERE name='abc'`;
// connection.query(sql2,[x],(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

//
// let sql2=`DROP TABLE IF EXISTS CUSTOMERS`;
// connection.query(sql2,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

//
// let sql2=`UPDATE customer SET address='123' WHERE name='abc2'`;
// connection.query(sql2,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });



// let sql=`CREATE TABLE product(id INT ,p_name varchar(15),value varchar(4))`;
// connection.query(sql,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

// let sql1=`INSERT INTO product VALUES (6,'aa','17')`;
// connection.query(sql1,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });


// let sql2=`SELECT * FROM customer LEFT JOIN product ON customer.id=product.id`;
// connection.query(sql2,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });
// connection.query("CALL `count`()",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

// connection.query("SELECT `ADD`() ",(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

//
// let sql='CREATE VIEW viewdemo AS SELECT id,value FROM product';
// connection.query(sql,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

//
// let sql='select * from viewdemo where id<6';
// connection.query(sql,(err,result)=>{
//     if(err){
//         console.log(err);
//     }else {
//         console.log(result);
//     }
// });

app.post('/post',(req,res)=>{
    // let sql="create or replace PROCEDURE insertdata(IN id int(4),IN name varchar(50),IN address varchar(30)) begin insert into customer values(id,name,address); end";
    let sql1="create or replace TRIGGER trigdata AFTER INSERT ON customer FOR EACH ROW BEGIN if(new.id>20) THEN INSERT INTO product VALUES(56,'dresf',45); END IF; END";
     connection.query(sql1,(err,result)=>{
         if(err){
             console.log(err);
         }else {
             console.log(result);
         }
     })  ;

    console.log(req.body);
    let data=[
        req.body.id,req.body.name,req.body.address
    ];
    connection.query("CALL `insertdata`(?,?,?)",data,(err,result)=>{
        if(err){
        console.log(err);
    }else {
        console.log(result);
    }
    });
    res.send('sucess')
});

 // connection.end();

app.listen('3001',()=>{
    console.log('3001');
});