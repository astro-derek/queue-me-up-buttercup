var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/bears', function(req, res, next) {
  res.json({message: 'hello'});
});

router.post('/bear', function(req, res, next) {
	res.json({message: 'posted hello'});
});

module.exports = router;
