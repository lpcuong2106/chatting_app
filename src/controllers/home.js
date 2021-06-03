const connectionDB = require('../connectionDB')

const Home = (req, res) => {
    connectionDB.query(`SELECT id,username from user`, [],function (err, rows, fields) {
        if (err) throw err
        const listUser = []
        if(rows.length > 0){
            rows.forEach(row => {
                listUser.push({
                    username: row.username,
                    id: row.id,
                })
            });
        }
    
        return res.render('index', {
            listUser
        })
      })   
}

const Detail = (req, res) => {
    const { id } = req.params
 
    let userCurrent = ''
    connectionDB.query(`SELECT id,username from user`, [],function (err, rows, fields) {
        if (err) throw err
        const listUser = []
        if(rows.length > 0){
            rows.forEach(row => {
                if(row.id == req.session.user.id){
                    userCurrent = row.id;
                }
                listUser.push({
                    username: row.username,
                    id: row.id,
                })
            });
        }
        let listMessage = []
        // fetch list message
        connectionDB.query('select * from messages where (user_from = ? and user_to = ?) or (user_from = ? and user_to = ?)', [id, userCurrent, userCurrent, id], function(err, rows){
            if(err) console.log(err)
            if(rows.length > 0){
                console.log(rows)
                listMessage = rows;
            }
        })
        console.log('sau doi',listMessage)
        return res.render('message', {
            listUser,
            userTo: id,
            userCurrent
        })
      })   
}

module.exports = {
   Home,
   Detail
}