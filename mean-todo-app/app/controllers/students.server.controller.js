var Student = require('mongoose').model('Student');
exports.create = function(req, res, next) {
	var user = new Student(req.body);
	user.save(function(err) {
		if (err) {
	        return next(err);
	    } else {
	        res.json(student);
	    	}
		}
		); 
};