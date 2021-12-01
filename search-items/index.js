const CosmosClient = require("@azure/cosmos").CosmosClient;

const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
  databaseId: "cwru-sale",
  containerId: "uploaded-items",
  partitionKey: { kind: "Hash", paths: ["/items"] }
};

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  let requestedItemCategory = req.query.itemCategory

  //let items = await returnItems();
  let matchedItems
  if (requestedItemCategory == "All"){
    matchedItems = await getAll();

  }else {
    matchedItems = await searchItems(requestedItemCategory);
  }
  var jsonArray = JSON.stringify(matchedItems)

  const responseMessage = `Number of Matches: ${matchedItems.length}. Matches held in "matchedItems"`

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: jsonArray //responseMessage -> changed to the array
  };


}

async function searchItems(category) { // param category
  const { endpoint, key, databaseId, containerId } = config;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);

  // query to return all items with matching category
  const querySpec = {
    query: `SELECT * from c WHERE c.itemCategory = "${category}"`
  };

  // read all items in the Items container
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();

  return items;
}

// return all items
async function getAll(){
  const { endpoint, key, databaseId, containerId } = config;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);

  // query to return all items
  const querySpec = {
    query: `SELECT * from c`
  };

  // read all items in the Items container
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();

  return items;
}