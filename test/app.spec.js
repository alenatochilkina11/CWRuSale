const assert = require('chai').assert;
//const app = require('../app');
const sayHello = require('../app').sayHello;
const addNumbers = require('../app').addNumbers;

describe("This is the App test", function(){
    it('Sayhello should return hello', function(){
        assert.equal(sayHello(), 'hello');
    }),
    it('Sayhello should return a string', function(){
        let result = sayHello();
        assert.typeOf(result, 'string');
    }),
    it('AddNumbers should be above 5', function(){
        let result = addNumbers(5,5);
        assert.isAbove(result, 5);
    }),
    it('AddNumbers should return an int', function(){
        let result = addNumbers(5,5);
        assert.typeOf(result, 'number');
    });
});