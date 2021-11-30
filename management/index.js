const CosmosClient = require("@azure/cosmos").CosmosClient;

  const config = {
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY,
    databaseId: "cwru-sale",
    containerId: "requested-items",
    partitionKey: {kind: "Hash", paths: ["/requests"]}
  }; 

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let requestID = req.query.requestID

    let result = await findItemsToDelete(requestID)

    const responseMessage = `executed ${result}` //, ${result}
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}


async function findItemsToDelete(idToDelete){

    let id = idToDelete
    let category = "test"

    const { endpoint, key, databaseId, containerId } = config;

    const client = new CosmosClient({ endpoint, key });
    
    const database = client.database(databaseId);
    const container = database.container(containerId);

     // query to return all items
     const querySpec = {
         query: `SELECT * FROM c WHERE c.id = "${idToDelete}"`
     };

     // read all items in the Items container
     const { resources: items } = await container.items
         .query(querySpec)
         .fetchAll();


    //const { resource: result } = await container.item(id, category).delete(); // category may need to change to "<partition-key-value"
    
    return items;
  }

  // add category option
  // insert something into the requests
  // try delete using that category