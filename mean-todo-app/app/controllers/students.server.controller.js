var Student = require('mongoose').model('Student'),
passport = require('passport');

//guarda un objeto estudiante en la base de datos
/*exports.create = function(req, res, next) {
var student = new Student(req.body);
	student.save(function(err) {
    if (err) {
    	return next(err);
   	} else {
    	res.json(student);
       }
}); };
 

exports.list = function(req,res) {
	Student.find({},function(err,students) {
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
	Student.findByIdAndUpdate(req.student.id, req.body,function(err,student) {
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



// Create a new 'studentByID' controller method
exports.studentByID = function(req, res, next, id) {
  // Use the 'User' Student 'findOne' method to retrieve a specific user
  Student.findOne({
    _id: id
  }, function(err, student) {
    if (err) {
      // Call the next middleware with an error message
      return next(err);
    } else {
      // Set the 'req.student' property
      req.student = student;

      // Call the next middleware
      next();
    }
  });
};
*/


var getErrorMessage = function(err) {
     var message = '';
     if (err.code) {
       switch (err.code) {
         case 11000:
         case 11001:
           message = 'Username already exists';
           break;
         default:
           message = 'Something went wrong';
       }
     } else {
       for (var errName in err.errors) {
         if (err.errors[errName].message) message = err.errors[errName].
   message;
} }
     return message;
   };
   exports.renderSignin = function(req, res, next) {
     if (!req.student) {
       res.render('signin', {
         title: 'Sign-in Form',
         messages: req.flash('error') || req.flash('info')
});
} else {
       return res.redirect('/');

} };
   exports.renderSignup = function(req, res, next) {
     if (!req.student) {
       res.render('signup', {
         title: 'Sign-up Form',
         messages: req.flash('error')
});
} else {
       return res.redirect('/');
     }
};
   exports.signup = function(req, res, next) {
     if (!req.student) {
       var student = new Student(req.body);
       var message = null;
       student.provider = 'local';
       student.save(function(err) {
         if (err) {
           var message = getErrorMessage(err);
           req.flash('error', message);
           return res.redirect('/signup');
         }
         req.login(student, function(err) {
           if (err) return next(err);
           return res.redirect('/');
}); });
     } else {
       return res.redirect('/');
} };
   exports.signout = function(req, res) {
     req.logout();
     res.redirect('/');
 };
