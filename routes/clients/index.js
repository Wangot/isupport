var express = require('express');
var router = express.Router();

router.get('/telering', function(req, res) {
  res.renderLayout('clients/telering', { title: 'Telering'});
});

router.get('/hbv', function(req, res) {
  res.renderLayout('clients/hbv', { title: 'HBV'});
});

router.get('/fhi', function(req, res) {
  res.renderLayout('clients/fhi', { title: 'FHI'});
});

router.get('/forskningsradet', function(req, res) {
  res.renderLayout('clients/forskningsradet', { title: 'forskningsradet'});
});

router.get('/khio', function(req, res) {
  res.renderLayout('clients/khio', { title: 'KHIO'});
});

router.get('/eurosko', function(req, res) {
  res.renderLayout('clients/eurosko', { title: 'EUROSKO'});
});



module.exports = router;