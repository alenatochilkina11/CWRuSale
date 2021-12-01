const CosmosClient = require("@azure/cosmos").CosmosClient;

// getting information for access to requests database
const config = {
  endpoint: process.env.COSMOS_ENDPOINT,
  key: process.env.COSMOS_KEY,
  databaseId: "cwru-sale",
  containerId: "requested-items",
  partitionKey: { kind: "Hash", paths: ["/requests"] }
};

module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  // getting user data
  let name = req.query.name
  let caseID = req.query.caseID
  let phoneNumber = req.query.phoneNumber
  let categoryRequested = req.query.categoryRequested

  //prep user data for database entry
  let newRequestEntry = {
    name: name,
    caseID: caseID,
    phoneNumber: phoneNumber,
    categoryRequested: categoryRequested,
    requests: "request"
  }

  // enter new data into database
  let entries = await createDocument(newRequestEntry);

  const responseMessage = `Thank you, ${entries[entries.length - 1].name}. Your request id is: ${entries[entries.length - 1].id}. Save this ID to delete your entry in the future.`

  context.res = {
    body: responseMessage
  };
}

// function to create new database of it does not exist already
async function create(client, databaseId, containerId) {
  const partitionKey = config.partitionKey;
  const { database } = await client.databases.createIfNotExists({
    id: databaseId
  });
  console.log(`Created database:\n${database.id}\n`);
  const { container } = await client
    .database(databaseId)
    .containers.createIfNotExists(
      { id: containerId, partitionKey },
      { offerThroughput: 400 }
    );

  console.log(`Created container:\n${container.id}\n`);
}

async function createDocument(newItem) {
  const { endpoint, key, databaseId, containerId } = config;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);
  await create(client, databaseId, containerId);
  const { resource: createdItem } = await container.items.create(newItem);

  // query to return all items
  const querySpec = {
    query: "SELECT * from c"
  };

  // read all items in the requests container
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();


  return items;
}