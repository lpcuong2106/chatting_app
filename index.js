const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
require('dotenv').config()
const io = new Server(server);
global.io = io;
const bodyParser = require('body-parser');

const cookieParser = require('cookie-parser')
var session = require('express-session')
const connectionDB  = require('./src/connectionDB', server)
const wrap = middleware => (socket, next) => middleware(socket.request, {}, next);

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(cookieParser())

app.use(session({secret: 'chatting_app',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

app.set('views', `${__dirname}/src/views`);
app.use(require(`${__dirname}/src/routes`));


io.use(wrap(session({secret: 'chatting_app',saveUninitialized: true,resave: true})));

io.on('connection', (socket) => {
    socket.broadcast.emit('new_user_join')
    socket.authenticated = false;
    socket.join('A_B')
    socket.on('chat message', async (msg) => {
 
      const userFrom = msg.room.split('_')[0];
      const userTo = msg.room.split('_')[1];
      await connectionDB('insert into messages (user_from, user_to, message, created_at) values (?,?,?,?)', [msg.id, userTo, msg.message, new Date()])

      io.to(msg.room).emit('chat message', msg);
    });

    socket.on("disconnecting", (reason) => {
      console.log('user disconnected', reason, socket.rooms);
      
        for (const room of socket.rooms) {
          if (room !== socket.id) {
            if( socket.authenticated){
              io.to(room).emit("user_left", socket.username);
            }
          }
       
      }
     
    });
    socket.on('createRoom', async function({userTo, userCurrent}) {
      socket.join([`${userCurrent}_${userTo}`, `${userTo}_${userCurrent}`]) 
    })
    socket.on('create user', async function(details, callback){
      // Set details on the socket.
      
      socket.authenticated = true;
      socket.username = details;

    })
});

io.of("/").adapter.on("create-room", (room) => {
  console.log(`room ${room} was created`);
});

io.of("/").adapter.on("join-room", (room, id) => {
  console.log(`socket ${id} has joined room ${room}`);
});

io.of('/').adapter.on("leave-room", (room, id) => {
  console.log(`socket ${id} has left room ${room}`);
})

/// catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

server.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});