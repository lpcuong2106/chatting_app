const { Login } = require('../controllers/login');

var router = require('express').Router();

router.get('/login', (req, res) => {
    res.render('login');
});
router.post('/login', Login);

router.get('/register', (req, res) => {
    res.render('register');
});
router.post('/register', Login);

router.use(function (req, res, next) {
    console.log(req.session)
    if(req.session.user != null){
        next()
    }else{
       res.redirect('/login')
    }
})

router.get('/', (req, res) => {
    res.render('index');
});


module.exports = router;