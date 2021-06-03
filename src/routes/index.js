const { Home, Detail } = require('../controllers/home');
const { Login, Register } = require('../controllers/login');
const { middlewareLogin } = require('../middleware/checkLogin');

var router = require('express').Router();

router.get('/login',[middlewareLogin], (req, res) => {
    res.render('login');
});
router.post('/login', [middlewareLogin], Login);

router.get('/register', [middlewareLogin], (req, res) => {
    res.render('register');
});
router.post('/register', [middlewareLogin], Register);

router.use(function (req, res, next) {
    if(req.session && req.session.user != null){
        next()
    }else{
       res.redirect('/login')
    }
})
router.use(function(req, res, next) {
    res.locals.user = req.session.user;
    next();
});

router.get('/', Home);
router.get('/messages/:id', Detail);
router.post('/logout', (req, res) => {
    req.session.destroy();
    res.redirect('/login')
})
router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/login');
    });

});

module.exports = router;