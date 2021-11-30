
const CosmosClient = require("@azure/cosmos").CosmosClient;

  const config_items = {
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY,
    databaseId: "cwru-sale",
    containerId: "uploaded-items",
    partitionKey: {kind: "Hash", paths: ["/items"]}
  }; 

  const config_requests = {
    endpoint: process.env.COSMOS_ENDPOINT,
    key: process.env.COSMOS_KEY,
    databaseId: "cwru-sale",
    containerId: "requested-items",
    partitionKey: {kind: "Hash", paths: ["/requests"]}
  }; 

module.exports = async function (context, req) {
    context.log('JavaScript HTTP trigger function processed a request.');

    let id = req.query.id

    let responseMessage = await findDataToDelete(id)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}


async function findDataToDelete(idToDelete){
      let message; // message to be returned to user
      let category;

      let [items, item_container] = await checkItemsWithID(idToDelete)
      let [requests, requests_container] = await checkRequestsWithID(idToDelete)

      if (items.length>0){
        category = "item"
        container = item_container
      }
      else if (requests.length>0){
        category = "request"
        container = requests_container
      }
      else{
        message = "Request/Item with ID does not exist."
        return message
      }

      try{
          const { resource: result } = await container.item(idToDelete, category).delete();
          message = "Request/Item deleted successfully."
      }
      catch(err){
          message = "Request/Item with ID Exists, failed to delete."
        }
    return message;
  }

  async function checkRequestsWithID(id){
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

  async function checkItemsWithID(id){
    const { endpoint, key, databaseId, containerId } = config_items;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    // query to return all requests with matching category
    const querySpec = {
      query: `SELECT * FROM c WHERE c.id = "${id}"`
    };

    // read all items in the Requests in container, store in items
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    // returns the array of requests with all information
    return [items, container];
  }