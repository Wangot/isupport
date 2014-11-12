var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express' });
});

router.get('/sample', require('./sample'));

router.get('/telering', function(req, res) {
 var fullUrl = req.protocol + '://' + req.get('host') + req.originalUrl;
  res.renderLayout('default/telering', { title: 'Telering', url : fullUrl });
});

router.get('/hbv', function(req, res) {
  res.renderLayout('default/hbv', { title: 'HBV' });
});

router.get('/fhi', function(req, res) {
  res.renderLayout('default/fhi', { title: 'FHI' });
});

module.exports = router;