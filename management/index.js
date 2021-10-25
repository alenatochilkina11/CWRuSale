const CosmosClient = require("@azure/cosmos").CosmosClient;

// const uploaded_config = {
//     endpoint: process.env.COSMOS_ENDPOINT,
//     key: process.env.COSMOS_KEY,
//     databaseId: "cwru-sale",
//     containerId: "uploaded-items",
//     partitionKey: {kind: "Hash", paths: ["/items"]}
//   }; 

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
    let uploadID = req.query.uploadID

    await deleteEntry(requestID)

    const responseMessage = "Deleted."
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}



  // pass the id and partition key value to delete the item
  async function deleteEntry(itemID){

    const newItem = {
        id: "e0e4d70a-782b-46a5-8b0d-f99310d93c40",
        category: "fun",
        name: "Cosmos DB",
        description: "Complete Cosmos DB Node.js Quickstart ⚡",
        isComplete: false
      };

    const { endpoint, key, databaseId, containerId} = config;

    const client = new CosmosClient({ endpoint, key });
    
    const database = client.database(databaseId);
    const container = database.container(containerId);

    //const { resource: createdItem } = await container.items.create(newItem);
    
    //console.log(`\r\nCreated new item: ${createdItem.id} - ${createdItem.description}\r\n`);

    const { id, category } = newItem;

    const { resource: result } = await container.item(id, category).delete();
    console.log(`Deleted item with id: ${id}`);
  }