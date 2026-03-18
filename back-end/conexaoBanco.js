const { MongoClient, ServerApiVersion } = require("mongodb");
require('dotenv').config();


let cluster = "Cluster"
let dbName = "personalPortfolio"
let collectionName = "faleComigo"
let username = process.env.mongoDB_username
let password = process.env.mongoDB_password

const uri = `mongodb+srv://${username}:${password}@cluster.1i6ypbc.mongodb.net/?retryWrites=true&w=majority&appName=${cluster}`;


// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {

  try {

    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();

    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log("Conectado ao MongoDB 🟢");

  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}

run().catch(console.dir);