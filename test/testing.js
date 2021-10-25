const assert = require('chai').assert;
const testSearchItems = require('../testScript').testSearchItems

describe('Testing Search Items', function(){
    it('Testing search items', function(){
        assert.equal(testSearchItems(), 'hello');
    });
});