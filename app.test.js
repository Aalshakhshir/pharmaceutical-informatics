const chai = require('chai');
const should = require('should');

const expect = chai.expect;
const url = `http://localhost:3001`;
const request = require('supertest')(url);

describe('GraphQL unit tests', () => {
    it('Returns drugs with disease/name contains "ear"', (done) => {
        request.get('/graphql')
        .send({ query: `{
            Drugs(name: "ear") {
              name,
              diseases,
              id,
              description,
              released
            }
          }`})
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            should(res.body.data.Drugs[0]).have.property('id')
             should(res.body.data.Drugs[0]).have.property('name')
             should(res.body.data.Drugs[0]).have.property('description')
             should(res.body.data.Drugs[0]).have.property('released')
             should(res.body.data.Drugs[0]).have.property('diseases')
            done();
        })
    })
    it('Returns nothing when sending invalid dummy data"', (done) => {
        request.get('/graphql')
        .send({ query: `{
            Drugs(name: "harry potter") {
              name,
              diseases,
              id,
              description,
              released
            }
          }`})
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            should(res.body.data.Drugs).length === 0
            done();
        })
    })
    it('should return folic acid as one drug"', (done) => {
        request.get('/graphql')
        .send({ query: `{
            Drugs(name: "Folic Acid") {
              name,
              diseases,
              id,
              description,
              released
            }
          }`})
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            should(res.body.data.Drugs[0].name).equal('Folic Acid')
            done();
        })
    })
});