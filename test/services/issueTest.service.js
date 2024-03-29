const IssueTest = require('../models/issueTest.model');

const issueTestService = {
    getIssues(req,res){
        IssueTest.find()
        .then(issues => res.json(issues))
        .catch(err => res.json(err))
    },

    getIssuebyID(req,res){
        IssueTest.findById(req.params.id)
        .then(issue => res.json(issue))
        .catch(err => res.json(err))
    },

    createIssue(req,res){
        const name = req.body.name;
        const ticket_num = Math.floor((Math.random() * 10000) + 1);
        const project_name = req.body.project_name;
        const file_location = req.body.file_location;
        const filename = req.body.filename;
        const row = req.body.row;
        const col = req.body.col;
        const status = req.body.status;
        const description = req.body.description;
    

        const newIssue = new IssueTest({
            name,
            ticket_num,
            project_name,
            file_location,
            filename,
            row,
            col,
            status,
            description
        });

        newIssue.save()
        .then(() => res.status(201).json("Issue Added"))
        .catch(err => res.json(err));
    },

    updateIssuebyID(req,res){
        IssueTest.findById(req.params.id)
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
            .catch(err => res.json(err));
    })
    
    .catch(err => res.status(404).json("User not found"))
    },

    deleteIssuebyID(req,res) {
        IssueTest.findByIdAndDelete(req.params.id)
        .then(() => res.json("Issue deleted"))
        .catch(err => res.json(err));
    },

}

module.exports = issueTestService;