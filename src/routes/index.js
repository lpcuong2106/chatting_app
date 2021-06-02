const { Login } = require('../controllers/login');
const { middlewareLogin } = require('../middleware/checkLogin');

var router = require('express').Router();

router.get('/login',[middlewareLogin], (req, res) => {
    res.render('login');
});
router.post('/login', Login);

router.get('/register', (req, res) => {
    res.render('register');
});
router.post('/register', Login);

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

router.get('/', (req, res) => {
    res.render('index');
});

router.get('/logout',(req,res) => {
    req.session.destroy((err) => {
        if(err) {
            return console.log(err);
        }
        res.redirect('/login');
    });

});

module.exports = router;