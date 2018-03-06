const express=require('express');
const socketio=require('socket.io');
const http=require('http');
const path=require('path');
const app=express();
const port=process.env.PORT||3001 ;
app.use(express.static(path.join(__dirname,'../dist')));
const server=http.createServer(app);

const io=socketio(server);
io.on('connection',(socket)=>{
  console.log('new user connected');

  socket.emit('newMsg',{
    text:'welcome'
  });
  socket.broadcast.emit('newMsg',{
    text:'new user join'
  });

  // socket.emit('newEmail',{
  //   from:"abc@gmail.com",
  //   text:"asdfghh"
  // });
  //
  // socket.on('createEmail',(newemail)=>{
  //   console.log('create email',newemail)
  // })
  //
  // socket.emit('newMsg',{
  //   from:"abc@gmail.com",
  //   text:"new msg"
  // });

  socket.on('createMsg',(newemail)=>{
    console.log('create msg',newemail)
    // io.emit('newMsg',{
    //  to:newemail.to,
    //  text:newemail.text
    // })
    // socket.broadcast.emit('newMsg',{
    //   to:newemail.to,
    //   text:newemail.text
    // })
  });

  socket.on('disconnect',()=>{
    console.log(' user disconnected')
  })
});

server.listen(port,()=>{
  console.log(`server started on port ${port}`);
});
