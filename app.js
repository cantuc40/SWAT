//IMport dependencies and allow enviromental variables
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path')
require('dotenv').config();


//Create middleware and establish port number
const app = express();
app.use(cors());
app.use(express.json());

const uri = process.env.MONGO_URI;
mongoose.connect(uri);


//Import Issue router and use
const issueRouter = require('./controllers/issue.controller');
const issueTestRouter = require('./test/controllers/issueTest.controller')
app.use('/api/issues', issueRouter);
app.use('/api/issues/test', issueTestRouter);


if (process.env.NODE_ENV == 'production'){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})
}


module.exports = app;


