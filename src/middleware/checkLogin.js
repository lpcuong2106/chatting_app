const middlewareLogin = (req, res, next) => {
    console.log(req.session.user)
    if(req.session.user == null){
        next()
    }else{
        res.redirect('/')
    }
}
module.exports = {
    middlewareLogin
}