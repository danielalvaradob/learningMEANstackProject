var Student = require('mongoose').model('Student');
exports.create = function(req, res, next) {
	var student = new Student(req.body);
	student.save(function(err) {
		if (err) {
	        return next(err);
	    } else {
	        res.json(student);
	    	 }
		}
		); 
};

exports.list = function(req,res) {
	Student.find({},function(err,users) {
		if (err) {
			return next(err);
		} else {
			res.json(students);
		}
	});
};


exports.read = function(req,res) {
	res.json(req.student);
};
exports.studentByID = function(req,res,next,id) {
	Student.findOne({
		_id: id
	},function (err,student) {
		if(err) {
			return next(err);
		} else {
			req.student = student;
			next();
		}
	
	});
};

/*
exports.read = function(req, res) {
     res.json(req.user);
};
   exports.userByID = function(req, res, next, id) {
     User.findOne({
       _id: id
     }, function(err, user) {
       if (err) {
         return next(err);
       } else {
         req.user = user;
         next();
} });
};
*/