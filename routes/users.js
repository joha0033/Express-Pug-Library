var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/cool', function(req, res, next) {
  res.render('index', {saying: 'You\'re so cool', title:'the Cool page'});
});

module.exports = router;
