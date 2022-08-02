import { MongoClient } from "https://deno.land/x/mongo@v0.31.0/mod.ts";

let db;

export async function connect() {
  const client = new MongoClient();
  await client.connect("mongodb://127.0.0.1:27017");
  console.log("Database connected");
  db = client.database("Bookstore");
}

export function getDb() {
  return db;
}