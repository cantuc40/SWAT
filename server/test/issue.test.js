var chai = require('chai')
var chaiHttp = require('chai-http')
var server = require('../server');

var expect = chai.expect;
chai.use(chaiHttp);

describe("Issue API (/issues)", function () {
  describe("Get Issues (GET, '/')", function () {
    it("should get all issues and return http code 200", function(done){
      chai.request(server)
      .get("/issues/")
      .end(function(err, res){
        expect(res).to.have.status(200);
        done();
      })
    });
    it("Should return 404 error from incorrect url", function(done){
      chai.request(server)
      .get("/issuess/")
      .end(function(err, res){
        expect(err).to.have.status(404);
        done();
      })
    });
  });
  describe("Get Issues by ID (GET, '/:id')", function () {
    it("should get an issue by ID and return http code 200", function(done){
      //Create a test issue
      //get test issue info
    });
    it("Should return 404 error from incorrect url", function(done){
      //input incorrect issue id
    });
    it("Should return 404 error from incorrect ID", function(done){
      //input incorrect issue id
    });
  });
  describe("Create Issue (POST, '/add')", function () {
    it("should create an issue and return http code 201", function(done){
      //Create new Issue
    });
    it("Should return error if a required attribute is not inputted", function(done){
      //Write test here
    });
    it("Should return 404 error from incorrect ID", function(){});
  });
  describe("Update Issue by ID (PUT, '/update/:id')", function () {
    it("should update issue by ID and return http code 200", function(done){});
    it("Should return 404 error from incorrect ID", function(){});
  });
  describe("Delete issue by ID (DELETE, '/delete/:id')", function () {
    it("should delete an issue by ID and return http code 200", function(){});
    it("Should return 404 from incorrect ID", function(){});
  });
});