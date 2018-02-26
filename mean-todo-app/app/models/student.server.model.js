var mongoose = require('mongoose'),
	Schema = mongoose.Schema;

var StudentSchema = new Schema({
	nombre: String,
	apellidos: String,
	carnet:{
		type: String,
		unique: true,
		index: true
	},
	email: String,
	created: {
		type: Date,
		default: Date.now
	}
});

StudentSchema.virtual('fullName').get(function() {
	console.log(this.nombre);
     return this.nombre + ' ' + this.apellidos;
});
StudentSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('Student',StudentSchema);

