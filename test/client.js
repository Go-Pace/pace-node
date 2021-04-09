const should = require('chai').should();
const Client = require('../client/index')

describe('Go Pace Init', function() {
    describe('init gopace', function() {
      it('should return gopace authentication token', function() {
        const client = new Client("private_key")
        client.init();
        should.exist(client.token);
        should.not.equal(client.token, "");
      });
    });
});