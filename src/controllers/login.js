const connectionDB = require('../connectionDB')

const Login = (req, res) => {
    const {username,password }= req.body;

    connectionDB(`SELECT * from user where username = ? and password = ?`, [username, password],function (err, rows, fields) {
        if (err) throw err
       
        if(rows.length > 0){
            req.session.user = {
                username,
                id: rows[0].id
            };
          
            res.json({
                status: 'OK',
                data: {
                    username: username
                }
               
            })
        }else{
            res.json({
                status: 'ERROR',
                data: {
                    message: 'Username or password don"t match!',
                }
            })
        }
      }) 
   
}

const Register = (req, res) => {
    const {username,password,pre_password }= req.body;
    if(!password || !pre_password || !username){
        return  res.json({
            status: 'ERROR',
            data: {
                message: 'Please enter all the information!',
            }
        }) 
    }

    if(password != pre_password){
        return  res.json({
            status: 'ERROR',
            data: {
                message: 'Password and PrePassword not match!',
            }
        }) 
    }

    connectionDB(`SELECT count(*) as total_user from user where username = ?`, [username],async function (err, [{total_user}], fields) {
        if (err) throw err
        if(total_user > 0){
            return  res.json({
                status: 'ERROR',
                data: {
                    message: 'Account is existed!',
                }
            })  
           
        }else{
            await connectionDB(`insert into user (username, password) values (?,?);`, [username, password])

            connectionDB('SELECT LAST_INSERT_ID() as idNewUser;',function (err, [{idNewUser}], fields) {
                if (err) throw err
      
                req.session.user = {
                    username,
                    id: idNewUser
                };
       
                return res.json({
                    status: 'OK',
                    data: {
                        username: username
                    }
                   
                })
            })
          
        }
       
    })
}

module.exports = {
   Login,
   Register
}