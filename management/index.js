
const CosmosClient = require("@azure/cosmos").CosmosClient;

// getting information for access to items database
const config_items = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
  databaseId: "cwru-sale",
  containerId: "uploaded-items",
  partitionKey: { kind: "Hash", paths: ["/items"] }
};

// getting information for access to requests database
const config_requests = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
  databaseId: "cwru-sale",
  containerId: "requested-items",
  partitionKey: { kind: "Hash", paths: ["/requests"] }
};

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  // get user id
  let id = req.query.id

  let responseMessage = await findDataToDelete(id)

  context.res = {
    // status: 200, /* Defaults to 200 */
    body: responseMessage
  };
}

// deletes user data with id and returns message if successful
async function findDataToDelete(idToDelete) {
  let message; // message to be returned to user
  let category;
  let name;

  // search for requests and items with matching id (in array)
  let [items, item_container] = await checkItemsWithID(idToDelete)
  let [requests, requests_container] = await checkRequestsWithID(idToDelete)

  // determines of id is for a request or item, sets the user's name and container found in
  if (items.length > 0) {
    category = "item"
    name = items[0].name
    container = item_container
  }
  else if (requests.length > 0) {
    category = "request"
    name = requests[0].name
    container = requests_container
  }
  else {
    message = "Request/Item with ID does not exist." // if DNE in both arrays, the id does not exist
    return message
  }

  // attempts to delete data and returns display message
  try {
    const { resource: result } = await container.item(idToDelete, category).delete();
    message = `Thank you, ${name}. Request/Item deleted successfully.`
  }
  catch (err) {
    message = "Request/Item with ID Exists, failed to delete."
  }
  return message;
}

// returns an array with all requests with matching id- length =0 if DNE
async function checkRequestsWithID(id) {
  const { endpoint, key, databaseId, containerId } = config_requests;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);

  // query to return all requests with matching category
  const querySpec = {
    query: `SELECT * FROM c WHERE c.id = "${id}"`
  };

  // read all items in the Requests in container, store in items
  const { resources: requests } = await container.items
    .query(querySpec)
    .fetchAll();
  // returns the array of requests with all information
  return [requests, container];
}

// returns an array with all items with matching id- length =0 if DNE
async function checkItemsWithID(id) {
  const { endpoint, key, databaseId, containerId } = config_items;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);

  // query to return all items with matching category
  const querySpec = {
    query: `SELECT * FROM c WHERE c.id = "${id}"`
  };

  // read all items in the items in container, store in items
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();
  // returns the array of items with all information
  return [items, container];
}