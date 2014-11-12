module.exports = function(req, res) {
  res.renderLayout('default/index', { title: 'Express' });
}