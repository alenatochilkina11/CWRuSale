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

    //const name = (req.query.name || (req.body && req.body.name));
    let name = req.query.name
    let caseID = req.query.caseID
    let phoneNumber = req.query.phoneNumber
    let categoryRequested = req.query.categoryRequested

    let newRequestInfo = [name, caseID, phoneNumber, categoryRequested]

    let newRequestEntry = {
        requestInfo : newRequestInfo
        }

    let entries = await createDocument(newRequestEntry);
    
    const responseMessage = `Thank you, ${entries[entries.length-1].requestInfo[0]}. Your request id is: ${entries[entries.length-1].id}.}`
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

async function create(client, databaseId, containerId) {
    const partitionKey = config.partitionKey;
  
    /**
     * Create the database if it does not exist
     */
    const { database } = await client.databases.createIfNotExists({
      id: databaseId
    });
    console.log(`Created database:\n${database.id}\n`);
  
    /**
     * Create the container if it does not exist
     */
    const { container } = await client
      .database(databaseId)
      .containers.createIfNotExists(
        { id: containerId, partitionKey },
        { offerThroughput: 400 }
      );
  
    console.log(`Created container:\n${container.id}\n`);
  }

  async function createDocument(newItem){
    const { endpoint, key, databaseId, containerId } = config;

    const client = new CosmosClient({ endpoint, key });
    
    const database = client.database(databaseId);
    const container = database.container(containerId);
    // Make sure Tasks database is already setup. If not, create it.
    await create(client, databaseId, containerId);

    const { resource: createdItem } = await container.items.create(newItem);

    // query to return all items
    const querySpec = {
        query: "SELECT * from c"
    };

    // read all items in the Items container
    const { resources: items } = await container.items
        .query(querySpec)
        .fetchAll();
    
    
    return items;
  }