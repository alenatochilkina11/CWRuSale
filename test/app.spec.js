const assert = require('chai').assert;
//const app = require('../app');
const testRequestValid = require('../app').testRequestValid;
const testRequestMissingInput = require('../app').testRequestMissingInput;
const testRequestInvalidCaseID = require('../app').testRequestInvalidCaseID;
const testRequestInvalidPhone = require('../app').testRequestInvalidPhone;
const TextMessageNotSent = require('../app').TextMessageNotSent;
const TextMessageSent = require('../app').TextMessageSent;
const testRequestValidUpload = require('../app').testRequestValidUpload;


describe("Submit New Item Tests", function(){
    it('GET/POST Request Attempt', function(){
        assert.equal(testRequestValid(), true); // DOC: SNIT-1
    }),
    it('GET/POST Request Attempt with Invalid Input (Missing Input)', function(){
        assert.equal(testRequestMissingInput(), false); // DOC: SNIT-2
    }),
    it('GET/POST Request Attempt with Invalid Input (Invalid CaseID)', function(){
        assert.equal(testRequestInvalidCaseID(), false); // SNIT-3
    }),
    it('Text Message Notification with no Request for Category', function(){
        assert.equal(TextMessageNotSent(), false); // SNIT-4
    }),
    it('Text Message Notification with Request for Category', function(){
        assert.equal(TextMessageSent(), false); // SNIT-5
    });
});


describe("Request Item Tests", function(){
    it('GET/POST Request Attempt', function(){
        assert.equal(testRequestValid(), true);
    }),
    it('GET/POST Request Attempt with Invalid Input (Missing Input)', function(){
        assert.equal(testRequestMissingInput(), false);
    }),
    it('GET/POST Request Attempt with Invalid Input (Invalid CaseID)', function(){
        assert.equal(testRequestInvalidCaseID(), false);
    }),
    it('GET/POST Request Attempt with Invalid Input (Invalid Phone Number)', function(){
        assert.equal(testRequestInvalidPhone(), false);
    }),
    it('GET/POST Request Attempt with Valid Input (Uploaded to DB)', function(){
        assert.equal(testRequestValid(), true);
    });
});

describe("Delete Request/Item Tests", function(){
    it('GET/POST Request Attempt', function(){
        assert.equal(testRequestValidUpload(), false);
    }),
    it('GET/POST Request Attempt with Invalid Input (Missing Input)', function(){
        assert.equal(testRequestMissingInput(), false);
    }),
    it('GET/POST Request Attempt with Valid Input and Existing Entry', function(){
        assert.equal(testRequestValid(), false);
    }),
    it('GET/POST Request Attempt with Valid Input and Nonexisting Entry', function(){
        assert.equal(testRequestMissingInput(), false);
    });
});

describe("Search Item Tests", function(){
    it('GET/POST Request Attempt', function(){
        assert.equal(testRequestValid(), true);
    }),
    it('GET/POST Request Attempt with Invalid Input (Missing Category)', function(){
        assert.equal(testRequestMissingInput(), false);
    }),
    it('GET/POST Request Attempt with Valid Input and Nonexisting Entry', function(){
        assert.equal(testRequestValid(), true);
    });
});


    // it('Sayhello should return a string', function(){
    //     let result = sayHello();
    //     assert.typeOf(result, 'string');
    // }),
    // it('AddNumbers should be above 5', function(){
    //     let result = addNumbers(5,5);
    //     assert.isAbove(result, 5);
    // }),
    // it('AddNumbers should return an int', function(){
    //     let result = addNumbers(5,5);
    //     assert.typeOf(result, 'number');
    // });