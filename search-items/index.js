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

    let requestedItemCategory = req.query.itemCategory

    //let items = await returnItems();

    let matchedItems = await searchItems(requestedItemCategory);
    
    const responseMessage = `Number of Matches: ${matchedItems.length}. Matches held in "matchedItems"`
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

  async function searchItems(category){ // param category
    const { endpoint, key, databaseId, containerId } = config;

    const client = new CosmosClient({ endpoint, key });
    
    const database = client.database(databaseId);
    const container = database.container(containerId);

    // query to return all items
    const querySpec = {
        query: `SELECT * from c WHERE c.itemInfo[2] = "${category}"` // WHERE itemInfo[2] = category //
    };

    // read all items in the Items container
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    
    
    return items;
  }

//   async function searchItems(items, category){
//     let matchedItems = []
//     let index = 0;
//     for (let i = 0; i < items.length; i++) {
//         if (items[i].itemInfo[2] = category){ //entries[entries.length-1].itemInfo[0]
//             matchedItems[index] = items[i];
//             index++;
//         } 
//       }
//     return matchedItems;
//   }