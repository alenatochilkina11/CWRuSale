const CosmosClient = require("@azure/cosmos").CosmosClient;
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioClient = require('twilio')(accountSid, authToken);

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

// main function that gets called when trigger function recieves request
module.exports = async function (context, req) {
  context.log('JavaScript HTTP trigger function processed a request.');

  // information from user
  let name = req.query.name
  let caseID = req.query.caseID
  let itemCategory = req.query.itemCategory
  let itemDescripton = req.query.itemDescripton
  let itemTitle = req.query.itemTitle
  let itemPrice = req.query.itemPrice
  let phone = req.query.phone
  let imageUrl = req.query.imageUrl

  // preping user information for database insertion
  let newItemEntry = {
    name: name,
    caseID: caseID,
    itemCategory: itemCategory,
    itemDescripton: itemDescripton,
    itemTitle: itemTitle,
    itemPrice: itemPrice,
    phone: phone,
    imageUrl: imageUrl,
    items: "item"
  }

  // sending text message notification to users who requested it for the category
  let [numMatches, allMessagesSent] = await getRequestsWithCategory(itemCategory);
  let messageStatus
  if (allMessagesSent){
    messageStatus = "Text messages notification sent successfully to requesters."
  }
  else {
    messageStatus = "Text messages to requesters failed."
  }

  // inputing user data into the database
  let entries = await createDocument(newItemEntry);

  // success message for users
  const responseMessage = `Thank you, ${entries[entries.length - 1].name}. Your item id is: ${entries[entries.length - 1].id}. Save this ID to delete your entry in the future. Number of Requests with matching category: ${numMatches}. ${messageStatus}`

  context.res = {
    body: responseMessage
  };
}

// function to create new database of it does not exist already
async function create(client, databaseId, containerId) {
  const partitionKey = config_items.partitionKey;
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

// inserting the user data into the database
async function createDocument(newItem) {
  const { endpoint, key, databaseId, containerId } = config_items;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);
  await create(client, databaseId, containerId);
  const { resource: createdItem } = await container.items.create(newItem);

  // query to return all items
  const querySpec = {
    query: "SELECT * from c"
  };

  // read all items in the items container
  const { resources: items } = await container.items
    .query(querySpec)
    .fetchAll();

  return items;
}

// this function will take in the new category and search the requests database and retreieve an array of all the requests with the matched category. 
async function getRequestsWithCategory(category) {
  const { endpoint, key, databaseId, containerId } = config_requests;
  const client = new CosmosClient({ endpoint, key });
  const database = client.database(databaseId);
  const container = database.container(containerId);

  // query to return all requests and the status of the messages with matching category
  const querySpec = {
    query: `SELECT * from c WHERE c.categoryRequested = "${category}"`
  };

  // read all items in the Requests in container, store in items
  const { resources: requests } = await container.items
    .query(querySpec)
    .fetchAll();

  // returns the array of requests with all information
  let numMatches = requests.length
  let allMessagesSent = true;
  for (let i = 0; i < requests.length; i++){
    let messageSuccess = await sendTextMessage(requests[i].phoneNumber, requests[i].categoryRequested, requests[i].name);
    if (!messageSuccess){
      allMessagesSent = false;
    }
  }
  return [numMatches, allMessagesSent];
}

// attempts to send text message and returns the status of it
async function sendTextMessage(phone, category, name) {
  try{
    twilioClient.messages.create({
      body: `Hello, ${name}! A new item in the category you requested, ${category} has been uploaded. Go to CWRUSale to check it out!`,
      to: '+12243864447', // phone // because I have a free trail account, I can only send messages to myself. In real applications, there will be a phone number parameter.
      from: '+12177083377' // this is the free twilio number
    }).then(message => console.log(message))
      //fallback code
      .catch(error => console.log(error))
    return true;
  }
  catch(err){
    return false;
  }
}