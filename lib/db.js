// const { MongoClient, ServerApiVersion } = require("mongodb");

// if (!process.env.DB_URI) {
//     throw new Error("Mongo URI not found!")
// }

// const client = new MongoClient(process.env.DB_URI, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// async function getDB(dbName) {
//     try {
//         await client.connect();
//         console.log(">>>>Connected to DB<<<<");
//         return client.db(dbName);
//     } catch (err) {
//         console.log(err);
//     }
// }

// export async function getCollection(collectionName) {
//     const db = await getDB("StarbucksDB");
//     if (db) {
//         return db.collection(collectionName);
//     }
//     return null;
// }

import { MongoClient, ServerApiVersion } from "mongodb";

//This ensures your MongoDB URI is set in your environment variables
if (!process.env.DB_URI) {
  throw new Error("Mongo URI not found!");
}

const uri = process.env.DB_URI;

let client;
let clientPromise;

if (!global._mongoClientPromise) {
  /* -Uses the new MongoDB Server API v1 for stable behavior.
    - strict: true ensures unsupported options throw errors.
    - deprecationErrors: true helps catch deprecated behavior. */
  client = new MongoClient(uri, {
    serverApi: {
      version: ServerApiVersion.v1,
      strict: true,
      deprecationErrors: true,
    },
  });
  //Caches the connection so multiple imports don’t create multiple clients (important in serverless environments like Next.js).
  global._mongoClientPromise = client.connect();
}

clientPromise = global._mongoClientPromise;

//getDB(dbName) returns the database instance.
async function getDB(dbName) {
  const client = await clientPromise;
  return client.db(dbName);
}

//getCollection(collectionName) returns a specific collection in your StarbucksDB.
export async function getCollection(collectionName) {
  const db = await getDB("StarbucksDB");
  return db.collection(collectionName);
}
