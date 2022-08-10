//Import mongoose library and Schema function
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Issue Schema
const issueTestSchema = new Schema({
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
const Issue_Test = mongoose.model("Issue_Test", issueTestSchema);

//Export module
module.exports = Issue_Test;