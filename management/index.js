
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

    let responseMessage = await findItemsToDelete(requestID)

    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}


async function findItemsToDelete(idToDelete){

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
      
      let message;

      let exists = false;
      for (let i = 0; i < items.length; i++) {
          if (items[i].id == idToDelete){
            exists = true;
            break;
          }
      }

      if (exists){
        try{
          const { resource: result } = await container.item(id).delete();
          message = "Request Deleted"
        }
        catch(err){
          message = "Request with ID Exists, Failed to Delete"
        }
      }
      else{
        message = "Request with ID Does not Exist"
      }

     // category may need to change to "<partition-key-value" // const { resource: result } = await container.item(id, category).delete();
    return message;
  }

  // add category option
  // insert something into the requests
  // try delete using that category