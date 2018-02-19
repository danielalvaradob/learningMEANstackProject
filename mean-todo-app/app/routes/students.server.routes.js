var students = require('../../app/controllers/students.server.controller');
   module.exports = function(app) {
     app.route('/students').post(students.create).get(students.list)
     
};