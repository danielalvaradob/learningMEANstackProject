var mongoose = require('mongoose'),
       crypto = require('crypto'),
	Schema = mongoose.Schema;

var StudentSchema = new Schema({
	nombre: String,
	apellidos: String,
	carnet:{
		type: String,
		unique: true,
		required: true
		
	},
	email: {
       type: String,
       match: [/.+\@.+\..+/, "Por favor ingrese un correo válido"]
     },
	created: {
		type: Date,
		default: Date.now
	},
	password: {
		type: String,
		validate: [
		function(password) {
			return password && password.length > 2;
		},'Contraseña debe ser mas larga'
		]
	},
	salt: {
		type:String
	},
	provider: {
		type: String,
		required: 'provider is required'
	},
	providerId: String,
	providerDate: {},

});

StudentSchema.virtual('fullName').get(function() {
	console.log(this.nombre);
     return this.nombre + ' ' + this.apellidos;
});

StudentSchema.pre('save',function(next) {
	if (this.password) {
		this.salt = new
      		Buffer(crypto.randomBytes(16).toString('base64'), 'base64');
    	this.password = this.hashPassword(this.password);
	}
	next();
});



StudentSchema.methods.hashPassword = function(password) {
  return crypto.pbkdf2Sync(password, this.salt, 10000,
    64).toString('base64');
};
StudentSchema.methods.authenticate = function(password) {
  return this.password === this.hashPassword(password);
};

 StudentSchema.statics.findUniqueUsername = function(username, suffix,
     callback) {
     var _this = this;
     var possibleUsername = username + (suffix || '');
     _this.findOne({
       username: possibleUsername
     }, function(err, student) {
       if (!err) {
         if (!student) {
           callback(possibleUsername);
         } else {
           return _this.findUniqueUsername(username, (suffix || 0) +
             1, callback);
         }
       } else {
         callback(null);
} });
};

/*
Let's go over these changes. First, you added four  elds to your UserSchema object: a 
salt property, which you'll use to hash your password; a provider property, which will 
indicate the strategy used to register the user; a providerId property, which will 
indicate the user identi er for the authentication strategy; and a providerData property,
which you'll later use to store the user object retrieved from OAuth providers.
// Create the 'findOneByUsername' static method
StudentSchema.statics.findOneBycarnet = function(carnet, callback) {
	// Use the 'findOne' method to retrieve a user document
	this.findOne({
		carnet: new RegExp(carnet, 'i')
	}, callback);
};


*/

StudentSchema.set('toJSON', { getters: true, virtuals: true });

mongoose.model('Student',StudentSchema);

