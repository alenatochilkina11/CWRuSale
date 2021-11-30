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

    let name = req.query.name
    let caseID = req.query.caseID
    let itemCategory = req.query.itemCategory
    let itemDescripton = req.query.itemDescripton
    let itemTitle = req.query.itemTitle
    let itemPrice = req.query.itemPrice
    let phone = req.query.phone
    let imageUrl = req.query.imageUrl


    //let newItemInfo = [name, caseID, itemCategory, itemDescripton, itemTitle, itemPrice, phone, imageUrl]


    let newItemEntry = {
        //itemInfo : newItemInfo
        name : name,
        caseID: caseID,
        itemCategory: itemCategory,
        itemDescripton: itemDescripton,
        itemTitle: itemTitle,
        itemPrice: itemPrice,
        phone: phone,
        imageUrl: imageUrl,
        items: "item"
        }

    let requests = await getRequestsWithCategory(itemCategory);
    // next steps: send text message to all requests phone numbers in the array that a new item has been added to their category!

    let entries = await createDocument(newItemEntry);
    
    const responseMessage = `Thank you, ${entries[entries.length-1].name}. Your item id is: ${entries[entries.length-1].id}. Number of Requests with matching category: ${requests.length}`
    
    context.res = {
        // status: 200, /* Defaults to 200 */
        body: responseMessage
    };
}

async function create(client, databaseId, containerId) {
    const partitionKey = config_items.partitionKey;
  
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
    const { endpoint, key, databaseId, containerId } = config_items;

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

// this function will take in the new category and search the requests database and retreieve an array of all the requests with the matched category. 
  async function getRequestsWithCategory(category){
    const { endpoint, key, databaseId, containerId } = config_requests;
    const client = new CosmosClient({ endpoint, key });
    const database = client.database(databaseId);
    const container = database.container(containerId);

    // query to return all requests with matching category
    const querySpec = {
        query: `SELECT * from c WHERE c.categoryRequested = "${category}"`
    };

    // read all items in the Requests in container, store in items
    const { resources: requests } = await container.items
        .query(querySpec)
        .fetchAll();
    // returns the array of requests with all information
    return requests;
  }