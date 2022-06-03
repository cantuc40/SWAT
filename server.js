//IMport dependencies and allow enviromental variables
const mongoose = require('mongoose');
const express = require('express');
const cors = require('cors');
const path = require('path')
require('dotenv').config();


//Create middleware and establish port number
const app = express();
const port = process.env.PORT || 8080; 
app.use(cors());
app.use(express.json());

//Import uri from .env file and connect to the DB
const uri = process.env.MONGO_URI;
mongoose.connect(uri);

//Connect to DB
const connection = mongoose.connection;
connection.once('open', () =>{
    console.log("Connection Successful")
});

//Import Issue router and use
const issueRouter = require('./controllers/issue.controller');
app.use('/api/issues', issueRouter);


if (process.env.NODE_ENV == 'production'){
    app.use(express.static("client/build"));
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
})
}




//Listen on port 5000
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
});



