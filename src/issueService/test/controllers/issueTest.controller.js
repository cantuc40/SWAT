const router = require('express').Router();
const issueTestService = require('../services/issueTest.service');

//Get all Issues from DB
router.get('/', issueTestService.getIssues);

//Get a single Issue
router.get('/:id', issueTestService.getIssuebyID);

//Add new issue to DB
router.post('/add', issueTestService.createIssue);

//Update Issue (all information)
//router.put('/:id', issueTestService.updateIssuebyID);

//Update Issue (Partial information)
router.patch('/:id', issueTestService.updateIssuebyID);

//Delete Issue
router.delete('/:id', issueTestService.deleteIssuebyID);

module.exports = router; 
