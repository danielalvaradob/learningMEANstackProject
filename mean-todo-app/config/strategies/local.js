
   var passport = require('passport'),
       LocalStrategy = require('passport-local').Strategy,
       Student = require('mongoose').model('Student');
   module.exports = function() {
     passport.use(new LocalStrategy(function(username, password, done) {
       Student.findOne({
         carnet: username
       }, function(err, student) {
         if (err) {
           return done(err);
         }
         if (!student) {
           return done(null, false, {
             message: 'Unknown user'
           });
         }
         if (!student.authenticate(password)) {
           return done(null, false, {
             message: 'Invalid password'
}); }
         return done(null, student);
 }); }));
};