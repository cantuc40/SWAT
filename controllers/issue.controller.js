const router = require('express').Router();
const issueService = require('../services/issue.service');


//Get all Issues from DB
router.get('/', issueService.getIssues);

//Get a single Issue
router.get('/:id', issueService.getIssuebyID);

//Add new issue to DB
router.post('/add', issueService.createIssue);

//Update Issue
router.patch('/:id', issueService.updateIssuebyID);

//Delete Issue
router.delete('/:id', issueService.deleteIssuebyID);

module.exports = router; 