var express = require('express');
var router = express.Router();

module.exports = function(app){
	app.use('/', require('./default'));
	app.use('/', require('./clients'));

	//NOTE: Always put this at the end of the router instance
	router.get('/:subdomain', function(req, res) {
		res.redirect('http://www.imento.no/');
	});
	app.use('/', router);
};