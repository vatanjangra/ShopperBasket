﻿var express = require('express');
var router = express.Router();
var request = require('request');
var config = require('../config.json');

router.get('/', function (req, res) {
    res.render('register');
});

router.post('/', function (req, res) {
    // register using api to maintain clean separation between layers
    request.post({
        url: config.apiUrl + '/users/register',
        form: req.body,
        json: true
    }, function (error, response, body) {
		console.log("out");
		res.setHeader('Content-Type', 'application/json');
        if (error) {
		console.log("error");
            res.send(JSON.stringify({ status: "error" }));
            return res;
        }
        if (response.statusCode !== 200) {
		console.log("not 200");
			res.send(JSON.stringify({ 
error: response.body,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                username: req.body.username }));
            return res;
        }
		res.send(JSON.stringify({ status: "success" }));
		console.log("after");
		return res;
        // return to login page with success message
        //req.session.success = 'Registration successful';
        //return res.redirect('/login');
    });
});

module.exports = router;