var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config.json');
var qs = require('querystring');
router.post('/', function (req, res) {
    // authenticate using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/users/authenticate',
        form: req.body,
        json: true
    }, function (error, response, body) {
		console.log("dfa");
		res.setHeader('Content-Type', 'application/json');
        if (error) {
			res.send(JSON.stringify({ status: "error" }));
            return res;
        }

        if (!body.token) {
			res.send(JSON.stringify({ error: body, username: req.body.username }));
            return res;
        }

        // save JWT token in the session to make it available to the angular app
		res.send({ token: body.token });
        //req.session.token = body.token;
		return res;
        // redirect to returnUrl
        //var returnUrl = req.query.returnUrl && decodeURIComponent(req.query.returnUrl) || '/';
        //res.redirect(returnUrl);
    });
});

module.exports = router;
