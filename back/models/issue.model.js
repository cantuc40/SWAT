//Import mongoose library and Schema function
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Issue Schema
const issueSchema = new Schema({
    name: String,
    ticket_num: Number,
    project_name: String,
    file_location: String,
    filename: String,
    row: Number,
    col: Number,
    status: String,
    description: String
});


//Issue model is initialized from the schema
const Issue = mongoose.model("Issue", issueSchema);

//Export module
module.exports = Issue;