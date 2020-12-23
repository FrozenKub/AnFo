const router = require('express').Router()
const passport = require('./pass').passport

const logger = require('./logger');
const {findUserById} = require("./database");

const {
    HttpError,
    NOT_FOUND,
    INTERNAL_SERVER_ERROR
} = require("./httpError");

router.use(logger.logRequestToConsole);

router.get('/api/users/login', (req, res) => {
    let flashMessage = req.flash()
    if (flashMessage) {
        res.send({
            message: flashMessage
        })
    } else {
        res.send({
            message: "Unexpected error"
        })
    }
})


router.post('/api/users/login', passport.authenticate('login',
    {
        failureRedirect: '/api/users/login',
        failureFlash: true
    }), (req, res) => {
    res.send({message: "SUCCESS"})
});

router.post('/api/users/name',(req, res) => {
    res.send({login: req.user.id})
    console.log("ID: " + req.user.id)
});

router.get('/api/user/logout', function (req, res) {
    req.logout();
    res.send({message: "SUCCESS LOGOUT"})
});


router.get('/api/user', passport.authenticate('cookie', {
    failureRedirect: '/api/users/login',
    failureFlash: true
}), async (req, res) => {
    console.log("HERE")
    res.send({
        username: req.user.username,
        role: req.user.role,
    })
})

router.get('/api/users', passport.authenticate('cookie', {
    failureRedirect: '/api/users/login',
    failureFlash: true
}), async (req, res) => {
    if (req.user) {
        let user = await findUserById(req.user.id)
        res.send(JSON.stringify(user))
    } else {
        res.send("NO OK")
    }
})


router.post('/api/users', passport.authenticate('register', {}), function (req, res) {
    res.send({
        message: "OK",
        error_name: "NO"
    })
})

router.use(function (req, res, next) {
    throw new HttpError(NOT_FOUND, 'Not Found');
});

router.use(function (err, req, res, next) {

    if (!err.statusCode) {
        err.statusCode = INTERNAL_SERVER_ERROR;
        err.name = INTERNAL_SERVER_ERROR + " ERROR";
    }


    res.send({
        message: err.message,
        error_name: err.name
    });
    next(err);
});

module.exports = router