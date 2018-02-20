var Student = require('mongoose').model('Student');

//guarda un objeto estudiante en la base de datos
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


exports.update = function(req,res,next) {
	Student.findByIdAndUpdate(req.student.id, req.body,function(err,user) {
		if (err) {
			return next(err);
		} else {
			res.json(student);
		}
	});
};

exports.delete = function(req,res,next) {
	req.student.remove(function(err) {
		if (err) {
			return next(err);
		} else {
			res.json(req.student);
		}
	})
};

/*
exports.update = function(req, res, next) {
     User.findByIdAndUpdate(req.user.id, req.body, function(err, user) {
     if (err) {
      return next(err);
    } else {
      res.json(user);
} });
};
*/