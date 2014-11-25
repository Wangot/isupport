var express = require('express');
var router = express.Router();

router.get('/telering', function(req, res) {
  res.renderLayout('clients/telering', { title: 'Telering'});
});

router.get('/hbv', function(req, res) {
  var logoPath = '/images/hbv_logo.png';
  res.renderLayout('clients/hbv', { title: 'HBV', logo : logoPath});
});

router.get('/fhi', function(req, res) {
  var logoPath = '/images/FHI.png';
  res.renderLayout('clients/fhi', { title: 'FHI', logo: logoPath});
});

router.get('/forskningsradet', function(req, res) {
  var logoPath = '/images/forskningsradet-logo2.png';
  res.renderLayout('clients/fkr', { title: 'forskningsradet', logo : logoPath});
});

router.get('/khio', function(req, res) {
  res.renderLayout('clients/khio', { title: 'KHIO'});
});

router.get('/eurosko', function(req, res) {
  res.renderLayout('clients/eurosko', { title: 'EUROSKO'});
});



module.exports = router;