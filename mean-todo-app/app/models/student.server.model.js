var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var StudentSchema = new Schema({
	nombre: String,
	apellidos: String,
	carnet: String,
	email: String
});

mongoose.model('Student',StudentSchema);

