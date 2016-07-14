var express = require('express');
var data = require('../data.json');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('parks', { title: 'Express', parks: data.national_parks});
});

router.get('/park/:name', function(req, res, next) {
	var query = req.params.name;
	var list = [];
	data.national_parks.forEach(function (park){
		if (query.toLowerCase() == park.name.toLowerCase()) {
			list.push(park);
		}
	})
    res.render('parkSearch', {parkList: list});
});

module.exports = router;
