const CosmosClient = require("@azure/cosmos").CosmosClient;

// get access to items database
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
  let matchedItems

  // if category is selected, get items in it 
  if (requestedItemCategory == "All" || requestedItemCategory == "Select"){
    matchedItems = await getAll();

  }else {
    matchedItems = await searchItems(requestedItemCategory);
  }

  // convert to JSON
  var jsonArray = JSON.parse(JSON.stringify(matchedItems))

  context.res = {
    body: jsonArray
  };


}

// function to get all items with matching category
async function searchItems(category) {
  const { endpoint, key, databaseId, containerId } = config;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);

  // query to return all items with matching category
  const querySpec = {
    query: `SELECT * from c WHERE c.itemCategory = "${category}"`
  };

  // read items in the Items container with matching category
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