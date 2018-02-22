var records = [
    { id: 1, username: 'jack', password: 'secret', displayName: 'Jack', emails: [ { value: 'jack@example.com' } ] }
    , { id: 2, username: 'jill', password: 'birthday', displayName: 'Jill', emails: [ { value: 'jill@example.com' } ] }
];

exports.findByUserName=(username,cb)=>{
    process.nextTick(()=>{




        for(let i=0;i<records.length;i++){
            let record=records[i];
            if(record.username===username){
                console.log('1223');
                return cb(null,record);
            }
        }
         return cb(null,null);
    })
};
