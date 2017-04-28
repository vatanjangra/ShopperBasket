var express = require('express');
var router = express.Router();
var userService = require('../../services/user.service');

// routes
router.post('/authenticate', authenticateUser);
router.post('/register', registerUser);
module.exports = router;

function authenticateUser(req, res) {
    userService.authenticate(req.body.username, req.body.password)
        .then(function (token) {
			console.log("dfacdes");
            if (token) {
                // authentication successful
                res.send({ token: token });
            } else {
                // authentication failed
                res.status(401).send('Username or password is incorrect');
            }
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}

function registerUser(req, res) {
    userService.create(req.body)
        .then(function () {
           res.status(200).send(JSON.stringify({ status: "success" }));
        })
        .catch(function (err) {
            res.status(400).send(err);
        });
}