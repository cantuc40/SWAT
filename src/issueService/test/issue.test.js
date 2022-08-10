const request = require("supertest");
const mongoose = require("mongoose");
const app = require("../app");
require('dotenv').config();



describe("Issue API Tests", () => {

  beforeAll(() => {
    let URI = process.env.MONGO_URI;
    return mongoose.connect(URI);
  })

  afterAll(() => {
    return mongoose.connection.close();
  })

  describe('GET Requests', () => {
    it('should get all issues and return 200', () => {
      return request(app)
      .get("/api/issues/test")
      .then(response => {
        expect(response.status).toBe(200)
      })
    })

    it('should not return all issues due to incorrect url and return 404', () => {
      return request(app)
      .get('/api/iss/test')
      .then(response => {
        expect(response.status).toBe(404)
      })
    })

    it('should get an issue and return 200', () =>{
      return request(app)
      .get("/api/issues/test/62f41d4db291b6df75fed106")
      .then(response => {
        expect(response.status).toBe(200)
      })

    })

    it('should not get an issue due to incorrect url and return 404', () =>{
      return request(app)
      .get('/api/iss/test/62f41d4db291b6df75fed106')
      .then(response => {
        expect(response.status).toBe(404)
      })
    })

    //Fix
    it('should not get an issue due to incorrect id and return 404', () =>{
      return request(app)
      .get('/api/issues/test/62f41d4db291b6df75fed103')
      .then(response => {
        expect(response.status).toBe(404)
      })
    })
  })


  describe('POST Requests', () => {
    it('should create an an issue and return 201', () => {
      const num_test = Math.floor((Math.random() * 10000) + 1);
      const test_issue = {
        name: "test",
        ticket_num: num_test,
        project_name: "test_project",
        file_location: "location_test",
        filename: "filename_test",
        row: 0,
        col: 1,
        status: "test_status",
        description: "test_description",
      }
      return request(app)
      .post('/api/issues/test/add')
      .send(test_issue)
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.status).toBe(201)
      })    
    })

    //Fix
    it('should not create an issue due to missing information and return 400', () =>{
      const test_issue = null;
      return request(app)
      .post('/api/issues/test/add')
      .send(test_issue)
      .set('Accept', 'application/json')
      .then(response => {
        expect(response.status).toBe(400)
      }) 
    })

  })

  describe('DELETE Requests', () => {
    it('should delete an issue and return 200', () =>{
      return request(app)
      .delete('/api/issues/test/62f41d4db291b6df75fed106')
      .then(response => {
        expect(response.status).toBe(200)
      })
    })

    //Fix
    it('should not delete an issue due to missing id and return 400', () =>{
      return request(app)
      .delete('/api/issues/test/')
      .then(response => {
        expect(response.status).toBe(400)
      })
    })
  })
  

  

  

  


  

  

})