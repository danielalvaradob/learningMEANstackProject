exports.render = function(req, res) {
     res.render('index', {
       title: 'Hello World',
       studentFullName: req.student ? req.student.fullName : ''
}); };