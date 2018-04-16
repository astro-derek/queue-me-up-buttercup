var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/bears', function(req, res, next) {
  res.json({message: 'hello'});
});

router.post('/bear', function(req, res, next) {
	res.json({message: 'posted hello'});
});

router.get('/locations', function(request, response, next) {
	response.json({m2: 'done'});
});

router.post('/location', function(req, res, next) {
	var location = mongoose.model('Locations', locationSchema);
	
	res.json({m3: 'yep'});
});


module.exports = router;
