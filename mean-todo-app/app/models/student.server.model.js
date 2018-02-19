var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var StudentSchema = new Schema({
	Nombre: String,
	Apellidos: String,
	Carnet: String 
});

mongoose.model('Student',StudentSchema);

