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

const Register = (req, res) => {
    const {username,password,pre_password }= req.body;
    if(!password || !pre_password || !username){
        return res.render('register', {
            message: 'Please enter all the information!',
        });
    }

    if(password != pre_password){
        return res.render('register', {
            message: 'Password and PrePassword not match!',
        });
    }

    connectionDB.query(`SELECT count(*) as total_user from user where username = ?`, [username],function (err, [{total_user}], fields) {
        if (err) throw err
        console.log(total_user)
        if(total_user > 0){
            return res.render('register', {
                message: 'Account is existed!',
            });
           
        }else{
            connectionDB.query(`insert into user (username, password) values (?,?)`, [username, password],function (err, rows, fields) {
                // if (err) throw err
                req.session.user = username;
                return res.redirect('/')
            })
          
        }
       
    })
}

module.exports = {
   Login,
   Register
}