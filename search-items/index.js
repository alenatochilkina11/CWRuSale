const CosmosClient = require("@azure/cosmos").CosmosClient;

const config = {
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY,
    databaseId: "cwru-sale",
    containerId: "uploaded-items",
    partitionKey: {kind: "Hash", paths: ["/items"]}
  }; 

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let itemCategory = req.query.itemCategory

    let matchedEntries = await returnItems(itemCategory);
    
    const responseMessage = `Thank you`
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: matchedEntries
    };
}

  async function returnItems(category){
    const { endpoint, key, databaseId, containerId } = config;

    const client = new CosmosClient({ endpoint, key });
    
    const database = client.database(databaseId);
    const container = database.container(containerId);

    // query to return all items
    const querySpec = {
        query: "SELECT * from c WHERE itemInfo[2] = category"
    };

    // read all items in the Items container
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    
    
    return items;
  }