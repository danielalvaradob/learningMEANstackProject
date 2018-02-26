var students = require('../../app/controllers/students.server.controller');
   module.exports = function(app) {
     app.route('/students').
     post(students.create).
     get(students.list);

     app.route('/students/:studentID')
     .get(students.read)
     .put(students.update)
     .delete(students.delete);

     app.param('studentID',students.studentByID);
};