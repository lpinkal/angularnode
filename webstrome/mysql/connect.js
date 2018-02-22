let mysql=require('mysql');
let con=mysql.createConnection({
host:'sql12.freemysqlhosting.net',
    user:'sql12214321',
    password:'chIxUvNgTV',
    database: "sql12214321"
});
con.connect((e)=>{
   if(e) throw e;
   console.log('connected');
  let sql='CREATE TABLE table1(name varchar(20),id varchar(20))';
  con.query(sql,(e)=>{
      if(e) throw e;
      console.log('created')
  })

});