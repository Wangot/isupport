var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', require('./sample'));

router.get('/telering', function(req, res) {
  var url = 'http://imento.ubook.no';
  res.renderLayout('default/telering', { title: 'Telering', url : url });
});

router.get('/hbv', function(req, res) {
  var url = 'http://imento.ubook.no';
  res.renderLayout('default/hbv', { title: 'HBV', url: url });
});

router.get('/fhi', function(req, res) {
  var url = 'http://imento.ubook.no';
  res.renderLayout('default/fhi', { title: 'FHI', url: url });
});

module.exports = router;