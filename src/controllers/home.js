const connectionDB = require('../connectionDB')

const Home = (req, res) => {
    connectionDB(`SELECT id,username from user`, [],async function (err, rows, fields) {
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
        // fetch list message
        const rowListMessage = await connectionDB('select * from messages as m join user as u on m.user_from = u.id where  user_to = "B" order by created_at desc limit 100', [])
      
        return res.render('index', {
            listUser,
            listMessage: rowListMessage,
            userCurrent: req.session.user.id
        })
      })   
}

const Detail = (req, res) => {
    const { id } = req.params
 
    let userCurrent, userChat;
    connectionDB(`SELECT id,username from user`, [],async function (err, rows, fields) {
        if (err) throw err
        const listUser = []
        if(rows.length > 0){
            rows.forEach(row => {
                if(row.id == req.session.user.id){
                    userCurrent = row.id;
                }
                if(row.id == id){
                    userChat = row.username
                }
                listUser.push({
                    username: row.username,
                    id: row.id,
                })
            });
        }
        
        // fetch list message
        const rowListMessage = await connectionDB('select * from messages as m join user as u on m.user_from = u.id where (user_from = ? and user_to = ?) or (user_from = ? and user_to = ?) order by created_at desc limit 100', [id, userCurrent, userCurrent, id])

        return res.render('message', {
            listUser,
            userTo: id,
            userCurrent,
            userChat,
            listMessage: rowListMessage
        })
      })   
}

const searchUserCon = (req, res) => {
    const { searchUser } = req.body
   
    connectionDB(`SELECT id,username from user where username like ?`, ['%'+searchUser+'%'],async function (err, rows, fields) {
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
        
        return res.json({
            status: "OK",
            data: listUser
        })
      })   
}

module.exports = {
   Home,
   Detail,
   searchUserCon
}