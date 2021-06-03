const middlewareLogin = (req, res, next) => {
    if(req.session.user == null){
        next()
    }else{
        res.redirect('/')
    }
}
module.exports = {
    middlewareLogin
}