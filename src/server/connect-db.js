import { MongoClient } from "mongodb";
const url = process.env.MONGODB_URI || `mongodb://localhost:27017/myorganiser`;
let db = null;

export async function connectDB() {
  if (db) return db;
  let client = await MongoClient.connect(url, { useNewUrlParser: true });
  db = client.db();
  console.log("Got the DB", db);
  return db;
}

// connectDB();
