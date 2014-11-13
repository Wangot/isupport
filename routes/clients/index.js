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

module.exports = router;