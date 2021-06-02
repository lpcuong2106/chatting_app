const connectionDB = require('../connectionDB')

const Login = (req, res) => {
    const {username,password }= req.body;

    connectionDB.query(`SELECT * from user where username = ? and password = ?`, [username, password],function (err, rows, fields) {
        if (err) throw err
     
        if(rows.length > 0){
            req.session.user = username;
            return res.redirect('/');
        }else{
            return res.render('login', {
                message: 'Registration Complete. Please login to continue.',
                messageClass: 'alert-success'
            });
        }
       
      })   
}

module.exports = {
    Login: Login
}