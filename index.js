const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const {Server} = require("socket.io");
const bodyParser = require('body-parser');
const io = new Server(server);
const cookieParser = require('cookie-parser')
var session = require('express-session')
const connectionDB = require('./src/connectionDB')

app.use(express.static('public'))
app.set('view engine', 'ejs')

app.use(cookieParser())

app.use(session({secret: 'chatting_app',saveUninitialized: true,resave: true}));
app.use(bodyParser.json());      
app.use(bodyParser.urlencoded({extended: true}));

app.use(express.urlencoded({
  extended: true
}))

app.set('views', `${__dirname}/src/views`);
app.use(require(`${__dirname}/src/routes`));

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

io.on('connection', (socket) => {
  
    socket.broadcast.emit('hi');
    socket.broadcast.emit("hello", "world");
    socket.on('chat message', (msg) => {
        io.emit('chat message', msg);
        console.log('message: ' + msg);
    });


    socket.join('some room'); 
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
});
io.to('some room').emit('some event');


server.listen(3000, () => {
  console.log('listening on *:3000');
});