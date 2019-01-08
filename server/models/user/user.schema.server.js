var mongoose = require('mongoose');

var UserSchema = mongoose.Schema(
    {
        username : String,
        password : String,
        firstName : { type: String, default: '' },
        lastName : { type: String, default: '' },
        email : { type: String, default: '' },
        image : { type: String, default: 'logo.png' },
        admin : { type: Boolean, default: false },
        bio : { type: String, default: 'Photography Student' },
        dateCreated : { type: Date, default: Date.now }
    },
    { collection: 'user' }
);

module.exports = UserSchema;