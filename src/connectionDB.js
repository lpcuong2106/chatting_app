var mysql = require('mysql');
const util = require('util');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'cuongdeptrai',
  database: 'chatting_app',
  insecureAuth : true
})

const query = util.promisify(connection.query).bind(connection);

connection.connect(function(err) {
    if (err) {
      return console.error('error: ' + err.message);
    }
  
    console.log('Connected to the MySQL server.');
  });

  
module.exports = 
  query