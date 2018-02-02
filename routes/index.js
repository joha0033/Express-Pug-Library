var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.redirect('/catalog');
  // console.log(req);
  // console.log("ninja");
  // res.render('index', { title: 'Austin\'s sweet Express App' });
});

module.exports = router;
