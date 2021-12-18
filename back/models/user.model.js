//Import mongoose library and Schema function
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//User Schema
const userSchema = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


//User model is initialized from the schema
const User = mongoose.model("User", userSchema);

//Export module
module.exports = User;