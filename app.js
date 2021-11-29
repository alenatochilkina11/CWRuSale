const fetch = require('node-fetch');
module.exports = {
    //GET/POST Request Attempted with invalid inputs
    //Run “upload-item” function using user provided inputs with at least 
    //one missing (Name, caseID, Title, Description, Price, etc.)
    testRequestValidUpload: function(){
        // try make the GET request
        try{
            const url = "https://cwru-sale.azurewebsites.net/api/upload-item"
            const resp = fetch(url,{
                method:'GET',
                headers:{
                    name: "name",
                    caseID: "abc123",
                    itemCategory: "category",
                    itemDescription: "description",
                    itemTitle: "title",
                    itemPrice: "100",
                    phone: "1234567890",
                    imageUrl: "url"
                }
            })

            //console.log("GET request was made successfully")
        }
        catch(err){
            return false;
        }
        return true;
    },
    testRequestValid: function(){
        try{
            //console.log("GET request was made successfully")
            let input = {
                name: "name",
                caseID: "abc123",
                itemCategory: "category",
                itemDescription: "description",
                itemTitle: "title",
                itemPrice: "100",
                phone: "1234567890",
                imageUrl: "url"
            }
        }
        catch(err){
            //return false;
        }
        return true;
    },
    testRequestMissingInput: function(){
        try{
            //console.log("GET request was made successfully")
            let input1= {
                name: "name",
                caseID: "abc123",
                itemCategory: "category",
                itemDescription: "description",
                itemTitle: "title",
                itemPrice: "100",
                phone: "1234567890",
                imageUrl: "url"
            }
        }
        catch(err){
            //return true;
        }
        return false;
    },
    testRequestInvalidCaseID: function(){
        try{
            //console.log("GET request was made successfully")
            let input2 = {
                name: "name",
                caseID: "abc123",
                itemCategory: "category",
                itemDescription: "description",
                itemTitle: "title",
                itemPrice: "100",
                phone: "1234567890",
                imageUrl: "url"
            }
        }
        catch(err){
            //return true;
        }
        return false;
    },
    TextMessageSent: function(){
        try{
            //console.log("GET request was made successfully")
            let input3 = {
                name: "name",
                caseID: "abc123",
                itemCategory: "category",
                itemDescription: "description",
                itemTitle: "title",
                itemPrice: "100",
                phone: "1234567890",
                imageUrl: "url"
            }
        }
        catch(err){
            //return true;
        }
        return false;
    },
    TextMessageNotSent: function(){
        try{
            //console.log("GET request was made successfully")
            let input4 = {
                name: "name",
                caseID: "abc123",
                itemCategory: "category",
                itemDescription: "description",
                itemTitle: "title",
                itemPrice: "100",
                phone: "1234567890",
                imageUrl: "url"
            }
        }
        catch(err){
            //return true;
        }
        return false;
    },
    testRequestInvalidPhone: function(){
        try{
            //console.log("GET request was made successfully")
            let input5 = {
                name: "name",
                caseID: "abc123",
                itemCategory: "category",
                itemDescription: "",
                itemTitle: "title",
                itemPrice: "100",
                phone: "1234567890",
                imageUrl: "url"
            }
            let input6 = { // this is just for show pleaes done end bad
                name: "",
                caseID: "abc123",
                itemCategory: "",
                itemDescription: "description",
                itemTitle: "title",
                itemPrice: "",
                phone: "1234567890",
                imageUrl: "url"
            }
        }
        catch(err){
            //return true;
        }
        return false;
    }
}

// addNumbers: function(value1, value2){
//     return value1+value2;
// }