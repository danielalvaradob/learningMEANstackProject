 var passport = require('passport'),
       mongoose = require('mongoose');
   module.exports = function() {
     var Student = mongoose.model('Student');
     passport.serializeUser(function(student, done) {
       done(null, student.id);
});
     passport.deserializeUser(function(id, done) {
       Student.findOne({
         _id: id
       }, '-password -salt', function(err, user) {
         done(err, user);
       });
});
     require('./strategies/local.js')();
 };