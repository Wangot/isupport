var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', require('./sample'));

router.get('/telering', function(req, res) {
  res.renderLayout('default/telering', { title: 'Telering' });
});

module.exports = router;