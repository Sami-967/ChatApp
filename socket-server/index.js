const express = require('express');
const app = express();
const http = require('http');
const { Server } = require('socket.io');
const cors = require('cors');
const q = require('./queue');
app.use(cors());
const server = http.createServer(app);
// var usmanMsg = null;
let queue = new q();
const io = new Server(server, {
    cors: {
        origin: '*',
        methods: ['GET', 'POST'],
    },
});
io.on('connection', (socket) => {
    // console.log(`User Connected:`);
    // console.log('id', socket.id);
    // io.emit('server', 'Hello from server');
    // socket.on('usman', (data) => {
    //  console.log('From usman', data);
    //  usmanMsg = data;
    //  io.emit('Faraz', data);
    // });
    // socket.emit('hello', 'Hello msg');
    // socket.on('y', (data) => {
    //     console.log('y', data);
    //     // console.log(queue)
    //     io.emit('y', data);
    // })
    const username = socket.handshake.query.username
    socket.on('message', (data) => {
        const message = {
                    message: data.message,
                    senderUsername: username,
                    sentAt: Date.now()
                  }
                  io.emit('fromserver', message)
     ///   console.log(data)
        // queue.enqueue(data);
   // socket.emit("fromserver",data)
            
        // console.log('queue', queue);
        
    });
    // socket.on('ChangeColor', (data, id) => {
    //  // if(queue.getlength>0){}
    //      queue.enqueue(data);
    //        io.emit("SetOpacity",queue.dequeue());
    //  // io.to(data.split(',')[1]).emit('color', data.split(',')[0]);
    //  // io.to(data.split(',')[1]).emit('SetOpacity', data.split(',')[0]);
    //  //console.log(data, socket.id);
    // });
});
server.listen(3001, () => {
    console.log('SERVER IS RUNNING');
});

// io.on('connection', (socket) => {
//     const username = socket.handshake.query.username
//     socket.on('message', (data) => {
//       const message = {
//         message: data.message,
//         senderUsername: username,
//         sentAt: Date.now()
//       }
//       messages.push(message)
//       io.emit('message', message)
  
//     })
//   })