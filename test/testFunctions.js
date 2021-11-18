const assert = require('chai').assert;
const testing = require('../testing');

describe('testing', function(){
    it('return hello', function(){
        assert.equal(testing(), 'hello');
    });
});