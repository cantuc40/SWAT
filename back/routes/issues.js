const router = require('express').Router();
const Issue = require('../models/issue.model');


//Get all Issues from DB
router.get('/', (req,res) => {
    Issue.find()
    .then(issues => res.json(issues))
    .catch(err => res.status(400).json("Error " + err))

});


//Get a single Issue
router.get('/:id', (req,res) => {
    Issue.findById(req.params.id)
    .then(issues => res.json(issues))
    .catch(err => res.status(400).json("Error " + err))
});


//Add new issue to DB
router.post('/add', (req,res) =>{
    const name = req.body.name;
    const project_name = req.body.project_name;
    const file_location = req.body.file_location;
    const filename = req.body.filename;
    const row = req.body.row;
    const col = req.body.col;
    const status = req.body.status;
    const description = req.body.description;

    const newIssue = new Issue({
        name,
        project_name,
        file_location,
        filename,
        row,
        col,
        status,
        description


    });

    newIssue.save()
    .then(() => res.json("Issue Added"))
    .catch(err => res.status(400).json("Error " + err ));
});

//Update Issue
router.put('/:id', (req,res) => {
    Issue.findById(req.params.id)
    .then(issue => {
        issue.name = req.body.name;
        issue.project_name = req.body.project_name;
        issue.file_location = req.body.file_location;
        issue.filename = req.body.filename;
        issue.row = req.body.row;
        issue.col = req.body.col;
        issue.status = req.body.status;
        issue.description = req.body.description;

        issue.save()
        .then(() => res.json("Issue Updated"))
        .catch(err => res.status(400).json("Error " + err));
    })

    .catch(err => res.status(400).json("Error " + err))
});

//Delete Issue
router.delete('/:id', (req,res) => {

    Issue.findByIdAndDelete(req.params.id)
    .then(() => res.json("Issue deleted"))
    .catch(err => res.status(400).json("Error " + err));
});


module.exports = router; 