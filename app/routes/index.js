var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('login', { title: 'Express' });
  // res.writeHead('Content-Type','text/html');
  // res.end('login.html');
});

module.exports = router;
